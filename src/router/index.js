import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from "../emergencies/pages/home-view.component.vue";
import UrgenciesViewComponent from "../emergencies/pages/urgencies-view.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: HomeViewComponent,
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/guardians/:id/urgencies",
      name: "Urgencies",
      component: UrgenciesViewComponent,
    },
  ],
});

export default router
