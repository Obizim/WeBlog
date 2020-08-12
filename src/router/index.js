import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import BlogDetails from "../views/BlogDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs
  },
  {
    path: "/blog/:id",
    name: "BlogDetails",
    component: BlogDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
