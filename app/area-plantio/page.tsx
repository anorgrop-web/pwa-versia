"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { SideDrawer } from "@/components/side-drawer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AreaPlantioPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleProfileClick = () => {
    router.push("/profile")
  }

  const handleBack = () => {
    router.back()
  }

  const handleStartHibiscus = () => {
    router.push("/hibiscus")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setIsDrawerOpen(true)} onProfileClick={handleProfileClick} />

      <main className="flex-1 pb-20">
        <div className="px-4 py-6">
          <div className="max-w-md mx-auto">
            {/* Back button and title */}
            <div className="mb-6">
              <Button variant="ghost" onClick={handleBack} className="mb-4 -ml-2">
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t("recurrence.backButton")}
              </Button>
              <h1 className="text-3xl font-bold text-foreground">{t("plantingArea.title")}</h1>
              <p className="text-muted-foreground mt-2">{t("plantingArea.description")}</p>
            </div>

            {/* Plant cards */}
            <div className="space-y-4">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full">
                  <Image
                    src="https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Sementes/image%20867.png"
                    alt="Hibiscus rosa-sinensis"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Hibiscus rosa-sinensis</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t("plantingArea.hibiscus.description")}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" size="lg" onClick={handleStartHibiscus}>
                    {t("plantingArea.startButton")}
                  </Button>
                </CardFooter>
              </Card>

              {/* Placeholder for more cards */}
              <div className="text-center py-8 text-muted-foreground">
                <p>{t("plantingArea.moreComingSoon")}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="guide" />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
