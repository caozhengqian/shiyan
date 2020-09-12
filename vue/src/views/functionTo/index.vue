<template>
  <div>
    <p>FunctionTo</p>
    <Father />
  </div>

</template>

<script>
// import { mapState } from "vuex";
import Father from './father'
export default {
  name: 'FunctionTo',
  components: {
    Father
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
