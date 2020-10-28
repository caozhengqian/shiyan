<template>
    <div class='ETabs'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="专业市场活动基础信息" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="活动参与条件" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="折扣优惠信息" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="折扣利润测算" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="折扣利润测算结果返回" name="five">定时任务补偿</el-tab-pane>
            <el-tab-pane label="增值折扣" name="six">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  components: {
    //       All,
  },
  name: 'ETabs',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  created() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }

}
</script>

<style lang="less" scoped>
    .ETabs {
        border:1px solid red;
    }
</style>
