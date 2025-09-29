"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function InstallPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/signup")
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">Redirecting to signup...</p>
      </div>
    </div>
  )
}
