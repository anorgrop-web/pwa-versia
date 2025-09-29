"use client"

import { User, Menu } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
  onProfileClick?: () => void
}

export function Header({ onMenuClick, onProfileClick }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* User Profile Icon */}
        <Button variant="ghost" size="icon" className="text-primary" onClick={onProfileClick}>
          <User className="h-6 w-6" />
          <span className="sr-only">{t("header.profile")}</span>
        </Button>

        {/* Logo */}
        <div className="flex-1 text-center">
          <img
            src="https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Sementes/logoversiagardemsemfundo%203.png"
            alt="Versia Garden"
            className="h-8 mx-auto"
          />
        </div>

        {/* Hamburger Menu */}
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="text-primary">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t("header.menu")}</span>
        </Button>
      </div>
    </header>
  )
}
