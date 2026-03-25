import nodemailer from "nodemailer";

const EMAIL_TO = "shubham@amcssgroup.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[0-9()\s-]+$/;

const getPhoneDigits = (value) => value.replace(/\D/g, "");

const validatePayload = ({ name, phone, email, message }) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else {
    const phoneLength = getPhoneDigits(phone).length;

    if (!phonePattern.test(phone) || phoneLength < 10 || phoneLength > 15) {
      errors.phone = "Phone number must contain 10 to 15 digits.";
    }
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Message is required.";
  }

  return errors;
};

const createTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("Missing email configuration.");
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: "Method not allowed."
    });
  }

  try {
    const name = req.body?.name?.trim() || "";
    const phone = req.body?.phone?.trim() || "";
    const email = req.body?.email?.trim().toLowerCase() || "";
    const message = req.body?.message?.trim() || "";

    const errors = validatePayload({ name, phone, email, message });

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: EMAIL_TO,
      replyTo: email,
      subject: "New Website Inquiry",
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Message: ${message}`
      ].join("\n")
    });

    return res.status(200).json({
      success: true,
      message: "Message submitted successfully."
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your inquiry."
    });
  }
}
