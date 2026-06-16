import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to Mailchimp / ConvertKit / Resend
// Store the API key in environment variables (e.g., MAILCHIMP_API_KEY)
// Never hardcode secrets here.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = body?.email as string | undefined;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Stub: log and return success
  console.log("[subscribe] New subscriber:", email);

  // TODO: replace stub with actual newsletter provider call, e.g.:
  // await addSubscriberToMailchimp(email);

  return NextResponse.json({ success: true });
}
