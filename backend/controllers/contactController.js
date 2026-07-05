import ContactMessage from '../models/ContactMessage.js';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

import mongoose from 'mongoose';

export const submitContactForm = async (req, res) => {
  try {
    // 1. Validate request body
    const validatedData = contactSchema.parse(req.body);
    const { name, email, subject, message } = validatedData;

    // 2. Save to database (only if connected)
    let newMessage = null;
    if (mongoose.connection.readyState === 1) {
      newMessage = await ContactMessage.create({
        name,
        email,
        subject,
        message,
      });
    }

    // 3. Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Portfolio Message: ${subject}`,
        html: `
          <h3>New Message from ${name}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: error.errors });
    }
    console.error("Contact Form Error:", error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
