<template>
  <div class="DatePick">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>
          <el-date-picker
            v-model="startTime"
            type="datetime"
            placeholder="开始时间"
            :picker-options="startPickerOptions"
            @change="_start"
          />
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="结束时间"
            :picker-options="endPickerOptions"
            style="width: 100%;"
          />
        </div>
      </el-col>
      <el-col :span="6"><div style="border: 1px solid red;">height:100%无效</div></el-col>
      <el-col :span="6"><div style="border: 1px solid red;">height:100%无效</div></el-col>
        <el-col :span="6">
            <el-date-picker
                    size="small"
                    v-model="startsTime"
                    type="datetimerange"
                    range-separator="-"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    :default-time="['00:00:00','23:59:59']"
            ></el-date-picker>
        </el-col>
        <el-checkbox>ddd</el-checkbox>
    </el-row>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
import moment from 'moment'
export default {
  name: 'DatePick',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      startsTime: '',
      startPickerOptions: { // 起始时间控制
        disabledDate(time) {
          return time.getTime() < moment(new Date()).subtract(1, 'day')
        }
      }
    }
  },
  computed: {
    // ...mapState(["activityData"])
    endPickerOptions: function() {
      const _startTime = this.startTime
      return {
        disabledDate(time) {
          const startTime = _startTime ? moment(_startTime) : moment(new Date()).subtract(1, 'day')
          return time.getTime() > moment(new Date()).add(1, 'year') || time.getTime() < startTime
        }
      }
    }
  },
  created() {

  },
  methods: {
    _start(time) {
      const str = moment(time).format('YYYY/MM/DD HH/mm/ss')
      const add = moment(time).add(2, 'day').format('YYYY/MM/DD HH/mm/ss')
      const sub = moment(time).subtract(2, 'day').format('YYYY/MM/DD HH/mm/ss')
      moment().subtract(7, 'days')
      console.info('原始time=', time)
      console.info('格式化=', str)
      console.info('加2天=', add)
      console.info('减2天=', sub)

      this.startTime = moment(time)
    }
  }

}
</script>

<style lang="less" scoped>
    .DatePick {
        /deep/.el-checkbox__inner{
            border: 1px solid red !important;
        }
    }
</style>
