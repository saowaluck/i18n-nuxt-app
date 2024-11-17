import en from "./locales/en.json";
import ja from "./locales/ja.json";
import fr from "./locales/fr.json";
import th from "./locales/th.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ja,
        fr,
        th
    }
}))
