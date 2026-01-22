import { ContactFormEmailTemplate } from "@/components/common/contact-form-email-template";
import { Gmail } from "@/constants/contact";
import { ContactFormSchema } from "@/schemas/contact-schema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = ContactFormSchema.parse(body);

    const { name, email, message } = validatedData;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact Form <portfolio@resend.dev>`,
      to: [Gmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || "Invalid request" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
