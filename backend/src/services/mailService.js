import { transporter } from "../utils/mailHandler.js";

const sendVerificationMail = async ({ from, to, subject, html }) => {
  try {
    const mailOptions = {
      from,
      to,
      subject,
      html,
    };

    // console.log({
    //     user:process.env.SMTP_USER,
    //     pass:process.env.SMTP_PASS
    // })
    

    const info = await transporter.sendMail(mailOptions);
    console.log({info})
    return info;
  } catch (error) {
    console.log('error in mail service--',error.message)
    throw new Error(error.message);
  }
};

export default {
  sendVerificationMail,
};


