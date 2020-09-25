<template>
  <div>
      <el-button type="primary" @click="_getProducts">获取产品</el-button>
      <div style="margin-top: 20px">使用循环、<span style="color:red">延迟接口</span>、<span style="color:red">同步处理</span>返回的<span style="color:red">v.obj.a.aa</span>报错</div>
      <div v-for="(v,k) in products" :key="k">
          <span style="color:red">{{k}}</span>
          <span>{{v.title}}</span>
          <span>{{v.obj.a.aa}}</span>
      </div>
      <div style="margin-top: 20px"><span style="color:red">store</span>的值在<span style="color:red">computer</span>中与<span style="color:red">本地this</span>集合</div>
      <div style="color:red">
         {{products0}}
      </div>
      <el-button type="primary" @click="_addTwo">一个action，同步awite调用另一个action</el-button>
      <p>{{twoAdd}}</p>
      <el-button type="primary" @click="_addThree">正常同步顺序调用两一个action</el-button>
      <p>{{threeAdd}}</p>
      <p>-----------------------------------------------------------------------</p>
        <p>VueX大对象对组件的影响</p>
        <p>同样的大对象，要使用object.assign()，不然组件会不更新</p>
        <el-button type="primary" @click="_changeBigObj">修改vuex大对象</el-button>
        <el-button type="primary" @click="_changeSmall">修改小字符串</el-button>
        <One/>
        <Two/>
  </div>

</template>

<script>
import { mapState,mapActions } from "vuex";
import One from "./One";
import Two from "./Two";
export default {
  name: 'VuexTo',
  components: {
      One,
      Two
  },
  props: {
    //  msg: String
  },
  data() {
    return {
        inId:  10
    }
  },
  computed: {
    ...mapState({
        products: store => store.products.products,
        products0(store) {
             return store.products.products.length > 0 && store.products.products[0].id + this.inId;
        },
        twoAdd: store=>store.products.twoAdd,
        threeAdd: store=>store.products.threeAdd,
        bigObj:store=>store.products.bigObj,
        small:store=>store.products.small,

    }),
  },
    async created() {
        await this._getProducts();
        console.info("created=>",this.products[0].obj.a.aa);
  },
  methods: {
      ...mapActions(["getNewProducts","twoAdd1","twoAdd2","twoAdd3","twoAdd6","_bigObj","_small"]),
      async _getProducts() {
          await this.getNewProducts("请求的字符串");
          console.info("click=>",this.products);
    },
      _addTwo(){
          this.twoAdd2();
      },

      //  _addThree(){ //瞬间变成9
      //      this.twoAdd3();
      //      this.twoAdd6();
      // },
      async _addThree(){//先是3，再变9
          await this.twoAdd3();
          await this.twoAdd6();
      },
      _changeBigObj(){
          let bigObj = this.bigObj;
          console.info(bigObj);
          bigObj.b.bbK.bbbK1.bbbbK = "abc";
          this._bigObj(Object.assign({},bigObj))
          // this._bigObj(bigObj)
      },
      _changeSmall(){
          this._small(this.small)
      },
  }

}
</script>

<style lang="less" scoped>

</style>
