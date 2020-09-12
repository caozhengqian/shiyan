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
      <el-col :span="6"><div>height:100%无效</div></el-col>
      <el-col :span="6"><div>height:100%无效</div></el-col>
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

    }
</style>
