import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to Resend / SendGrid / Nodemailer
// Store email credentials in environment variables.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("[contact]", { name: body.name, email: body.email, message: body.message });

  // TODO: send email via Resend:
  // await resend.emails.send({ from: "...", to: CONTACT_EMAIL, subject: "...", text: body.message });

  return NextResponse.json({ success: true });
}
