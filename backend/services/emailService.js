const nodemailer = require("nodemailer");

const CONTACT_RECIPIENT = "shubham@amcssgroup.com";

const createTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("EMAIL_USER and EMAIL_PASS are required in backend/.env");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });
};

const sendContactEmail = async ({ name, phone, email, message }) => {
  const transporter = createTransporter();
  const from = process.env.EMAIL_USER;

  const info = await transporter.sendMail({
    from,
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject: "New Website Inquiry",
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Message: ${message}`
    ].join("\n")
  });

  console.log(`[mail] Email sent to ${CONTACT_RECIPIENT}. Message ID: ${info.messageId}`);
};

module.exports = {
  sendContactEmail
};
