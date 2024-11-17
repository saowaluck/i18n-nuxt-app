import en from "./locales/en.json";
import th from "./locales/th.json";
import fr from "./locales/fr.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        th,
        fr,
        ja,
        ko
    }
}))
