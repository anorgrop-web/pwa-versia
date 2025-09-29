"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { SideDrawer } from "@/components/side-drawer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HibiscusDayPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const params = useParams()
  const day = Number(params.day)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("guide")
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    // Load completion status from localStorage
    const saved = localStorage.getItem("hibiscus-completed-days")
    if (saved) {
      const completedDays = new Set(JSON.parse(saved))
      setIsCompleted(completedDays.has(day))
    }
  }, [day])

  const handleProfileClick = () => {
    router.push("/profile")
  }

  const handleBack = () => {
    router.back()
  }

  const handleMarkComplete = () => {
    const saved = localStorage.getItem("hibiscus-completed-days")
    const completedDays = saved ? new Set(JSON.parse(saved)) : new Set()

    if (isCompleted) {
      completedDays.delete(day)
    } else {
      completedDays.add(day)
    }

    localStorage.setItem("hibiscus-completed-days", JSON.stringify(Array.from(completedDays)))
    setIsCompleted(!isCompleted)
  }

  const content = {
    title: t(`hibiscus.days.${day}.title`),
    content: t(`hibiscus.days.${day}.content`),
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setIsDrawerOpen(true)} onProfileClick={handleProfileClick} />

      <main className="flex-1 pb-20">
        <div className="px-4 py-6">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-2">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t("recurrence.backButton")}
            </Button>

            {/* Day content card */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl">{content.title}</CardTitle>
                  {isCompleted && (
                    <div className="bg-green-500 rounded-full p-2">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none">
                  {content.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Mark as complete button */}
                <div className="pt-6 border-t">
                  <Button
                    onClick={handleMarkComplete}
                    className="w-full"
                    size="lg"
                    variant={isCompleted ? "outline" : "default"}
                  >
                    {isCompleted ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        {t("hibiscus.markIncomplete")}
                      </>
                    ) : (
                      t("hibiscus.markComplete")
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation to next/previous day */}
            <div className="flex gap-4 mt-6">
              {day > 1 && (
                <Button variant="outline" onClick={() => router.push(`/hibiscus/dia/${day - 1}`)} className="flex-1">
                  {t("hibiscus.previousDay")}
                </Button>
              )}
              {day < 21 && (
                <Button onClick={() => router.push(`/hibiscus/dia/${day + 1}`)} className="flex-1">
                  {t("hibiscus.nextDay")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
