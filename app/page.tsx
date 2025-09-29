"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { MainBanner } from "@/components/main-banner"
import { BottomNavigation } from "@/components/bottom-navigation"
import { SideDrawer } from "@/components/side-drawer"

export default function HomePage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home")

  const handleProfileClick = () => {
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setIsDrawerOpen(true)} onProfileClick={handleProfileClick} />

      <main className="flex-1 pb-20">
        <MainBanner />

        {/* Content area - can be expanded based on active tab */}
        <div className="px-4 py-6">
          <div className="max-w-md mx-auto">
            {activeTab === "home" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{t("home.plantsToday")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("home.plantsDescription")}</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{t("home.weeklyTips")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("home.tipsDescription")}</p>
                </div>
              </div>
            )}

            {activeTab === "guide" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{t("guide.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("guide.description")}</p>
                </div>
              </div>
            )}

            {activeTab === "community" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{t("community.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("community.description")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
