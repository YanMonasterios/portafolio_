import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">Mi Enfoque de Desarrollo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Creo experiencias digitales que se adaptan a cada usuario y contexto de negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="relative w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20">
                    <Image
                      src="/images/about/About.webp"
                      alt="Daniel Uribe - Full-Stack Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  ¡Hola! ✌🏼 Soy <strong className="text-primary">Daniel Uribe</strong>, Full-Stack Developer especializado en 
                  <strong className="text-primary"> experiencias personalizadas</strong>. Mi enfoque va más allá del código: 
                  creo soluciones que se adaptan al comportamiento, contexto y necesidades específicas de cada usuario.
                </p>

                <p className="text-lg leading-relaxed">
                  Mi metodología combina <strong className="text-primary">análisis de usuario</strong>, 
                  <strong className="text-primary"> arquitectura técnica sólida</strong> y 
                  <strong className="text-primary"> medición de impacto</strong>. Cada proyecto es una oportunidad 
                  para crear algo que no solo funcione, sino que genere valor real y medible.
                </p>

                <p className="text-lg leading-relaxed">
                  En el <strong className="text-primary">frontend</strong> diseño interfaces que se adaptan dinámicamente, 
                  y en el <strong className="text-primary">backend</strong> construyo APIs escalables con lógica de 
                  personalización integrada. El resultado: productos que evolucionan con sus usuarios.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">🎯 Metodología</h3>
                    <p className="text-sm text-muted-foreground">
                      Análisis → Desarrollo → Medición. Cada decisión técnica respaldada por datos de usuario
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">🚀 Diferenciación</h3>
                    <p className="text-sm text-muted-foreground">
                      Especialización en personalización: interfaces adaptativas y APIs inteligentes
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">⚡ Stack Técnico</h3>
                    <p className="text-sm text-muted-foreground">
                      React + TypeScript + Spring Boot. Arquitectura moderna y escalable
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">📊 Impacto</h3>
                    <p className="text-sm text-muted-foreground">
                      Productos que mejoran métricas: conversión, retención y satisfacción del usuario
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
