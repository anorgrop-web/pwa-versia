"use client"

import { Home, BookOpen, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface BottomNavigationProps {
  activeTab: string
}

export function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const navItems = [
    { id: "home", icon: Home, label: t("nav.home"), path: "/" },
    { id: "guide", icon: BookOpen, label: t("nav.guide"), path: "/area-plantio" },
    { id: "community", icon: Users, label: t("nav.community"), path: "/community" },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleNavigation(item.path)}
              className={`flex flex-col items-center gap-1 py-3 px-4 h-auto min-w-0 flex-1 ${
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium leading-tight text-center">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
