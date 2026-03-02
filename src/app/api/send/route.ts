import { personalInformation } from "@/app/data";

export async function POST(req: Request) {
  const data = await req.json();

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
        email: personalInformation.email,
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
