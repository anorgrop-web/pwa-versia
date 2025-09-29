"use client"

import { useEffect, useRef, useState } from "react"

interface UseIdleTimerOptions {
  timeout: number // milliseconds
  onIdle: () => void
  onActive?: () => void
  events?: string[]
}

export function useIdleTimer({
  timeout,
  onIdle,
  onActive,
  events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"],
}: UseIdleTimerOptions) {
  const [isIdle, setIsIdle] = useState(false)
  const timeoutId = useRef<NodeJS.Timeout>()
  const lastActivity = useRef<number>(Date.now())

  const resetTimer = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    lastActivity.current = Date.now()

    if (isIdle) {
      setIsIdle(false)
      onActive?.()
    }

    timeoutId.current = setTimeout(() => {
      setIsIdle(true)
      onIdle()
    }, timeout)
  }

  useEffect(() => {
    // Set initial timer
    resetTimer()

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    // Cleanup
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [timeout, onIdle, onActive])

  return {
    isIdle,
    lastActivity: lastActivity.current,
    resetTimer,
  }
}
