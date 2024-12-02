import { Resend } from "resend";
import { personalInformation } from "@/app/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const email = await resend.emails.send({
    from: `${data.name} <${data.email}>`,
    to: [`${personalInformation.email}`],
    subject: "Get in touch",
    text: data.message,
  });
  return Response.json(email);
}
