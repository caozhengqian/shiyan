<template>
  <div class="ListTo">
    <p>循环<span class="red">数组</span></p>
    <p>this.arr.<span class="red">push</span>("b")//直接渲染</p>
    <p>this.arr.<span class="red">reverse</span>();//直接渲染</p>
    <p v-for="(v,k) in arr" :key="k">
      {{ k }}=={{ v }}
    </p>
    <el-button @click="_click" />
    <p>---------------------------------------------------------------------</p>
    <p>循环<span class="red">数组</span>过滤渲染</p>
    <p>使用<span class="red">computed过滤</span>数组</p>
    <p><span class="red">同一层级</span>用：key会和上面的数组<span class="red">key重复</span>，控制台报错，加一层div</p>
    <div>
      <p v-for="(v,k) in evenNumbers" :key="k">
        {{ k }}=={{ v }}
      </p>
    </div>
    <p>---------------------------------------------------------------------</p>
    <p>循环<span class="red">数组</span>过滤渲染</p>
    <p>使用<span class="red">事件过滤</span>数组</p>
    <p><span class="red">同一层级</span>用：key会和上面的数组<span class="red">key重复</span>，控制台报错，加一层div</p>
    <div>
      <p v-for="(v,k) in even(filArr)" :key="k">
        {{ k }}=={{ v }}
      </p>
    </div>
    <p>---------------------------------------------------------------------</p>
    <p>循环<span class="red">对象</span></p>
    <p>v-for="(v,k,<span class="red">i</span>) in obj"</p>
    <p><span class="red">数组</span>是<span class="red">拿不到i</span>的值，为undefined</p>
    <p v-for="(v,k,i) in obj" :key="k">
      {{ i }}=={{ k }}=={{ v }}
    </p>

  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'ListTo',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      arr: ['arraaa', 'arrbbb', 'vccc'],
      obj: { objA: 'objaaa', objB: 'objbbb', objcC: 'objccc' },
      filArr: [0, 1, 2, 3, 4]
    }
  },
  computed: {
    // ...mapState(["activityData"])
    evenNumbers: function() {
      return this.filArr.filter(function(fil) {
        return fil % 2 === 0
      })
    }
  },
  created() {

  },
  methods: {
    _click() {
      this.arr.push('b')// 直接渲染
      this.arr.reverse()// 直接渲染
    },
    even(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }

}
</script>

<style lang="less" scoped>
    .ListTo {
        .red{
            color:red
        }
    }
</style>
