"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { SideDrawer } from "@/components/side-drawer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HibiscusPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("guide")
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set())

  useEffect(() => {
    // Load completed days from localStorage
    const saved = localStorage.getItem("hibiscus-completed-days")
    if (saved) {
      setCompletedDays(new Set(JSON.parse(saved)))
    }
  }, [])

  const handleProfileClick = () => {
    router.push("/profile")
  }

  const handleBack = () => {
    router.back()
  }

  const handleDayClick = (day: number) => {
    router.push(`/hibiscus/dia/${day}`)
  }

  const days = Array.from({ length: 21 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setIsDrawerOpen(true)} onProfileClick={handleProfileClick} />

      <main className="flex-1 pb-20">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button and title */}
            <div className="mb-6">
              <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-2">
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t("recurrence.backButton")}
              </Button>
              <h1 className="text-3xl font-bold text-foreground">{t("hibiscus.title")}</h1>
              <p className="text-muted-foreground mt-2">{t("hibiscus.description")}</p>
            </div>

            {/* 21 day cards grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {days.map((day) => (
                <Card
                  key={day}
                  className="relative aspect-square flex items-center justify-center cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                  onClick={() => handleDayClick(day)}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">{t("hibiscus.day")}</p>
                    <p className="text-2xl font-bold">{day}</p>
                  </div>
                  {completedDays.has(day) && (
                    <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{t("hibiscus.progress")}</span>
                <span className="text-sm text-muted-foreground">
                  {completedDays.size}/21 {t("hibiscus.daysCompleted")}
                </span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${(completedDays.size / 21) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
