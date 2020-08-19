<template>
  <div class="indexPage">
      <p v-for="item in pages" :key="item.id">
        <span @click="redirectPage(item.id)" class="point">{{ item.title }}</span>
      </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    pages: [
      { id: 1, title: "首页", path: "" },
      { id: 2, title: "生命周期", path: "life" },
      { id: 3, title: "css动态", path: "cssDongTai" },
      { id: 4, title: "页面循环和判断", path: "forIfView" },
      { id: 5, title: "父子孙传递方法", path: "functionTo" },
      { id: 6, title: "父子孙传递值", path: "propsTo" },
      { id: 7, title: "路由跳转+传参", path: "routerTo" },
      { id: 8, title: "vuex增删改查", path: "vuexTo" },
      { id: 9, title: "form表单", path: "formTo" },


    ]
  }),
  created() {


  },
  methods: {
    // 路由跳转
    redirectPage(type) {
      switch (type) {
        case 1:
          break;
        case 2:
          this.$router.push({ path: "life" });
          break;
        case 3:
          this.$router.push({ path: "cssDongTai" });
          break;
        case 4:
          this.$router.push({ path: "forIfView" });
          break;
        case 5:
          this.$router.push({ path: "functionTo" });
          break;
        case 6:
          this.$router.push({ path: "propsTo" });
          break;
        case 7:
          this.$router.push({ path: "routerTo" });
          break;
        case 8:
          this.$router.push({ path: "vuexTo" });
          break;
        case 9:
          this.$router.push({ path: "formTo" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.indexPage {
  .point{
    cursor: pointer;
  }
}
</style>
