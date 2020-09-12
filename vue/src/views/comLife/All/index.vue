<template>
  <div>
    <p @click="aa()">All
      {{ change }}</p>
    <One :change="change" />
    <Two />
  </div>
</template>

<script>
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
      change: true
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
  },
  beforeMount() {
    console.info('=>All-beforeMount')
  },
  mounted() {
    console.info('=>All-mounted')
  },
  beforeUpdate() {
    console.info('=>All-beforeUpdate')
  },
  updated() {
    console.info('=>All-updated')
  },
  beforeDestroy() {
    console.info('=>All-beforeDestroy')
  },
  destroyed() {
    console.info('=>All-destroyed')
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
