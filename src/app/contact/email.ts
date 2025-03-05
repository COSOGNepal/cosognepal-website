"use server";
import nodemailer from "nodemailer";

const getHTML = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    h1 {
      color: #6527E3;
    }
    .competition {
      margin-bottom: 20px;
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #555;
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>
`;

const senderHTML = `
  <h1>Coding for Social Good Nepal</h1>
  <p>Thank you for contacting us. We will look your message and get back to you soon.</p>

  <h3>Follow us for updates:</h3>
  <p>Please find us on all major social media platforms at @cosognepal. We regularly post updates on our social media platforms.</p>
        
  <div class="footer">
    <p>If you have any questions or want to talk directly to our team member, feel free to reach out to us at cosognepal@gmail.com</p>
    <p>Coding is for social good!</p>
  </div>
`;

const receiverHTML = (
  email: string,
  phoneNumber: string,
  description: string
) => `
  <h1>New message from website.</h1>
  <p>Someone is trying to contact us with the following information:</p>

  <p>
    <strong>
      Email:
    </strong>
    ${email}
  </p>

  <p>
    <strong>
      Phone Number:
     </strong>
    ${phoneNumber}
   </p>

  <p>
    <strong>
      Description:
    </strong>
    ${description}
  </p>
        
  <div class="footer">
    <p>If you don't know the answer to the asked question, please contact other team members within 12 hours. Thank you!</p>
  </div>
`;

export async function sendWelcomeEmail(
  email: string,
  phoneNumber: string,
  description: string
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const senderOptions = {
    from: `"${process.env.EMAIL_SENDER}" <${process.env.EMAIL_FROM}>`,
    to: email,
    cc: process.env.EMAIL_DEFAULT_RECEIVER,
    subject: "We've received your message! 🎉",
    html: getHTML(senderHTML),
  };

  const receiverOptions = {
    from: `"${process.env.EMAIL_SENDER}" <${process.env.EMAIL_FROM}>`,
    replyTo: email,
    to: process.env.EMAIL_SENDER,
    cc: process.env.EMAIL_DEFAULT_RECEIVER,
    subject: "New message from website.",
    html: getHTML(receiverHTML(email, phoneNumber, description)),
  };

  const senderInfo = await transporter.sendMail(senderOptions);
  const receiverInfo = await transporter.sendMail(receiverOptions);

  if (receiverInfo.messageId && senderInfo.messageId) {
    return {
      statusCode: 200,
      body: "Email sent successfully",
      senderInfo,
      receiverInfo,
    };
  }

  return {
    statusCode: 400,
    body: "Something went wrong!",
  };
}
