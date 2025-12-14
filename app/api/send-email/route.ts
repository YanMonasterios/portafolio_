import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: "danielscrip.zsh@gmail.com",
      subject: subject,
      replyTo: email,
      text: `Nombre: ${name}\nCorreo del cliente: ${email}\n\nMensaje:\n${message}`,
    })

    console.log("Resend email sent successfully")

    return NextResponse.json({ message: "Correo enviado con éxito ✅" }, { status: 200 })
  } catch (err) {
    console.error("Error sending email with Resend:", err)

    return NextResponse.json({ message: "Error al enviar el correo 😵" }, { status: 500 })
  }
}
