<template>
  <div style="margin-left: 40px">
    <p>
      Son

    </p>
    <p style="cursor: pointer" @click="_son">使用<span style="color:red">$parter</span>调用父组件方法</p>
    <p style="cursor: pointer" @click="_son1">使用<span style="color:red">:xx 和props</span>调用父组件方法</p>
    <p style="cursor: pointer" @click="_son2">使用<span style="color:red">@xx和$emit</span>调用父组件方法</p>
    <p style="cursor: pointer" @click="_son3">使用<span style="color:red">this.$listeners</span>调用父组件方法，孙组件无法获取</p>
    <Grandson :son-fun="father" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Grandson from '../grandson'
export default {
  name: 'Son',
  components: {
    Grandson
  },
  props: ['father'],
  data() {
    return {}
  },

  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  mounted() {
  },
  methods: {
    _son() {
      this.$parent._father('使用$parent')
    },
    _son1() {
      this.father('使用:xx和props')
    },
    _son2() {
      this.$emit('father', '使用@xx和$emit')
    },
    _son3() {
      this.$listeners.father('使用$listeners调用父组件方法')
    }
  }

}
</script>

<style lang="less" scoped>

</style>
