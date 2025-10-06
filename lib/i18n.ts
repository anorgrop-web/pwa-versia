import i18n from "i18next"
import { initReactI18next, useTranslation } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Import translation files
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import fr from "@/locales/fr.json"
import it from "@/locales/it.json"
import de from "@/locales/de.json"
import pt from "@/locales/pt.json"
import hr from "@/locales/hr.json"
import pl from "@/locales/pl.json"

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  de: { translation: de },
  pt: { translation: pt },
  hr: { translation: hr },
  pl: { translation: pl },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  })

export { useTranslation }
export default i18n
