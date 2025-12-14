"use client"

import { useMounted } from "@/hooks/use-mounted"
import type { ReactNode } from "react"

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Component that only renders its children on the client side
 * Prevents hydration mismatches for components that depend on browser APIs
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useMounted()

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}