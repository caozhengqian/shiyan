<template>
  <p>Two</p>
</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'Two',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {}
  },
  computed: {
    // ...mapState(["activityData"])
  },
  beforeCreate() {
    console.info('======>Two-beforeCreate')
  },
  created() {
    console.info('======>Two-created')
  },
  beforeMount() {
    console.info('======>Two-beforeMount')
  },
  mounted() {
    console.info('======>Two-mounted')
  },
  beforeUpdate() {
    console.info('======>Two-beforeUpdate')
  },
  updated() {
    console.info('======>Two-updated')
  },
  beforeDestroy() {
    console.info('======>Two-beforeDestroy')
  },
  destroyed() {
    console.info('======>Two-destroyed')
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
