// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any other email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., from environment variables)
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
      // Send an email
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO, // Your email address to receive messages
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
