import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: process.env.SENDGRID_SENDER, // must be a verified sender
    subject,
    text,
  };

  console.log("📧 Sending Email:", msg);

  try {
    await sgMail.send(msg);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ SendGrid Error:", error.response?.body || error);
    throw error;
  }
};
