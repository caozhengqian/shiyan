<template>
  <div class="Table">
      <el-button @click="_click"></el-button>
      <el-table border style="width: 150%"
      >

          <el-table-column
                  v-for="(v) in tableHeader"
                  :key="v.id"
                  :label="v.label"
                  :prop="v.prop"
                  align="center"
          >
              <el-table-column
                      v-for="(j) in  v.item && v.item"
                      :key="j.id"
                      :prop="j.prop"
                      :label="j.label"
                      align="center"
              >
                  <el-table-column
                          v-for="(m) in j.item"
                          :key="m.id"
                          :prop="m.prop"
                          :label="m.label"
                          align="center"
                  >
                      <el-table-column
                              v-for="(k) in m.item"
                              :key="k.id"
                              :prop="k.prop"
                              :label="k.label"
                              align="center"
                      ></el-table-column>
                  </el-table-column>
              </el-table-column>

          </el-table-column>
      </el-table>
      <el-table
              style="width: 100%">
          <el-table-column
                  prop="date"
                  label="日期"
                  width="150">
          </el-table-column>
          <el-table-column label="配送信息">
              <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
              </el-table-column>
              <el-table-column label="地址">
                  <el-table-column
                          prop="province"
                          label="省份"
                          width="120">
                  </el-table-column>
                  <el-table-column
                          prop="city"
                          label="市区"
                          width="120">
                  </el-table-column>
                  <el-table-column
                          prop="address"
                          label="地址"
                          width="300">
                  </el-table-column>
                  <el-table-column
                          prop="zip"
                          label="邮编"
                          width="120">
                  </el-table-column>
              </el-table-column>
          </el-table-column>
      </el-table>

      <div>
          <TableSelect/>
      </div>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
import TableSelect from './TableSelect'
export default {
  name: 'Table',
  components: {
    TableSelect
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      tableHeader: [{ 'label': '线路票数', 'prop': 'lineVotesNum', 'id': 't101' }, { 'label': '到达省份', 'prop': 'arriveProvince', 'id': 't102' }, { 'label': '到达城市', 'prop': 'arriveCity', 'id': 't103' }, { 'label': '是否包含配送费', 'prop': 'distributionFee', 'id': 't104' }, { 'label': '是否包含安装费', 'prop': 'installFee', 'id': 't105' }, { 'label': '单独报价', 'id': 't106', 'item': [{ 'label': '最低一票(元)', 'prop': 'lowestOneTicket', 'id': 't106_1' }, { 'label': '重货价格(元/KG)', 'prop': 'weightGoodsPrice', 'id': 't106_2' }, { 'label': '轻货价格(元/F)', 'prop': 'lightGoodsPrice', 'id': 't106_3' }] }, { 'label': '票均增值收入（元）', 'prop': 'avgIncrementIncome', 'id': 't107' }, { 'label': '票均重量（KG）', 'prop': 'avgTicketWeight', 'id': 't108' }, { 'label': '票均体积（m3）', 'prop': 'avgTicketVolume', 'id': 't109' }]
    }
  },
  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  methods: {
    _click() {
      this.tableHeader = []
      this.tableHeader = [{ 'label': '线路票数', 'prop': 'lineVotesNum', 'id': 't101' }, { 'label': '到达省份', 'prop': 'arriveProvince', 'id': 't102' }, { 'label': '是否包含配送费', 'prop': 'distributionFee', 'id': 't103' }, { 'label': '是否包含安装费', 'prop': 'installFee', 'id': 't104' }, { 'label': '单独报价', 'id': 't105', 'item': [{ 'label': '最低一票(元)', 'prop': 'lowestOneTicket', 'id': 't105_1' }, { 'label': '重货价格(元/KG)', 'prop': 'weightGoodsPrice', 'id': 't105_2' }, { 'label': '轻货价格(元/F)', 'prop': 'lightGoodsPrice', 'id': 't105_3' }] }, { 'label': '票均增值收入（元）', 'prop': 'avgIncrementIncome', 'id': 't106' }, { 'label': '票均重量（KG）', 'prop': 'avgTicketWeight', 'id': 't107' }, { 'label': '票均体积（m3）', 'prop': 'avgTicketVolume', 'id': 't108' }]
    }
  }

}
</script>

<style lang="less" scoped>
    .Table {

    }
</style>
