<template>
    <div class='ETabs'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文本输入" name="first">
              <div>是否展示：<el-switch
                  v-model="a"
                  active-text="不展示"
                  inactive-text="展示">
              </el-switch></div>
              <div >是否必输：
                <el-switch
                    v-model="b"
                    active-text="不必输"
                    inactive-text="必输">
                </el-switch></div>
              <div >是否默认值：
                <el-switch
                    v-model="c"
                    active-text="否"
                    inactive-text="是">
                </el-switch>
              </div>
              <div >默认值：<el-input v-model="input" placeholder="请输入默认值"></el-input></div>
              <div >是否置灰：
                <el-switch
                    v-model="c"
                    active-text="否"
                    inactive-text="是">
                </el-switch>
              </div>
              <div>校验规则</div>
            </el-tab-pane>
            <el-tab-pane label="数字输入" name="second"><div style="height: 100px">数字输入的标签配置</div></el-tab-pane>
            <el-tab-pane label="单选框" name="third"><div style="height: 100px">单选框的标签配置</div></el-tab-pane>
            <el-tab-pane label="复选框" name="fourth"><div style="height: 100px">复选框的标签配置</div></el-tab-pane>
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
      activeName: 'second',
      'a': '',
      'b': '',
      'c': '',
      'd': '',
      'e': '',
      'f': '',
      'g': '',
      'h': ''
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
