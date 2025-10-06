"use client"

import { useTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Monitor, Share, Download, MoreVertical } from "lucide-react"

export default function InstallPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{t("install.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("install.description")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Android/Chrome */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="h-6 w-6 text-primary" />
                <CardTitle>{t("install.android.title")}</CardTitle>
              </div>
              <CardDescription>{t("install.android.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-sm">{t("install.android.step1")}</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-2">{t("install.android.step2")}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MoreVertical className="h-4 w-4" />
                      <span className="text-xs">{t("install.android.menuIcon")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-2">{t("install.android.step3")}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span className="text-xs">{t("install.android.installButton")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <p className="text-sm">{t("install.android.step4")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* iOS/Safari */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="h-6 w-6 text-primary" />
                <CardTitle>{t("install.ios.title")}</CardTitle>
              </div>
              <CardDescription>{t("install.ios.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-sm">{t("install.ios.step1")}</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-2">{t("install.ios.step2")}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Share className="h-4 w-4" />
                      <span className="text-xs">{t("install.ios.shareIcon")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-sm">{t("install.ios.step3")}</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <p className="text-sm">{t("install.ios.step4")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Desktop */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="h-6 w-6 text-primary" />
                <CardTitle>{t("install.desktop.title")}</CardTitle>
              </div>
              <CardDescription>{t("install.desktop.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-sm">{t("install.desktop.step1")}</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-2">{t("install.desktop.step2")}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span className="text-xs">{t("install.desktop.installIcon")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-sm">{t("install.desktop.step3")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="/">{t("install.backToHome")}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
