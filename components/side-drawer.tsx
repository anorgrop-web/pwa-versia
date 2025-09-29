"use client"

import { Tag, PlayCircle, Package, Mail, Repeat, Sprout } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  const { t } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    {
      id: "subscriptions",
      icon: Repeat,
      label: t("menu.subscriptions"),
      type: "internal" as const,
      route: "/recorrencia",
    },
    { id: "coupons", icon: Tag, label: t("menu.coupons"), type: "internal" as const, route: "/coupons" },
    {
      id: "plantingArea",
      icon: Sprout,
      label: t("menu.plantingArea"),
      type: "internal" as const,
      route: "/area-plantio",
    },
    { id: "tutorials", icon: PlayCircle, label: t("menu.tutorials"), type: "internal" as const },
    {
      id: "trackOrders",
      icon: Package,
      label: t("menu.trackOrders"),
      type: "external" as const,
      url: "https://www.beversia.com/",
    },
    { id: "contact", icon: Mail, label: t("menu.contact"), type: "internal" as const, route: "/contact" },
  ]

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    if (item.type === "external" && "url" in item) {
      window.open(item.url, "_blank", "noopener,noreferrer")
    } else if (item.type === "internal" && "route" in item && item.route) {
      router.push(item.route)
    }
    onClose()
  }

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
                onClick={() => handleMenuClick(item)}
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
