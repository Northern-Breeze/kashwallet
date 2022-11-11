import { NextApiResponse, NextApiRequest } from 'next'
import { SMTPClient } from 'emailjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email } = req.body;
        const client = new SMTPClient({
            user: process.env.MAIL_USER_NAME,
            password: process.env.MAIL_PASSWORD,
            host: 'smtp.mail.yahoo.com',
            ssl: true
        });

        client.send(
            {
                text: `Just received an newsletter subscription from ${email}`,
                from: process.env.MAIL_USER_NAME || '',
                to: process.env.MAIL_USER_NAME || '',
                subject: 'Newsletter',

            },
            (err, message) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ success: false,  message: 'Something went wrong' })
                }
                console.log(message);
            }
        )
        res.status(200).json({ success: true, message: 'Successfully subscribed' })
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false,  message: 'Something went wrong' })
    }
}
