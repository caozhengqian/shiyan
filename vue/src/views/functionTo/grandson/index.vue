<template>
  <div style="margin-left: 40px">
    <p>
      Grandson
    </p>
    <p style="cursor: pointer" @click="_grandson">孙组件<span style="color:red">this.$parent.$parent</span>调用父组件的方法</p>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'Grandson',
  // inject: ['foo'],
  components: {
    //       All,
  },
  props: ['sonFun'],
  data() {
    return {}
  },
  computed: {
    // ...mapState(["activityData"])
  },
  created() {
    // console.info("孙组建=>",this.$attrs)
    // console.log(this.$listeners)
  },
  methods: {
    _grandson() {
      this.sonFun('孙组件调用了父组件')
    },
    _grandson1() {
      // this.fatherFun('孙子能掉了')
      // this.$parent._father('使用$parent')
    }
  }

}
</script>

<style lang="less" scoped>

</style>
