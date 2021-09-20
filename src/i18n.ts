import i18next from "i18next";

// en-US
import loading_en from "./translations/en/loading.json";
import summaryCard_en from "./translations/en/summary-card.json";
import app_en from "./translations/en/app.json";

// pt-BR
import loading_pt from "./translations/pt/loading.json";
import summaryCard_pt from "./translations/pt/summary-card.json";
import app_pt from "./translations/pt/app.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'pt',
    fallbackLng: "pt",
    resources: {
        en: {
            'summary-card': summaryCard_en,
            'app': app_en,
            'loading': loading_en
        },
        pt: {
            'summary-card': summaryCard_pt,
            'app': app_pt,
            'loading': loading_pt
        },
    }
});

export default i18next
