

require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Check if .env variables exist
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing EMAIL_USER or EMAIL_PASS in .env file");
  process.exit(1);
}

// ✅ Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    console.log("📩 New message received from:", email);

    // ✅ Create transporter (better config for Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`
    });

    res.status(200).json({ msg: "✅ Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ msg: "❌ Failed to send message" });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});