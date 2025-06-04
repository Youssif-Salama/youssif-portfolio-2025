// app/api/send-mail/route.ts
import { NextResponse } from "next/server";
// @ts-ignore
import nodemailer from "nodemailer";

const emailSender = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASS;
const emailReciever = process.env.EMAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: emailSender,
    pass: emailPassword,
  },
});

export async function POST(req: Request) {
  try {
    const { email, comment } = await req.json();

    const isVerified = await transporter.verify();
    if (!isVerified) {
      return NextResponse.json(
        { success: false, message: "Failed to build mail service" },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: emailSender,
      to: emailReciever,
      subject: "Message From Youssif Salama Portfolio",
      html: `
        <div>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong> ${comment}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    if(info.rejected.length == 0){
      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 200 }
      );
    }
    else{
      return NextResponse.json(
        { success: false, message: "Email not sent" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Email not sent" },
      { status: 500 }
    );
  }
}
