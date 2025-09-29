"use client"

import type React from "react"

import { useEffect } from "react"
import "@/lib/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // i18n is already initialized when this component mounts
  }, [])

  return <>{children}</>
}
