<template>
  <div style="margin-left: 40px">

    <p>
      Father
    </p>

    <Son :father="_father" @father="_father" />
  </div>

</template>

<script>
// import { mapState } from "vuex";
import Son from '../son'
export default {
  provide: {
    // foo:this.foo
  },
  name: 'Father',
  components: {
    Son
  },
  props: {
  },
  data() {
    return {
      numbers: 12,
      child1: '111',
      child2: '222'
    }
  },

  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  methods: {
    _father(data) {
      console.info('_father方法==》', data)
    },
    foo() {
      console.info('foo')
    }
  }

}
</script>

<style lang="less" scoped>
</style>
