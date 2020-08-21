<template>
  <div class="indexPage">
      <p>
          <span @click="redirectPage(1)" class="point">首页</span>
      </p>
      <p>
          <span @click="redirectPage(2)" class="point">生命周期</span>
      </p>
      <p>
          <span @click="redirectPage(3)" class="point">css动态</span>
      </p>
      <p>
          <span @click="redirectPage(4)" class="point">页面<span class="red">循环</span>和<span class="red">判断</span></span>
      </p>
      <p>
          <span @click="redirectPage(5)" class="point">父子孙<span class="red">传</span>递<span class="red">方法</span></span>
      </p>
      <p>
          <span @click="redirectPage(6)" class="point">父子孙<span class="red">传</span>递<span class="red">值</span></span>
      </p>
      <p>
          <span @click="redirectPage(7)" class="point">路由跳转+传参</span>
      </p>
      <p>
          <span @click="redirectPage(8)" class="point">vuex增删改查</span>
      </p>
      <p>
          <span @click="redirectPage(9)" class="point">form表单</span>
      </p>
      <p>
          <span @click="redirectPage(10)" class="point"><span class="red"> watch</span>与<span class="red">computer</span></span>
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
        case 10:
          this.$router.push({ path: "watch" });
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
    .red{
        color:red;
    }
}
</style>
