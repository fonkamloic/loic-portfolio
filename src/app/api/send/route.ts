import { personalInformation } from "@/app/data";
import { headers } from "next/headers";

// In-memory rate limit store: IP → array of timestamps
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 3; // max submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimit.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  return false;
}

export async function POST(req: Request) {
  const data = await req.json();

  // Honeypot check — bots fill hidden fields
  if (data.website) {
    // Silently accept so bots think it worked
    return Response.json({ messageId: "ok" });
  }

  // Rate limiting by IP
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: true, name: "RATE_LIMITED", message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: {
        name: data.name,
        email: "fonkamloic+myportfolio@gmail.com",
      },
      to: [{ email: personalInformation.email, name: personalInformation.name }],
      replyTo: { email: data.email, name: data.name },
      subject: "Get in touch",
      textContent: data.message,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    return Response.json(
      { error: true, name: err.code ?? "SEND_ERROR", message: err.message ?? "Failed to send email" },
      { status: res.status },
    );
  }

  return Response.json(await res.json());
}
