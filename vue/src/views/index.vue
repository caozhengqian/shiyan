<template>
  <div class="indexPage">
    <p>
      <span class="point" @click="redirectPage(1)">1、首页</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(2)">2、生命周期</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(3)">3、css动态</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(4)">4、页面<span class="red">循环</span>和<span class="red">判断</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(5)">5、父子孙<span class="red">传</span>递<span class="red">方法</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(6)">6、父子孙<span class="red">传</span>递<span class="red">值</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(7)">7、路由跳转+传参</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(8)">8、vuex增删改查</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(9)">9、form表单</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(10)">10、<span class="red"> watch</span>与<span class="red">computer</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(11)">11、<span class="red">栅格布局</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(12)">12、Class 与 <span class="red">Style 绑定</span></span>
    </p>
    <p>
      <span class="point" @click="redirectPage(13)">13、条件渲染</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(14)">14、列表渲染</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(15)">15、事件处理</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(16)">16、表单输入绑定</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(17)">17、组件基础</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(18)">18、element日期組件</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(19)">19、element表格</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(20)">20、sync</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(21)">21、keep-alive</span>
    </p>
    <p>
      <span class="point" @click="redirectPage(22)">22、elementUI</span>
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
          this.$router.push({ path: 'first' })
          break
        case 2:
          this.$router.push({ path: 'life' })
          break
        case 3:
          this.$router.push({ path: 'cssDongTai' })
          break
        case 4:
          this.$router.push({ path: 'forIfView' })
          break
        case 5:
          this.$router.push({ path: 'functionTo' })
          break
        case 6:
          this.$router.push({ path: 'propsTo' })
          break
        case 7:
          this.$router.push({ path: 'routerTo' })
          break
        case 8:
          this.$router.push({ path: 'vuexTo' })
          break
        case 9:
          this.$router.push({ path: 'formTo' })
          break
        case 10:
          this.$router.push({ path: 'watch' })
          break
        case 11:
          this.$router.push({ path: 'layoutTo' })
          break
        case 12:
          this.$router.push({ path: 'cssStyle' })
          break
        case 13:
          this.$router.push({ path: 'ifTo' })
          break
        case 14:
          this.$router.push({ path: 'listTo' })
          break
        case 15:
          this.$router.push({ path: 'eventTo' })
          break
        case 16:
          this.$router.push({ path: 'formbind' })
          break
        case 17:
          this.$router.push({ path: 'comBase' })
          break
        case 18:
          this.$router.push({ path: 'DatePick' })
          break
        case 19:
          this.$router.push({ path: 'Table' })
          break
        case 20:
          this.$router.push({ path: 'sync' })
          break
        case 21:
          this.$router.push({ path: 'keep' })
          break
        case 22:
          this.$router.push({ path: 'elementUis' })
          break
        default:
          break
      }
    }
  }
}
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
