<template>
  <div class="indexPage">
      <p>
          <span @click="redirectPage(1)" class="point">1、首页</span>
      </p>
      <p>
          <span @click="redirectPage(2)" class="point">2、生命周期</span>
      </p>
      <p>
          <span @click="redirectPage(3)" class="point">3、css动态</span>
      </p>
      <p>
          <span @click="redirectPage(4)" class="point">4、页面<span class="red">循环</span>和<span class="red">判断</span></span>
      </p>
      <p>
          <span @click="redirectPage(5)" class="point">5、父子孙<span class="red">传</span>递<span class="red">方法</span></span>
      </p>
      <p>
          <span @click="redirectPage(6)" class="point">6、父子孙<span class="red">传</span>递<span class="red">值</span></span>
      </p>
      <p>
          <span @click="redirectPage(7)" class="point">7、路由跳转+传参</span>
      </p>
      <p>
          <span @click="redirectPage(8)" class="point">8、vuex增删改查</span>
      </p>
      <p>
          <span @click="redirectPage(9)" class="point">9、form表单</span>
      </p>
      <p>
          <span @click="redirectPage(10)" class="point">10、<span class="red"> watch</span>与<span class="red">computer</span></span>
      </p>
      <p>
          <span @click="redirectPage(11)" class="point">11、<span class="red">栅格布局</span></span>
      </p>
      <p>
          <span @click="redirectPage(12)" class="point">12、Class 与 <span class="red">Style 绑定</span></span>
      </p>
      <p>
          <span @click="redirectPage(13)" class="point">13、条件渲染</span>
      </p>
      <p>
          <span @click="redirectPage(14)" class="point">14、列表渲染</span>
      </p>
      <p>
          <span @click="redirectPage(15)" class="point">15、事件处理</span>
      </p>
      <p>
          <span @click="redirectPage(16)" class="point">16、表单输入绑定</span>
      </p>
      <p>
          <span @click="redirectPage(17)" class="point">17、组件基础</span>
      </p>
  </div>
</template>

<script>
export default {
  data: () => ({
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
        case 11:
          this.$router.push({ path: "layoutTo" });
          break;
        case 12:
          this.$router.push({ path: "cssStyle" });
          break;
        case 13:
          this.$router.push({ path: "ifTo" });
          break;
        case 14:
          this.$router.push({ path: "listTo" });
          break;
        case 15:
          this.$router.push({ path: "eventTo" });
          break;
        case 16:
          this.$router.push({ path: "formbind" });
          break;
        case 17:
          this.$router.push({ path: "comBase" });
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
