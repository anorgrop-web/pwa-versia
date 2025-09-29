"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share, PlusSquare, Download, MoreVertical } from "lucide-react"

export default function InstallPage() {
  const { t } = useTranslation()
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setIsIOS(true)
    } else if (/android/i.test(userAgent)) {
      setIsAndroid(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {t("install.title", "Como Instalar o Versia Garden")}
          </h1>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">
              {isIOS && t("install.ios.title", "Para iPhone (iOS)")}
              {isAndroid && t("install.android.title", "Para Android")}
              {!isIOS && !isAndroid && t("install.title", "Como Instalar o Versia Garden")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {isIOS && (
              <>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {t("install.ios.step1", "Abra o navegador Safari e acesse nosso site.")}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Share className="h-4 w-4 text-primary" />
                      <p className="text-foreground leading-relaxed">
                        {t("install.ios.step2", "Toque no ícone de Compartilhamento na barra inferior.")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <PlusSquare className="h-4 w-4 text-primary" />
                      <p className="text-foreground leading-relaxed">
                        {t("install.ios.step3", 'Role para baixo e selecione "Adicionar à Tela de Início".')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">4</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {t("install.ios.step4", 'Toque em "Adicionar" no canto superior direito para confirmar.')}
                  </p>
                </div>
              </>
            )}

            {isAndroid && (
              <>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {t("install.android.step1", "Abra o navegador Chrome e acesse nosso site.")}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="h-4 w-4 text-primary" />
                      <p className="text-foreground leading-relaxed">
                        {t(
                          "install.android.step2",
                          'Um convite para instalar o aplicativo deve aparecer. Toque em "Instalar".',
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MoreVertical className="h-4 w-4 text-primary" />
                      <p className="text-foreground leading-relaxed">
                        {t(
                          "install.android.step3",
                          'Se o convite não aparecer, toque no menu de três pontos no canto superior direito e selecione "Instalar aplicativo".',
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {!isIOS && !isAndroid && (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Acesse este site em seu dispositivo móvel para ver as instruções específicas de instalação.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">iOS (iPhone/iPad)</h3>
                    <p className="text-sm text-muted-foreground">Use o Safari e toque no ícone de compartilhamento</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Android</h3>
                    <p className="text-sm text-muted-foreground">Use o Chrome e procure pelo prompt de instalação</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
