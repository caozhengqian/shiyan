<template>
  <div class="CssStyle">
    <pre
      class="static"
      :class="{ 'active': isActive, 'text-danger': hasError }"
      :title="'abc'"
    >
            1、使用<span class="red">pre</span>   white-space: <span class="red">pre-line</span>

            2、:class="{ 'active': <span class="red">isActive</span> , 'text-danger':<span class="red"> hasError</span>  }"
            data{
               isActive: <span class="red">true</span> ,
                hasError: <span class="red">false</span>
            }
            结果是：<span class="red"> active</span>
            对象后面跟的是True/false、数组跟的是值。
            3、写字符串:title=<span class="red">"'abc'"</span>
        </pre>
    <p>-------------------------------------------------------------</p>
    <div :class="classObject">
      class绑定一个对象
      <p>\\div :class="classObject"\\</p>
      <p>classObject: {</p>
      <p class="l20">active: true,</p>
      <p class="l20">'text-danger': false</p>
      <p>}</p>
    </div>
    <p>-------------------------------------------------------------</p>
    <div :class="classObject1">
      computed绑定classObject1
    </div>
    <p>-------------------------------------------------------------</p>
    <div :class="[activeClass, errorClass]">
      数组语法使用
    </div>
    <p>-------------------------------------------------------------</p>
    <div :class="[isTrue ?activeClass:'none', errorClass]">
      数组语法用三元
      <p>div :class="[isTrue ?activeClass:'none', errorClass]</p>
    </div>
    <p>-------------------------------------------------------------</p>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' ,float:'right'}">
      绑定内联样式
      <p>:style="{ color: activeColor, fontSize: fontSize + 'px' }"</p>
    </div>
    <p>-------------------------------------------------------------</p>
    <div :style="[colorStyles, fontStyles]">
      绑定内联+数组语法
      <p>:style="[colorStyles, fontStyles]"</p>
      <p class="l20">colorStyles:{color:'blue'},</p>
      <p class="l20"> fontStyles:{fontSize:'20px'},</p>
    </div>
    <p>-------------------------------------------------------------</p>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
      <p>多重值，会自动适配浏览器 比如flex</p>
    </div>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'CssStyle',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      // 对象语法使用
      isActive: true,
      hasError: 'abc',
      error: false,
      classObject: {
        active: true,
        'text-danger': false
      },
      // 数组语法使用
      isTrue: false,
      activeClass: 'acName',
      errorClass: 'errName',
      // 内联样式使用
      activeColor: 'red',
      fontSize: 20,
      colorStyles: { color: 'blue' },
      fontStyles: { fontSize: '20px' }

    }
  },
  computed: {
    // ...mapState(["activityData"])
    classObject1: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error
      }
    }
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
    .CssStyle {
        display: block;
        .static{
            font-size: 18px;
            white-space: pre-line; /*pre 保留空白+不换行，nowrap 不换行、pre-wrap 空白+换行、pre-line去掉空白换行*/
        }
        .red{
            color:red;
        }
        .l20{
            padding-left: 20px;
        }
    }
</style>
