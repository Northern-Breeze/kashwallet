import { NextApiResponse, NextApiRequest } from 'next'
import nodemailer, { SendMailOptions } from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const payload = req.body;        
        
        const { email, name, message, topic } = JSON.parse(payload);

        const subject = `${name} ${topic}`;

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

        const html = `<h3>New message from </h3> <br /> <p>${message}</p>`
         
        const options = {
            from: process.env.MAIL_USER_NAME,
            to: email,
            subject: subject,
            html: html
        }
        
        transporter.sendMail(options).then(() => {
            res.status(200).json({ success: true, message: 'Successfully subscribed' })
        }).catch(error => {
            console.log(error); 
            res.status(400).json({ success: true, message: 'Failed to send newsletter' })
        })
        


    } catch (error) {
        res.status(400).json({ success: false, message: 'Something went wrong please try again' })
    }
}
