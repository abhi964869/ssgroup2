const { sendContactEmail } = require("../services/emailService");

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const getPhoneDigits = (value) => value.replace(/\D/g, "");
const hasValidPhoneCharacters = (value) => /^[+]?[0-9()\s-]+$/.test(value);
const isValidPhone = (value) => {
  const digits = getPhoneDigits(value);
  return hasValidPhoneCharacters(value) && digits.length >= 10 && digits.length <= 15;
};

const submitContact = async (req, res, next) => {
  try {
    const name = req.body.name?.trim() || "";
    const phone = req.body.phone?.trim() || "";
    const email = req.body.email?.trim().toLowerCase() || "";
    const message = req.body.message?.trim() || "";
    const errors = {};

    console.log("[contact] Request received", { name, phone, email });

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!isValidPhone(phone)) {
      errors.phone = "Phone number must contain 10 to 15 digits.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
    }

    try {
      await sendContactEmail({ name, phone, email, message });

      return res.status(200).json({
        success: true,
        message: "Message submitted successfully. The email was sent."
      });
    } catch (emailError) {
      console.error("[contact] Email sending failed:", emailError.message);
      res.status(500);
      throw new Error("Failed to send email. Check backend email configuration.");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact
};
