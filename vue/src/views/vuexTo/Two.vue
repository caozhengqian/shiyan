<template>
    <div class='Two'>
        <p>Two</p>
        <p>{{JSON.stringify(bigObj)}}</p>
        <p>{{small}}</p>
        <Three/>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import Three from './Three'
export default {
  components: {
    Three
  },
  name: 'Two',
  props: {
    //  msg: String
  },
  computed: {
    ...mapState({
      bigObj: store => store.products.bigObj,
      small: store => store.products.small
    })
  },
  data() {
    return {}
  },
  created() {
    console.info('------------Two--Created')
  },
  mounted() {
    console.info('------------Two--mounted')
  },
  beforeCreate() {
    console.info('------------Two--beforeCreate')
  },
  beforeMount() {
    console.info('------------Two--beforeMount')
  },
  beforeUpdate() {
    console.info('------------Two--beforeUpdate')
  },
  updated() {
    console.info('------------Two--updated')
  },
  beforeDestroy() {
    console.info('------------Two--beforeDestroy')
  },
  destroyed() {
    console.info('------------Two--destroyed')
  },
  methods: {
    aa() {
    }
  }

}
</script>

<style lang="less" scoped>
    .Two {
        border: 1px solid red;
        padding-bottom: 10px;
    }
</style>
