import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { customerEmail, uploadedFiles } = await req.json();

    await resend.emails.send({
      from: "Alessandro Amenta <alessandro@creatorscorner.co>",
      to: "alessandroamenta1@gmail.com",
      subject: `New Ghiblify.ai Upload from ${customerEmail}`,
      html: `
        <h2>New Upload Completed</h2>
        <p>Customer email: ${customerEmail}</p>
        <p>Number of images: ${uploadedFiles.length}</p>
        <p>Uploaded files:</p>
        <ul>
          ${uploadedFiles.map((file: string) => `<li>${file}</li>`).join("")}
        </ul>
        <p>You can access these files in your Supabase storage dashboard under the "ghiblify-uploads" bucket.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email notification:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send notification" },
      { status: 500 }
    );
  }
}
