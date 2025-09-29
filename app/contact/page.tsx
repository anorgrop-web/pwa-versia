"use client"

import { useState } from "react"
import { Copy, Mail, ArrowLeft, Check } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const email = "info@versiagarden.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleOpenEmailApp = () => {
    const subject = encodeURIComponent(t("contact.emailSubject"))
    const mailtoUrl = `mailto:${email}?subject=${subject}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">{t("contact.title")}</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <Card className="shadow-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{t("contact.title")}</CardTitle>
              <CardDescription className="text-muted-foreground">{t("contact.subtitle")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">{t("contact.description")}</p>

                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-lg font-mono font-medium text-foreground break-all">{email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleCopyEmail} className="w-full gap-2 bg-transparent" variant="outline">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      {t("contact.emailCopied")}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {t("contact.copyEmail")}
                    </>
                  )}
                </Button>

                <Button onClick={handleOpenEmailApp} className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  {t("contact.openEmailApp")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
