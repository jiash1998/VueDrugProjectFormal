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
const Son5Export = () => import("@/views/ContralSon/Son5Export");
const Son6Record = () => import("@/views/ContralSon/Son6Record");
const Son7Feedback = () => import("@/views/ContralSon/Son7Feedback");
const Son8Test = () => import("@/views/ContralSon/Son8Feedback");

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
    meta: {
      requireAuth: true
    },
    beforeEach: (to, from, next) => {
      const nextRoute = "contral";
      const loginsign = store.state.btnstate;
      if (nextRoute.indexOf(to.name) >= 0) {
        if (loginsign == false) {
          router.push("/signin");
        } else {
          next();
        }
      }
    },
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
        component: Son2PurNext,
        meta: { allowBack: false }
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
      },
      {
        path: "/contral/son5export",
        component: Son5Export
      },
      {
        path: "/contral/son6record",
        component: Son6Record
      },
      {
        path: "/contral/son7feedback",
        component: Son7Feedback
      },
      {
        path: "/contral/son8test",
        component: Son8Test
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
