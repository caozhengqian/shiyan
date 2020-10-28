<template>
    <div class='Keep'>
        <el-tag
                v-for="(tag,k) in tags"
                :key="k"
                closable
                :type="tag.type"
                @close="_close(k)"
                @click="_tag(k)"
                style="cursor: pointer"
        >
            {{tag.name}}
        </el-tag>
        <el-button  size="small" @click="showInput">+ New Tag</el-button>
        <div v-show="isShow == true">
            <One/>
        </div>
        <div v-show="isShow == false">
            <p>原有页面</p>
        </div>
    </div>

</template>

<script>
// import { mapState } from "vuex";
import One from './com/One/One'
export default {
  components: {
    One
  },
  name: 'Keep',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      isShow: false
    }
  },
  created() {

  },
  methods: {
    _close(k) {
      this.tags.splice(k, 1)
      this.isShow = false
    },
    _tag(k) {
      if (this.tags[k].name === '新标签') {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    showInput() {
      this.tags.push({ name: '新标签', type: 'danger' })
    }
  }

}
</script>

<style lang="less" scoped>
    .Keep {

    }
</style>
