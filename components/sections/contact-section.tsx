"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Mensaje enviado, le respondo en breve",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error(result.message)
      }
    } catch {
      toast({
        title: "Error",
        description: "Perdone este metodo no esta funcionando, por favor utilice la otra opción",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">Contáctame</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              ¿Tienes un proyecto en mente? Envíame un mensaje y conversemos sobre cómo puedo ayudarte
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:duribepulgar@gmail.com" 
                      className="hover:text-primary transition-colors duration-200"
                      aria-label="Enviar email a duribepulgar@gmail.com"
                    >
                      duribepulgar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Chile</span>
                  </div>
                </div>
              </div>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-primary">¿Por qué trabajar conmigo?</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>✅ Código limpio y bien documentado</li>
                    <li>✅ Comunicación clara y constante</li>
                    <li>✅ Enfoque en la experiencia del usuario</li>
                    <li>✅ Entrega puntual de proyectos</li>
                    <li>✅ Pasión por aprender nuevas tecnologías</li>
                  </ul>
                  <Button asChild className="w-full">
                    <a href="mailto:duribepulgar@gmail.com?subject=Consulta desde tu portafolio&body=Hola Daniel,%0D%0A%0D%0ATengo una consulta sobre...">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email Directo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" name="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" name="subject" placeholder="¿En qué puedo ayudarte?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
