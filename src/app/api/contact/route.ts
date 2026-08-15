import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Wire this up to an email provider (Resend, SendGrid, etc.)
    // or a database/CRM. Logged here as a placeholder.
    console.log("New contact message:", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
