<template>
  <div style="margin-left: 40px">
    <p>
      :number:number===>props:{number}
    </p>
    <p>
      provide: {
      foo: 'foo'
      },===>
      inject: ['foo']，，，<span style="color:red">孙组件可以用</span>
    </p>
    <p>
      子组件html中{/{$attrs+""}}++++方法中this.$attrs,<span style="color:red">不可用number命名,不可用在孙组件</span>
    </p>
    <p>
      Father
    </p>

    <Son :numbers="numbers" @spot="spot" />
  </div>

</template>

<script>
// import { mapState } from "vuex";
import Son from '../son'
export default {
  provide: {
    foo: 'foo'
  },
  name: 'Father',
  components: {
    Son
  },
  props: {
  },
  data() {
    return {
      numbers: 12,
      child1: '111',
      child2: '222'
    }
  },

  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  methods: {
    spot(data) {
      console.info('father打印的值==》', data)
    }
  }

}
</script>

<style lang="less" scoped>
</style>
