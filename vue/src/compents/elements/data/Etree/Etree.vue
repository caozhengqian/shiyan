<template>
    <div class='Etree'>
      <el-tree
          accordion
          show-checkbox
          :data="datas"
          check-strictly
          :props="defaultProps"
          :filter-node-method="filterNode"
          ref="tree"
          node-key="deptStandardCode"
          @check-change="handleCheckChange"
          @check="submitForms"
          v-loading="treeloading"
          element-loading-text="拼命加载中..."
      ></el-tree>
    </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
const datas = [{
  'id': '103',
  'text': '办公门户机构人员',
  'checked': false,
  'leaf': false,
  'deptStandardCode': 'DP00002',
  'parentId': '0',
  'canSelect': true,
  'level': 1,
  'children': [
    {
      'id': '104',
      'text': '总裁',
      'checked': false,
      'leaf': false,
      'deptStandardCode': 'DP00003',
      'parentId': '103',
      'canSelect': true,
      'level': 2,
      'children': [
        {
          'id': '503928',
          'text': '收入管理中心',
          'checked': false,
          'leaf': false,
          'deptStandardCode': 'DP53267',
          'parentId': '104',
          'canSelect': true,
          'level': 3,
          'children': [
            {
              'id': '270',
              'text': '上海事业部',
              'checked': false,
              'leaf': false,
              'deptStandardCode': 'DP00020',
              'parentId': '503928',
              'canSelect': true,
              'level': 4,
              'children': [
                {
                  'id': '48655',
                  'text': '上海事业部收入管理部',
                  'checked': false,
                  'leaf': false,
                  'deptStandardCode': 'DP01927',
                  'parentId': '270',
                  'canSelect': true,
                  'level': 5,
                  'children': [
                    {
                      'id': '491811',
                      'text': '上海事业部经营管理组',
                      'checked': false,
                      'leaf': true,
                      'deptStandardCode': 'DP39456',
                      'parentId': '48655',
                      'canSelect': true,
                      'level': 6,
                      'children': null,
                      'nextBro': null
                    },
                    {
                      'id': '491814',
                      'text': '上海事业部散客管理组',
                      'checked': false,
                      'leaf': true,
                      'deptStandardCode': 'DP39517',
                      'parentId': '48655',
                      'canSelect': true,
                      'level': 6,
                      'children': null,
                      'nextBro': null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': '503929',
          'text': '效率与客户体验管理中心',
          'checked': false,
          'leaf': false,
          'deptStandardCode': 'DP53241',
          'parentId': '104',
          'canSelect': true,
          'level': 3,
          'children': [
            {
              'id': '452',
              'text': '顺德枢纽中心',
              'checked': false,
              'leaf': false,
              'deptStandardCode': 'DP00182',
              'parentId': '503929',
              'canSelect': true,
              'level': 4,
              'children': [
                {
                  'id': '756',
                  'text': '顺德车队修理部',
                  'checked': false,
                  'leaf': false,
                  'deptStandardCode': 'DP00257',
                  'parentId': '452',
                  'canSelect': true,
                  'level': 5,
                  'children': [
                    {
                      'id': '11148',
                      'text': '顺德短途车队修理一组',
                      'checked': false,
                      'leaf': true,
                      'deptStandardCode': 'DP01255',
                      'parentId': '756',
                      'canSelect': true,
                      'level': 6,
                      'children': null,
                      'nextBro': null
                    },
                    {
                      'id': '11151',
                      'text': '顺德短途车队修理二组',
                      'checked': false,
                      'leaf': true,
                      'deptStandardCode': 'DP01258',
                      'parentId': '756',
                      'canSelect': true,
                      'level': 6,
                      'children': null,
                      'nextBro': null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}]
export default {
  components: {
    //       All,
  },
  name: 'Etree',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      datas: datas,
      defaultProps: {
        children: 'children',
        label: 'text'
      }, // tree组件使用props
      // 树状结构
      treeloading: false // 树状图结构
    }
  },
  created() {

  },
  methods: {

    // 树状图展示方法回调
    submitForms(i) {
      console.info('提交方法', i)
      let res = JSON.parse(JSON.stringify(this.$refs.tree.getCheckedNodes()))
      console.info('所有选中的节点', res)
      let b = JSON.parse(JSON.stringify(i)) // 点击的 节点
      let arr = []
      res.forEach((item) => {
        arr.push(item)
      })

      let outlistone = []

      arr.map((m) => {
        outlistone.push(m.deptStandardCode)
      })
      if (outlistone.includes(b.deptStandardCode)) {
        // console.log("数组中有2");
        this.rightlist.push(b) // 符合条件 添加到展示框
      } else {
        // console.log("数组中无2");
        // this.rightlist.splice(b)
        this.rightlist.map((item, idx) => {
          if (item.deptStandardCode === b.deptStandardCode) {
            this.rightlist.splice(idx, 1)
          }
        })
      }
    },
    // 树状图事件
    filterNode(value, data) {
      console.info('树状图', value)
      console.info('树状图', data)
      if (!value) return true
      return data.text.indexOf(value) !== -1
    }
  }

}
</script>

<style lang="less" scoped>
    .Etree {

    }
</style>
