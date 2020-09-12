<template>
  <div class="Test">
    <p>{{ title }}</p>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'Test',
  components: {
    //       All,
  },
  props: {
    title: String
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
    .Test{

    }
</style>
