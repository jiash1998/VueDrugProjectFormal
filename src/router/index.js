import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/Home");
const UserReg = () => import("@/views/UserReg");
const SignIn = () => import("@/views/SignIn");
const Contral = () => import("@/views/Contral");
const Son1View = () => import("@/views/ContralSon/Son1View");
const Son2Pur = () => import("@/views/ContralSon/Son2Pur");
const Son2PurNext = () => import("@/views/ContralSon/Son2PurNext");
const Son2PurEnd = () => import("@/views/ContralSon/Son2PurEnd");
const Son3Info = () => import("@/views/ContralSon/Son3Info");
const Son4Charts = () => import("@/views/ContralSon/Son4Charts");


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/userReg",
    name: "userReg",
    component: UserReg
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/contral",
    name: "contral",
    component: Contral,
    children: [
      {
        path: "",
        redirect: "/contral/son1view"
      },
      {
        path: "/contral/son1view",
        name: "conson1view",
        component: Son1View
      },
      {
        path: "/contral/son2pur",
        component: Son2Pur,
        meta: { allback: false }
      },
      {
        path: "/contral/son2purnext",
        component: Son2PurNext
      },
      {
        path: "/contral/son2purend",
        component: Son2PurEnd
      },
      {
        path: "/contral/son3info",
        component: Son3Info
      },
      {
        path: "/contral/son4charts",
        component: Son4Charts
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
