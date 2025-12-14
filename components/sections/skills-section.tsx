import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const skillCategories = [
  {
    title: "Frontend Avanzado",
    skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion", "Next.js", "HTML5", "CSS3"],
    icon: "🎨",
    description: "Interfaces modernas y experiencias interactivas",
  },
  {
    title: "Backend Robusto",
    skills: ["Java", "Spring Boot", "API REST", "MySQL", "JWT", "Node.js"],
    icon: "⚙️",
    description: "Arquitecturas escalables y APIs seguras",
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "Bun", "macOS"],
    icon: "🛠️",
    description: "Flujo de desarrollo optimizado y documentación",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tecnologías y herramientas que domino para crear soluciones completas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{category.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Formación Destacada</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-full max-w-xs">
                      <Image
                        src="/images/courses/Forge-Fundation.webp"
                        alt="Fundación Forge"
                        width={300}
                        height={200}
                        className="rounded-lg object-contain bg-muted p-2"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">🎓 Fundación Forge</h4>
                    <p className="text-sm text-muted-foreground mb-2">07/2024 - actualmente</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Programa intensivo de desarrollo Full-Stack con enfoque en habilidades socioemocionales, digitales
                      para la empleabilidad, trabajo en equipo, liderazgo personal y orientación al logro.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-full max-w-xs">
                      <Image
                        src="/images/courses/coding-dojo.webp"
                        alt="Coding Dojo"
                        width={300}
                        height={200}
                        className="rounded-lg object-contain bg-muted p-2"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">💻 Coding Dojo</h4>
                    <p className="text-sm text-muted-foreground mb-2">07/2024 - 11/2024</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Bootcamp especializado en tecnologías web modernas: HTML, CSS, JavaScript, Git, GitHub, Spring
                      Boot, Java, desarrollo de APIs y arquitectura de software.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
