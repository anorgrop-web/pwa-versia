"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { useRouter } from "next/navigation"

const monthlyProducts = [
  {
    id: "product1",
    titleKey: "recurrence.products.product1.title",
    descriptionKey: "recurrence.products.product1.description",
    imageQuery: "organic vegetable seeds collection",
  },
  {
    id: "product2",
    titleKey: "recurrence.products.product2.title",
    descriptionKey: "recurrence.products.product2.description",
    imageQuery: "premium garden fertilizer",
  },
  {
    id: "product3",
    titleKey: "recurrence.products.product3.title",
    descriptionKey: "recurrence.products.product3.description",
    imageQuery: "gardening tools set",
  },
]

export default function RecorrenciaPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleRedeemProduct = (productId: string) => {
    setSelectedProduct(productId)
    // TODO: Backend logic to process and store the user's monthly product choice
    console.log("[v0] Product redeemed:", productId)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "home") {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">{t("recurrence.backButton")}</span>
          </Button>
          <h1 className="text-xl font-bold text-foreground">{t("recurrence.title")}</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="px-4 py-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center text-balance">
            {t("recurrence.pageTitle")}
          </h2>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyProducts.map((product) => {
              const isSelected = selectedProduct === product.id

              return (
                <Card key={product.id} className="overflow-hidden flex flex-col">
                  {/* Product Image */}
                  <div className="relative w-full aspect-square bg-muted">
                    <img
                      src={`/placeholder.jpg?height=400&width=400&query=${encodeURIComponent(product.imageQuery)}`}
                      alt={t(product.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Content */}
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{t(product.titleKey)}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{t(product.descriptionKey)}</CardDescription>
                  </CardHeader>

                  {/* Redeem Button */}
                  <CardContent className="mt-auto">
                    <Button
                      onClick={() => handleRedeemProduct(product.id)}
                      className={
                        isSelected
                          ? "w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                          : "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      }
                      size="lg"
                      disabled={isSelected}
                    >
                      {isSelected ? t("recurrence.redeemedButton") : t("recurrence.redeemButton")}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
