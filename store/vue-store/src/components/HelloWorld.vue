<template>
  <div class="hello">
    <span>得到的state值：</span>
    <span>{{cart.Data}}</span>
    <button @click="changeStore">点我可以改变store的值</button>
  </div>
</template>

<script>
    import { mapState } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    computed: {
        ...mapState(["cart"]),
    },
    created(){

    },
    methods: {
      changeStore(){
          this.$store.dispatch(
              "cart/addData",
              "我被dispatch改变了"
          );
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
