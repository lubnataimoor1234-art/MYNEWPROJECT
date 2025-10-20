import { I18n } from "i18n-js";
import en from "../Locales/en.json";

// Create an instance
const i18n = new I18n({
  en,
});

// Configure it
i18n.defaultLocale = "en";
i18n.locale = "en";
i18n.enableFallback = true;

// Export the instance
export default i18n;
