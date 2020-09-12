<template>
  <div class="ComBase">
    <Test
      v-for="v in posts"
      :key="v.id"
      :title="v.title"
    />
    <p>可以直接用v进行循环</p>
    <p> v-for="<span class="red">v</span> in posts" </p>
    <p> :key="<span class="red">v</span>.id" </p>
    <p> :title="<span class="red">v</span>.title" </p>
  </div>

</template>

<script>
// import { mapState } from "vuex";
import Test from './test'
export default {
  name: 'ComBase',
  components: {
    Test
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'test1' },
        { id: 2, title: 'test2' },
        { id: 3, title: 'test3' }
      ]
    }
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
    .ComBase {
        .red{
            color:red
        }
    }
</style>
