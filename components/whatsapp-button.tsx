"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "+995555123456" // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello! I would like to check availability at Kazbegi Hideaway.")

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-6 gap-3 text-lg font-semibold"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Check Availability on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </Button>
  )
}
