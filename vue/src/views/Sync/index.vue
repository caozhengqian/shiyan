<template>
    <div class='Sync'>
        <div>
            <input type="button"
                   value="我是父组件中的按钮"
                   @click="show">
            <child :isShowss.sync="isShow" v-show="isShow"/>
        </div>
    </div>

</template>

<script>
// import { mapState } from "vuex";
import child from './child'
export default {
  components: {
    child
  },
  name: 'Sync',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      isShow: false
    }
  },
  created() {

  },
  methods: {
    show() {
      this.isShow = true
    }
  }

}
</script>

<style lang="less" scoped>
    .Sync {

    }
</style>
