<template>
    <div class='TextDocument'>
        <p>TextDocument</p>
    </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  components: {
    //       All,
  },
  name: 'TextDocument',
  props: ['title', 'update:title'],
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {}
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
    .TextDocument {

    }
</style>
