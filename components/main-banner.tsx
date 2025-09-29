"use client"

import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"
import { useTranslation } from "react-i18next"

export function MainBanner() {
  const { t } = useTranslation()

  return (
    <div className="mt-16 mx-4 mb-6">
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-secondary/20 p-3 rounded-full">
            <Leaf className="h-8 w-8 text-secondary" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3 text-balance">{t("banner.title")}</h2>

        <p className="text-primary-foreground/90 mb-6 leading-relaxed text-pretty">{t("banner.subtitle")}</p>

        <Button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 text-lg"
          size="lg"
        >
          {t("banner.cta")}
        </Button>
      </div>
    </div>
  )
}
