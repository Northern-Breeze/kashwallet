import { NextApiResponse, NextApiRequest } from 'next'
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const payload = req.body;
        const { email } = JSON.parse(payload);
        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service:'yahoo',
            secure: false,
            auth: {
              user: process.env.MAIL_USER_NAME,
              pass: process.env.MAIL_PASSWORD,
            },
            debug: false,
            logger: true
        });

        const html = `<p>You have received a news letter subscription from ${email}</p>`
         
        const options = {
            from: process.env.MAIL_USER_NAME,
            to: email,
            subject: 'News Letter subscription',
            html: html
        }
        
        transporter.sendMail(options).then(() => {
            res.status(200).json({ success: true, message: 'Successfully subscribed' })
        }).catch(error => {
            console.log(error); 
            res.status(400).json({ success: true, message: 'Failed to send newsletter' })
        })
        
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false,  message: 'Something went wrong' })
    }
}
