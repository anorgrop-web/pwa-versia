"use client"

import { RotateCcw, Tag, PlayCircle } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  const { t } = useTranslation()

  const menuItems = [
    { id: "subscriptions", icon: RotateCcw, label: t("menu.subscriptions") },
    { id: "coupons", icon: Tag, label: t("menu.coupons") },
    { id: "tutorials", icon: PlayCircle, label: t("menu.tutorials") },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-xl font-bold text-primary">{t("menu.title")}</SheetTitle>
        </SheetHeader>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start gap-4 py-4 px-4 h-auto text-left hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  // Handle navigation here
                  onClose()
                }}
              >
                <Icon className="h-6 w-6 flex-shrink-0" />
                <span className="text-base font-medium">{item.label}</span>
              </Button>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
