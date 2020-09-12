<template>
  <div class="TestChildChildRow">
    <el-row>
      <el-col :span="24"><div class="min dark">/deep/<span style="color:red">直接穿透到孙组件</span></div></el-col>
    </el-row>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'TestChildChildRow',
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
  created() {

  },
  methods: {
    aa() {
    }
  }

}
</script>

<style lang="less" scoped>
    .TestChildChildRow {

    }
</style>
