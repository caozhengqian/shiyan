<template>
  <div>
        <el-button type="primary" @click="_getProducts">获取产品</el-button>
      <div v-for="(v,k) in products" :key="k">
          <p>{{v.title}}</p>
          <p>{{v.obj.a.aa}}</p>
      </div>
  </div>

</template>

<script>
import { mapState,mapActions } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'VuexTo',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
        products: store => store.products.products,
    }),
  },
    async created() {
        await this._getProducts();
        console.info("created=>",this.products[0].obj.a.aa);
  },
  methods: {
      ...mapActions(["getNewProducts"]),
      async _getProducts() {
          await this.getNewProducts("请求的字符串");
          console.info("click=>",this.products);
    }
  }

}
</script>

<style lang="less" scoped>

</style>
