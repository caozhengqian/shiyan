<template>
  <div style="margin-left: 40px">
    <p>
      Son
      <span>{{ number }}</span>
      <span>{{ foo }}</span>
      <span>{{ $attrs }}</span>
      <span style="color:red" @click="spot1">传给父组件</span>
    </p>
    <Grandson @spot11="spot2" />
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
  inheritAttrs: false,
  inject: ['foo'],
  props: ['number'],
  data() {
    return {}
  },

  computed: {
    // ...mapState(["activityData"])
  },
  created() {
    console.info(this.$attrs)
  },
  mounted() {
  },
  methods: {
    spot1() {
      this.$emit('spot', '子组件传给父组件。')
    },
    spot2(data) {
      this.$emit('spot', data)
    }
  }

}
</script>

<style lang="less" scoped>

</style>
