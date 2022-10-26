import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'
import HomePage from "../components/HomePage";
import GalleyComponent from "../components/GalleryComponent";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleyComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
