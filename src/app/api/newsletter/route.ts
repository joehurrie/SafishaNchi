import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required email field
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Configure the SMTP transport (matching current contact form setup)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const url = new URL(request.url);
    const logoUrl = `${url.origin}/assets/logo.png`;
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    // Email content for Newsletter Subscription Notification
    const mailOptions = {
      from: `"Safisha Nchi Newsletter" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f7f3; padding: 20px; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px; padding: 20px 0; background-color: #0a3d2b; border-radius: 6px;">
            <img src="${logoUrl}" alt="Safisha Nchi" style="width: 80px; height: auto;" />
            <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">Safisha Nchi</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 6px; border-top: 4px solid #C5F84A; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h2 style="color: #0a3d2b; font-size: 18px; margin-top: 0;">New Newsletter Subscription</h2>
            <p style="color: #444; line-height: 1.6; font-size: 15px;">
              A new user has subscribed to receive news and updates regarding our services.
            </p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #777; width: 140px;"><strong>Subscriber Email</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #19826D; font-weight: 600; text-decoration: none; font-size: 15px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #777;"><strong>Subscription Date</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333;">${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #777;"><strong>Status</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <span style="background-color: #E8F5EE; color: #19826D; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    Subscribed to News & Updates
                  </span>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 25px; background: #fdfdfd; padding: 15px; border-radius: 5px; border: 1px solid #eaeaea;">
              <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.5;">
                This user would like to receive regular news, announcements, and service updates from Safisha Nchi.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0dfd9;">
            <p style="font-size: 12px; color: #888; margin: 0;">Automated notification from Safisha Nchi Website.</p>
            <p style="font-size: 12px; color: #888; margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} Safisha Nchi Ltd. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send the notification email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}
