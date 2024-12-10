"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "@/app/components/ui/button"

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? "default" : "outline"}
        onClick={() => setLanguage('en')}
        className="w-12"
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? "default" : "outline"}
        onClick={() => setLanguage('es')}
        className="w-12"
      >
        ES
      </Button>
    </div>
  )
}

