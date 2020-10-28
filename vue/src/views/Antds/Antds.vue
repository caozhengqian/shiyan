<template>
    <div class='Antds'>
        <div class="title" @click="_click(-1)">Data</div>
        <a-row >
            <a-col :span="2" class="bottom"><el-tag class="tag"  @click="_click('Table')"  type="danger">Table 表格</el-tag></a-col>
            <a-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Pagination')" type="danger">Pagination 分页</el-tag></a-col>
        </a-row>
        <div class="comptents">
            <ATable v-if="index == 'Table'"/>
            <APagination v-else-if="index == 'Pagination'"/>
            <div v-else></div>
        </div>
    </div>

</template>

<script>
// import { mapState } from "vuex";
import ATable from '../../compents/antd/DataDisplay/ATable/ATable'
import APagination from '../../compents/antd/Navigation/APagination/APagination'
export default {
  components: {
    ATable,
    APagination
  },
  name: 'Antds',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      index: 0
    }
  },
  created() {

  },
  methods: {
    _click(index) {
      this.index = index
    }
  }

}
</script>

<style lang="less" scoped>
    .Antds {
        .title{
            font-size: 20px;
            color:blue;
            padding-bottom: 10px;
            cursor: pointer;
        }
        .bottom{
            padding-bottom: 5px;
        }
        .tag{
            cursor: pointer;
        }
    }
</style>
