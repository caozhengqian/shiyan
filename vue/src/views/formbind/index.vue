<template>
  <div class="Formbind">
    <input v-model="message" placeholder="edit me">
    <p>input值： {{ message }}</p>
    <p>---------------------------------------------------------------</p>
    <input id="checkbox" v-model="checked" type="checkbox">
    <p>{{ checked }}</p>
    <p>v-model="<span class="red">checked</span>",默认是<span class="red">true</span>/<span class="red">false</span></p>
    <br>
    <p>---------------------------------------------------------------</p>
    <input id="1" v-model="checkedNames" type="checkbox" value="Jack">
    <label for="1">Jacks</label>
    <input id="2" v-model="checkedNames" type="checkbox" value="John">
    <label for="2">Johns</label>
    <input id="3" v-model="checkedNames" type="checkbox" value="Mike">
    <label for="3">Mikes</label>
    <p>多选值：{{ checkedNames }}</p>
    <p><span class="red">id</span>="<span class="blue">1</span>" <span class="red">value</span>="<span class="gray">Jack</span>" <span class="red">v-model</span>="<span class="red">checkedNames</span>"</p>
    <p><span class="red">id</span>="<span class="blue">2</span>" <span class="red">value</span>="<span class="gray">John</span>" <span class="red">v-model</span>="<span class="red">checkedNames</span>"</p>
    <p><span class="red">id</span>="<span class="blue">3</span>" <span class="red">value</span>="<span class="gray">Mike</span>" <span class="red">v-model</span>="<span class="red">checkedNames</span>"</p>
    <p>---------------------------------------------------------------</p>
    <input id="one" v-model="picked" type="radio" value="OneV">
    <label for="one">One</label>
    <br>
    <input id="two" v-model="picked" type="radio" value="TwoV">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <p> <span class="red">id</span>="one" <span class="red">value</span>="<span class="gray">OneV</span>" <span class="red">v-model</span>="picked"</p>
    <p> <span class="red">id</span>="two" <span class="red">value</span>="<span class="gray">TwoV</span>" <span class="red">v-model</span>="picked"</p>
    <p>--------------------------------------------</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option value="Avalue">AV</option>
      <option>BV</option>
      <option>CV</option>
    </select>
    <p>Selected: <span class="red">{{ selected }}</span></p>
    <p> option <span class="red">disabled value=""</span> option</p>
    <p>  option <span class="red">value="Avalue"</span>  <span class="red">AV</span> option</p>
    <p>  option <span class="red">BV</span> option</p>
    <p>  option <span class="red">CV</span>  option</p>
    <p>------------------------------------------</p>
    <input v-model.lazy="msg">
    <p>msg:{{ msg }}:msg</p>
    <p>使用<span class="red">.lazy</span>将绑定的事件放在<span class="red">change(实际是blur)后</span>面执行，而<span class="red">非input改变</span>时</p>
    <input v-model.number="num">
    <input v-model.number="num" type="number">
    <p>msg:{{ num }}</p>
    <p>使用<span class="red">.number</span></p>
    <input v-model.trim="trim">
    <p>msg:{{ trim }}:trim</p>
    <p>使用<span class="red">.trim</span>自动清除<span class="red">首尾</span>空白字符</p>

  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
export default {
  name: 'Formbind',
  components: {
    //       All,
  },
  props: {
    //  msg: String
  },
  data() {
    return {
      message: '', // input值
      checked: '', // 一个多选框
      checkedNames: [], // 多选框
      picked: '', // 单选框
      selected: '', // 选择框
      msg: '', // .lazy使用
      num: '', // .number使用
      trim: ''// .trim使用
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
    .Formbind {
        .red{
            color:red
        }
        .blur{
            color:blue;
        }
        .gray{
            color:darkslategray;
        }
    }
</style>
