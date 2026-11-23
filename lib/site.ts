// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط. النصوص والأسعار في lib/content.ts
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.ora-projects.org", // ← بدون / في الآخر
  agency: "Grandeur Spaces",

  phoneIntl: "+201062890717",
  phoneDisplay: "01062890717",
  whatsapp: "201062890717",
  email: "leads@ora-projects.org",

  web3forms: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "80949c82-8f82-443c-b11d-86a318a43c79",

  // Google Ads
  gtag: "",
  conv: {
    form: "",
    whatsapp: "",
    call: "",
  },

  // Google Tag Manager (اختياري — سيبه فاضي لو مش محتاجه)
  gtm: "",

  agencyCredit: { name: "One Click", url: "" },
} as const;

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
export const isWeb3Ready = () => site.web3forms.length > 20 && !site.web3forms.startsWith("YOUR_");
