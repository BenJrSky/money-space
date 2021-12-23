import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import  'animate.css';
import i18n from "./i18n";

import App from './App.vue';
import HomePage from "./pages/HomePage.vue";
import PricingPage from "./pages/PricingPage.vue";
import ContactUsPage from "./pages/ContactUsPage.vue";
import PaymentPage from "./pages/PaymentPage.vue";
import LinksPage from "./pages/LinksPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import PaymentDemoPage from "./pages/PaymentDemoPage.vue";
import BusinessesPage from './pages/BusinessesPage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import ProductPage from './pages/ProductPage.vue';
import DashboardPage from './pages/DashboardPage.vue';



// const routerHistory = createWebHistory()
//
// const router = createRouter({
//     history: routerHistory,
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: () => import('./pages/HomePage.vue')
//         },
//         {
//             path: '/pricing',
//             component: () => import('./pages/PricingPage.vue')
//         },
//         {
//             path: '/contact-us',
//             component: () => import('./pages/ContactUsPage.vue')
//         },
//         {
//             path: '/payment',
//             component: () => import('./pages/PaymentPage.vue')
//         },
//         {
//             path: '/businesses',
//             component: () => import('./pages/BusinessesPage.vue')
//         },
//         {
//             path: '/links',
//             component: () => import('./pages/LinksPage.vue')
//         },
//         {
//             path: '/about-us',
//             component: () => import('./pages/AboutUsPage.vue')
//         },
//         {
//             path: '/payment-demo',
//             component: () => import('./pages/PaymentDemoPage.vue')
//         },
//         {
//             path :'/*',
//             component: () => import('./pages/HomePage.vue')
//         }
//     ]
// })

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/pricing',
        component: PricingPage
    },
    {
        path: '/contact-us',
        component: ContactUsPage
    },
    {
        path: '/payment',
        component: PaymentPage
    },
    {
        path: '/businesses',
        component: BusinessesPage
    },
    {
        path: '/links',
        component: LinksPage
    },
    {
        path: '/about-us',
        component: AboutUsPage
    },
    {
        path: '/payment-demo',
        component: PaymentDemoPage
    },
    {
        path: '/privacy',
        component: PrivacyPage
    },
    {
        path: '/product',
        component: ProductPage
    },
    {
        path: '/dashboard',
        component: DashboardPage
    },
    {
        path :'/*',
        component: HomePage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

router.beforeEach(() => {
    window.scrollTo(0, 0)
})

const moneyspaceApp = createApp(App)
moneyspaceApp.use(i18n);
moneyspaceApp.use(router)
moneyspaceApp.mount('#bodyWrap')
