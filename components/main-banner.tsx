"use client"

import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"
import { useTranslation } from "react-i18next"

export function MainBanner() {
  const { t } = useTranslation()

  return (
    <div className="mt-16 mx-4 mb-6">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        {/* Background image section */}
        <div
          className="h-64 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Sementes/Gemini_Generated_Image_7th52k7th52k7th5.png')",
          }}
        />

        {/* Content section below image */}
        <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground">
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
    </div>
  )
}
