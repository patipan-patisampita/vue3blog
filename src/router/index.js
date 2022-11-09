import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AddPost from "@/views/AddPost.vue";
import CompositionApi from "@/views/CompositionApi.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/api",
      name: "api2",
      component: CompositionApi,
    },
    {
      path: "/addpost",
      name: "addpost",
      component: AddPost,
    },
  ],
});

export default router;
