'use client'
import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    
    const body = await request.json();
    console.log(body);
    const { fullName, tele,email, subject, message  } = body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>' ,
      to: "salahfatimi16@gmail.com",
      subject:  subject,
      react: EmailTemplate({ firstName: fullName ,Msg:message, Email:email ,Phone:tele }),
    });

   
    if(data.status === 'success') {
      return NextResponse.json({ message: 'Email Successfully Sent!' })
      }
      return NextResponse.json(data)
  } catch (error) {
    console.log('error', error)
  }
    
}
