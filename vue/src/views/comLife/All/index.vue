<template>
  <div>
      <p>vue在每个周期里更改this的data。created打印data是最终的结果</p>
      <p>父组件creat用async，只能在本组件async，组织不了子组件里面created</p>
      <p>父组件异步改变传给子组件的值，子组件watch该值会先执行，再执行父组件异步结束</p>
      <p>父穿[]给子组件，父组件异步赋值给[]，子组件不更新</p>
    <p @click="aa()">All
      {{ change }}</p>
    <One :change="change" />
    <Two />
  </div>
</template>

<script>
let ast = { 'a': 'aa' }
// import { mapState } from "vuex";
import One from './One'
import Two from './Two'
export default {
  name: 'All',
  components: {
    Two,
    One
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      change: true,
      tmp: { a: 'aa' }
    }
  },
  computed: {
    // ...mapState(["activityData"])
  },
  beforeCreate() {
    console.info('=>All-beforeCreate')
  },
  created() {
    console.info('=>All-created')
    this.tmp.a = 'created'
    ast.a = 'created'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  beforeMount() {
    console.info('=>All-beforeMount')
    this.tmp.a = 'beforeMount'
    ast.a = 'beforeMount'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  mounted() {
    console.info('=>All-mounted')
    this.tmp.a = 'mounted'
    ast.a = 'mounted'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  beforeUpdate() {
    console.info('=>All-beforeUpdate')
    this.tmp.a = 'beforeUpdate'
    ast.a = 'beforeUpdate'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  updated() {
    console.info('=>All-updated')
    this.tmp.a = 'updated'
    ast.a = 'updated'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  beforeDestroy() {
    console.info('=>All-beforeDestroy')
    this.tmp.a = 'beforeDestroy'
    ast.a = 'beforeDestroy'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  destroyed() {
    console.info('=>All-destroyed')
    this.tmp.a = 'destroyed'
    ast.a = 'destroyed'
    console.info('this.tmp===', this.tmp)
    console.info('ast===', ast)
  },
  methods: {
    aa() {
      this.change = !this.change
    }
  }

}
</script>

<style lang="less" scoped>

</style>
