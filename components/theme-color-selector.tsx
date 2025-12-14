"use client"

import { useState, useEffect } from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type ColorTheme = "blue" | "green" | "red" | "purple" | "orange" | "pink" | "default"

interface ThemeColor {
  name: string
  value: ColorTheme
  color: string
}

const colorThemes: ThemeColor[] = [
  { name: "Azul", value: "blue", color: "#3b82f6" },
  { name: "Verde", value: "green", color: "#22c55e" },
  { name: "Rojo", value: "red", color: "#ef4444" },
  { name: "Morado", value: "purple", color: "#8b5cf6" },
  { name: "Naranja", value: "orange", color: "#f97316" },
  { name: "Rosa", value: "pink", color: "#ec4899" },
  { name: "Por defecto", value: "default", color: "#0ea5e9" },
]

export function ThemeColorSelector() {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>("default")

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorTheme") as ColorTheme
    if (savedTheme && colorThemes.some(t => t.value === savedTheme)) {
      setCurrentTheme(savedTheme)
      document.documentElement.setAttribute("data-color-theme", savedTheme)
    }
  }, [])

  const handleThemeChange = (theme: ColorTheme) => {
    setCurrentTheme(theme)
    localStorage.setItem("colorTheme", theme)
    document.documentElement.setAttribute("data-color-theme", theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Cambiar tema de color</span>
          <div
            className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background"
            style={{
              backgroundColor: colorThemes.find(t => t.value === currentTheme)?.color || "#0ea5e9"
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex items-center justify-between"
          >
            <span>{theme.name}</span>
            <div
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: theme.color }}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}