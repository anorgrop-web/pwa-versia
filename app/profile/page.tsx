"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Camera, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { BottomNavigation } from "@/components/bottom-navigation"
import { useRouter } from "next/navigation"

const countryCodes = [
  { code: "+55", country: "Brasil", flag: "🇧🇷", languages: ["pt", "pt-BR"] },
  { code: "+351", country: "Portugal", flag: "🇵🇹", languages: ["pt", "pt-PT"] },
  { code: "+1", country: "EUA", flag: "🇺🇸", languages: ["en", "en-US"] },
  { code: "+1", country: "Canadá", flag: "🇨🇦", languages: ["en", "en-CA", "fr", "fr-CA"] },
  { code: "+49", country: "Alemanha", flag: "🇩🇪", languages: ["de", "de-DE"] },
  { code: "+33", country: "França", flag: "🇫🇷", languages: ["fr", "fr-FR"] },
  { code: "+39", country: "Itália", flag: "🇮🇹", languages: ["it", "it-IT"] },
  { code: "+34", country: "Espanha", flag: "🇪🇸", languages: ["es", "es-ES"] },
  { code: "+385", country: "Croácia", flag: "🇭🇷", languages: ["hr", "hr-HR"] },
  { code: "+48", country: "Polônia", flag: "🇵🇱", languages: ["pl", "pl-PL"] },
  { code: "+44", country: "Reino Unido", flag: "🇬🇧", languages: ["en", "en-GB"] },
]

const detectCountryCodeFromLanguage = (language: string): string => {
  const normalizedLang = language.toLowerCase()

  for (const country of countryCodes) {
    if (country.languages.some((lang) => normalizedLang.startsWith(lang.toLowerCase()))) {
      return country.code
    }
  }

  return "+55" // Default to Brazil
}

export default function ProfilePage() {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountryCode: "+55",
    phoneNumber: "",
    address: "",
  })

  useEffect(() => {
    const detectedCode = detectCountryCodeFromLanguage(navigator.language)
    setFormData((prev) => ({ ...prev, phoneCountryCode: detectedCode }))
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    const detectedCode = detectCountryCodeFromLanguage(language)
    setFormData((prev) => ({ ...prev, phoneCountryCode: detectedCode }))
  }

  const handleSaveChanges = () => {
    // Here you would typically save to a backend
    console.log("Saving changes:", formData)
    // Show success toast or feedback
  }

  const handleResetPassword = () => {
    // Here you would typically trigger password reset flow
    console.log("Reset password requested")
    // Show modal or navigate to reset password page
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "home") {
      router.push("/")
    }
    // Add other navigation logic as needed
  }

  const languages = [
    { code: "en", name: t("languages.en") },
    { code: "es", name: t("languages.es") },
    { code: "fr", name: t("languages.fr") },
    { code: "it", name: t("languages.it") },
    { code: "de", name: t("languages.de") },
    { code: "pt", name: t("languages.pt") },
    { code: "hr", name: t("languages.hr") },
    { code: "pl", name: t("languages.pl") },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Voltar</span>
          </Button>
          <h1 className="text-xl font-bold text-foreground">{t("profile.title")}</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="px-4 py-6 pb-20">
        <div className="max-w-md mx-auto space-y-6">
          {/* Profile Photo Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/user-profile-photo.png" alt="Profile" />
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {formData.firstName.charAt(0) || "U"}
                      {formData.lastName.charAt(0) || ""}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-lg"
                  >
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">{t("profile.changePhoto")}</span>
                  </Button>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    {formData.firstName || formData.lastName
                      ? `${formData.firstName} ${formData.lastName}`.trim()
                      : "Nome do Usuário"}
                  </h2>
                  <p className="text-sm text-muted-foreground">{formData.email || "email@exemplo.com"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Data Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">{t("profile.personalData")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    {t("profile.firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="text-base"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    {t("profile.lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="text-base"
                    placeholder="Digite seu sobrenome"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {t("profile.email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="text-base"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  {t("profile.phone")}
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.phoneCountryCode}
                    onValueChange={(value) => handleInputChange("phoneCountryCode", value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country, index) => (
                        <SelectItem key={`${country.code}-${index}`} value={country.code}>
                          <span className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span>{country.code}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="text-base flex-1"
                    placeholder="Digite seu telefone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  {t("profile.address")}
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="text-base"
                  placeholder="Digite seu endereço completo"
                />
              </div>

              <Button
                onClick={handleSaveChanges}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                size="lg"
              >
                {t("profile.saveChanges")}
              </Button>
            </CardContent>
          </Card>

          {/* Account Settings Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">{t("profile.accountSettings")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t("profile.language")}</Label>
                <Select value={i18n.language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code} className="text-base">
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Security Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <Label className="text-sm font-medium">{t("profile.security")}</Label>
                </div>
                <Button
                  variant="outline"
                  onClick={handleResetPassword}
                  className="w-full border-primary text-primary hover:bg-primary/10 font-semibold py-3 bg-transparent"
                  size="lg"
                >
                  {t("profile.resetPassword")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
