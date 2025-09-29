"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { useRouter } from "next/navigation"

const coupons = [
  { code: "GARDEN10", descriptionKey: "coupons.GARDEN10.description" },
  { code: "OCT5", descriptionKey: "coupons.OCT5.description" },
]

export default function CouponsPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [revealedCoupons, setRevealedCoupons] = useState<Set<string>>(new Set())
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null)

  const handleRevealCoupon = (code: string) => {
    setRevealedCoupons((prev) => new Set(prev).add(code))
  }

  const handleCopyCoupon = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCoupon(code)
      setTimeout(() => {
        setCopiedCoupon(null)
      }, 2500)
    } catch (err) {
      console.error("[v0] Failed to copy coupon code:", err)
    }
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
            <span className="sr-only">Voltar</span>
          </Button>
          <h1 className="text-xl font-bold text-foreground">{t("coupons.title")}</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="px-4 py-6 pb-20">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold text-foreground leading-relaxed">{t("coupons.instructionTitle")}</h2>

            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              size="lg"
            >
              <a
                href="https://www.beversia.com/collections/home-garden?utm_source=aplicativo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t("recurrence.goToWebsite")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

            <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("coupons.step1")}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("coupons.step2")}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("coupons.step3")}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("coupons.step4")}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("coupons.step5")}</span>
              </p>
            </div>
          </div>

          {coupons.map((coupon) => {
            const isRevealed = revealedCoupons.has(coupon.code)
            const isCopied = copiedCoupon === coupon.code

            return (
              <Card key={coupon.code} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{coupon.code}</CardTitle>
                  <CardDescription className="text-base">{t(coupon.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  {!isRevealed ? (
                    <Button
                      onClick={() => handleRevealCoupon(coupon.code)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      size="lg"
                    >
                      {t("coupons.revealButton")}
                    </Button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="flex-1 border-2 border-dashed border-primary rounded-lg px-4 py-3 bg-primary/5">
                        <p className="text-center font-mono font-bold text-lg text-foreground">{coupon.code}</p>
                      </div>
                      <Button
                        onClick={() => handleCopyCoupon(coupon.code)}
                        variant={isCopied ? "default" : "outline"}
                        size="lg"
                        className={
                          isCopied
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "border-primary text-primary hover:bg-primary/10"
                        }
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            {t("coupons.copiedButton")}
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            {t("coupons.copyButton")}
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
