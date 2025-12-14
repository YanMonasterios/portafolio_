# Portafolio

Un sitio web de portafolio elegante y moderno construido con Next.js 14, TypeScript y Tailwind CSS. Este portafolio muestra mis habilidades, proyectos y trayectoria profesional con un enfoque en diseño limpio y experiencia de usuario fluida.

## 🚀 Características

- **Diseño Moderno**: Diseño limpio y responsivo con soporte para modo oscuro/claro
- **Animaciones Suaves**: Animaciones y transiciones sutiles en todo el sitio
- **Secciones Interactivas**: Sección hero dinámica con elementos flotantes
- **Vitrina de Proyectos**: Galería de proyectos filtrable con vistas detalladas
- **Formulario de Contacto**: Formulario de contacto funcional con integración de email
- **Diseño Móvil**: Optimizado para todos los tamaños de dispositivos
- **Rendimiento Rápido**: Construido con Next.js 14 para rendimiento óptimo

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: Radix UI + Shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Despliegue**: Vercel

## 📁 Estructura del Proyecto

```
portafolio/
├── app/                    # Directorio app de Next.js
│   ├── api/               # Rutas API
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── sections/          # Secciones de la página
│   ├── ui/               # Componentes UI reutilizables
│   └── effects/          # Componentes de animación
├── lib/                  # Funciones de utilidad
├── hooks/                # Hooks personalizados de React
├── public/               # Assets estáticos
└── styles/               # Estilos adicionales
```

## 🎨 Secciones

- **Sección Hero**: Introducción llamativa con fondo animado
- **Sección Acerca de**: Introducción personal y antecedentes
- **Sección de Habilidades**: Habilidades técnicas y experiencia
- **Sección de Proyectos**: Proyectos del portafolio con filtrado
- **Sección de Contacto**: Formulario de contacto y enlaces sociales

## 🚀 Comenzando

### Requisitos Previos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd portafolio-v2
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Variables de Entorno

Crea un archivo `.env.local` en el directorio raíz:

```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
EMAIL_TO=email-destinatario@ejemplo.com
```


## 📱 Diseño Responsivo

El portafolio es completamente responsivo y optimizado para:
- Escritorio (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Móvil (320px+)

## 🌟 Rendimiento

- **Puntuación Lighthouse**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Imágenes Optimizadas**: Componente Image de Next.js con optimización automática

## 🔧 Comandos de Desarrollo

```bash
# Desarrollo
pnpm dev

# Construcción
pnpm build

# Iniciar servidor de producción
pnpm start

# Lint
pnpm lint

# Verificación de tipos
pnpm type-check
```

## 📞 Contacto

¡No dudes en contactarme si tienes alguna pregunta o quieres colaborar!

---

**Construido con ❤️ usando Next.js y TypeScript**