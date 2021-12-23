import {createI18n} from "vue-i18n";
import homeEn from "./translations/HomeEn.json";
import homeTh from "./translations/HomeTh.json";
import contactUsEn from "./translations/contactUsEn.json";
import contactUsTh from "./translations/contactUsTh.json";
import paymentLinkEn from "./translations/paymentLinkEn.json";
import paymentLinkTh from "./translations/paymentLinkTh.json";
import pricingEn from "./translations/pricingEn.json";
import pricingTh from "./translations/pricingTh.json";
import businessEn from "./translations/businessEn.json";
import businessTh from "./translations/businessTh.json";
import linksEn from "./translations/linksEn.json";
import linksTh from "./translations/linksTh.json";
import aboutUsEn from "./translations/aboutUsEn.json";
import aboutUsTh from "./translations/aboutUsTh.json";
import paymentDemoEn from "./translations/paymentDemoEn.json";
import paymentDemoTh from "./translations/paymentDemoTh.json";
import privacyTh from "./translations/privacyTh.json";
import privacyEn from "./translations/privacyEn.json";
import productTh from "./translations/productTh.json";
import productEn from "./translations/productEn.json";



const i18n = createI18n({
    messages: {
        en: Object.assign({address: "{account}{'@'}{domain}"}, homeEn, contactUsEn, paymentLinkEn, pricingEn, businessEn, linksEn, aboutUsEn, paymentDemoEn, privacyEn, productEn),
        th: Object.assign({address: "{account}{'@'}{domain}"}, homeTh, contactUsTh, paymentLinkTh, pricingTh, businessTh, linksTh, aboutUsTh, paymentDemoTh, privacyTh, productTh),
    },
    fallbackLocale: localStorage.getItem('locale') || 'th',
    locale: localStorage.getItem('locale') || 'th'
})

export default i18n;