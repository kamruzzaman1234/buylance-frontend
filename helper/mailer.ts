import User from '@/models/userModels';
import nodemailer from 'nodemailer';
import bcryptjs from "bcryptjs";


export const sendEmail = async({email, emailType, userId}:any)=>{
    try{

      const hashedToken =   await bcryptjs.hash(userId.toString(), 10)
       
        // Eikhane verfify howar jonne je time ta set kore deya lagbe seta
        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {
                verifyToken : hashedToken, verifyTokenExpiry: Date.now() + 3600000
            })
        }else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken : hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

//         const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//         user: "maddison53@ethereal.email",
//         pass: "jn7jnAPss4f63QBp6D",
//          },
// });

        // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8dcf48cd31be37",
            pass: "5812629c228f17"
            }
        });

    const mailOption = {
        from: 'kamruzzamancse22@gmail.com',
        to: email,
        subject: emailType === 'VERIFY' ? "Verify your email" : 'Reset Your password',
        text: "Hello world?", // plain‑text body
        html: `<p>
            Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}
            or copy and paste the link below in your browser.
            <br> ${process.env.DOMAIN}/verifyEmail?toekn=${hashedToken}
        </p>`
  }

  const mailResponse =  await transport.sendMail(mailOption)
  return mailResponse;

    }catch(error:any){
        throw new Error(error.message)
    }
}