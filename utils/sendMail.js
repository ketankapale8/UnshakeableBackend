import {createTransport} from 'nodemailer';

export const sendMail = async (email , subject , text) =>{
    const transport = createTransport({
        host : 'smtp-relay.sendinblue.com',
        port : 587,
        secure: false,
        logger: true,
  debug: true,
 tls: {
    rejectUnAuthorized:true
 } ,// add this ,
        auth : {
            user : 'ketan.kapale@frigustech.com',
            pass : 'cjzZ3QAqwvH0IsNm'
        }
        
    })
    await transport.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject,
        text
    })
}