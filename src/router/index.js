import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import PricingView from "@/views/PricingView.vue";
import EventsView from "@/views/EventsView.vue";
import BusinessView from "@/views/BusinessView.vue";
import ContactView from "@/views/ContactView.vue";
import NewsView from "@/views/NewsView.vue";
import ServicesView from "@/views/ServicesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    }

  ],
});

export default router
