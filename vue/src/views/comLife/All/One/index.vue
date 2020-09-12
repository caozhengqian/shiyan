<template>
  <div>
    <p>One</p>
    <p>{{ change }}</p>
    <OneOne :change-one="change" />
  </div>

</template>

<script>
// import { mapState } from "vuex";
import OneOne from './OneOne'
export default {
  name: 'One',
  components: {
    OneOne
  },
  props: {
    change: Boolean
  },
  data() {
    return {}
  },
  computed: {
    // ...mapState(["activityData"])
  },
  beforeCreate() {
    console.info('======>One-beforeCreate')
  },
  created() {
    console.info('======>One-created')
  },
  beforeMount() {
    console.info('======>One-beforeMount')
  },
  mounted() {
    console.info('======>One-mounted')
  },
  beforeUpdate() {
    console.info('======>One-beforeUpdate')
  },
  updated() {
    console.info('======>One-updated')
  },
  beforeDestroy() {
    console.info('======>One-beforeDestroy')
  },
  destroyed() {
    console.info('======>One-destroyed')
  },
  methods: {
    aa() {
    }
  }

}
</script>

<style lang="less" scoped>
    p{
        margin-left: 40px;
    }
</style>
