import { NextApiResponse, NextApiRequest } from 'next'
import nodemailer, { SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
        user: process.env.MAIL_USER_NAME,
        pass: process.env.MAIL_PASSWORD,
    },
    debug: false,
    logger: true
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const payload = req.body;        
        
        const { email, name, message, topic } = JSON.parse(payload);

        const subject = `${name} ${topic}`;
        const emailMessage = `Eamil: ${email} \n\n Message: \n${message}`;

        const options: SendMailOptions = {
            from: process.env.MAIL_USER_NAME,
            to: process.env.MAIL_USER_NAME,
            subject: subject,
            text: emailMessage
        }

        await transporter.sendMail(options);

        res.status(200).json({ success: true, message: 'Sent!' });

    } catch (error) {
        res.status(400).json({ success: false, message: 'Something went wrong please try again' })
    }
}
