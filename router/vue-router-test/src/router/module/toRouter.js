const toRouter = [
  // 营销活动-先跳转到活动列表
  {
    name: "ones",
    path: "/ones",
    redirect: "/ones/oneone"
  },
  {
    name: "oneone",
    path: "/ones/oneone",
    component: () => import("../../components/ones/OneOnePage")
  },
  {
    name: "onetwo",
    path: "/ones/onetwo",
    component: () => import("../../components/ones/OneTwoPage")
  },
  {
    name: "onethree",
    path: "/ones/onethree",
    component: () => import("../../components/ones/OneThreePage")
  }
];

export default toRouter;
