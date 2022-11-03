import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/",
    meta: {
      title: "首页",
      name: "home",
      hideTitle: false,
    },
    component: () => import("@/views/home/index"),
    redirect: "list",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/home/list"),
      },
    ],
  },
  {
    path: "/bigScreen",
    name: "bigScreen",
    meta: {
      title: "水肥大屏",
      name: "bigScreen",
      hideTitle: false,
    },
    component: () => import("@/views/shuifeiScreen/Shuifeiji"),
    hidden: true,
  },
  // { path: '*', redirect: '/404', hidden: true }
];

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
