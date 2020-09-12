<template>
  <div>
    <p>父子孙传值</p>
    <Father />
  </div>

</template>

<script>
// import { mapState } from "vuex";
import Father from './father'
export default {
  name: 'PropsTo',
  components: {
    Father
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      number: 12
    }
  },
  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  methods: {
    aa() {
    }
  }

}
</script>

<style lang="less" scoped>

</style>
