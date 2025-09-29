"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { useIdleTimer } from "@/hooks/use-idle-timer"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useTranslation } from "react-i18next"

interface AutoLogoutProviderProps {
  children: React.ReactNode
  idleTimeout?: number // in milliseconds, default 15 minutes
  warningTime?: number // in milliseconds, default 1 minute before logout
}

export function AutoLogoutProvider({
  children,
  idleTimeout = 15 * 60 * 1000, // 15 minutes
  warningTime = 60 * 1000, // 1 minute
}: AutoLogoutProviderProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const [showWarning, setShowWarning] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [countdown, setCountdown] = useState(warningTime / 1000)
  const supabase = createClient()

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    checkAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setShowWarning(false)
      router.push("/login?reason=inactivity")
    } catch (error) {
      console.error("[v0] Error during logout:", error)
    }
  }

  const handleStayLoggedIn = () => {
    setShowWarning(false)
    setCountdown(warningTime / 1000)
    resetTimer()
  }

  // Idle timer - shows warning before logout
  const { resetTimer } = useIdleTimer({
    timeout: idleTimeout - warningTime,
    onIdle: () => {
      if (isAuthenticated) {
        setShowWarning(true)
      }
    },
    onActive: () => {
      setShowWarning(false)
      setCountdown(warningTime / 1000)
    },
  })

  // Countdown timer for warning dialog
  useEffect(() => {
    if (!showWarning) return

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          handleLogout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [showWarning])

  // Don't show warning on public pages
  const publicPages = ["/login", "/signup", "/signup/success"]
  const isPublicPage = publicPages.includes(pathname)

  if (!isAuthenticated || isPublicPage) {
    return <>{children}</>
  }

  return (
    <>
      {children}

      <AlertDialog open={showWarning} onOpenChange={setShowWarning}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("autoLogout.warningTitle")}</AlertDialogTitle>
            <AlertDialogDescription>{t("autoLogout.warningMessage", { seconds: countdown })}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleLogout}>{t("autoLogout.logoutButton")}</AlertDialogCancel>
            <AlertDialogAction onClick={handleStayLoggedIn}>{t("autoLogout.stayLoggedInButton")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
