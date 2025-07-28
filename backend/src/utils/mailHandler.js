import dotenv from 'dotenv';
dotenv.config(); // adjust path if needed

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});


// If you create the transporter in mailHandler.js, and then import it elsewhere, dotenv.config() may not have run yet.
// This means process.env.SMTP_USER and process.env.SMTP_PASS are undefined when the transporter is created, causing the "Missing credentials for 'PLAIN'" error.
// How to fix if you want to keep transporter in mailHandler.js:
// Add dotenv.config() at the very top of mailHandler.js: