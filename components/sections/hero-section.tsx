"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { AuroraBackground } from "@/components/effects/aurora-background"

export function HeroSection() {

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://raw.githubusercontent.com/YanMonasterios/portafolio/main/public/archives/CV/CV-Yan-Monasterios-noviembre.pdf"
    link.download = "Curriculum-Yan-Monasterios-2025.pdf"
    link.click()
    // not need return
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 pt-25 md:pt-10 sm:pt-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              <span className="text-foreground">Hola, soy </span>
              <span className="text-primary animate-glow">Yan</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 text-pretty">
              <span className="text-primary font-semibold">Full-Stack Developer</span> • Frontend + Backend
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Especializado en crear <span className="text-foreground font-medium">experiencias web personalizadas. </span>
              Transformo ideas en productos digitales que se adaptan a cada usuario y contexto de negocio.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-6 animate-glow">
              Ver Mi Trabajo
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCV} className="text-lg px-8 py-6 bg-transparent">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://github.com/YanMonasterios" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://www.linkedin.com/in/yan-monasterios-a1231a258/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="mailto:yankevyn02@gmail.com" aria-label="Enviar email a yankevyn02@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
        


      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
