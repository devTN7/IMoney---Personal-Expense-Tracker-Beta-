import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";
// Auth Guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Hey, David",
      leading: true,
      isShowFooter: true,
    },
    component: () => import("../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/ProfileView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/LogoutView.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/ReportView.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/BudgetView.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () => import("../views/NewTransactionView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
