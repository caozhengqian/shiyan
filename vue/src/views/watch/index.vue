<template>
    <div>
        <p>watch : "{{ message }}"</p>
        <p>Computed 颠倒: "{{ reversedMessage }}"</p>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <p>Computed Input 颠倒: "{{ reversedInput }}"</p>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <el-input v-model="firstName" placeholder="姓"></el-input>
        <el-input v-model="lastName" placeholder="名"></el-input>
        <p>姓名: "{{ fullName }}"</p>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <el-input v-model="setFullName" placeholder="姓名"></el-input>
        <el-button @click="_setFullname(setFullName)">setFullName</el-button>
        <p>姓: "{{ firstName }}"</p>
        <p>名: "{{ lastName }}"</p>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <p>被watch改变
            <span style="color:red">{{watchValue}}</span>
            <button  @click="_watch">改变watchValue</button>
        </p>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'Watch',
        props: {
            //  msg: String
        },
        watch: {
            input : function(newvalue, oldvalue) {
                console.info("old-input=",oldvalue)
                console.info("new-input=",newvalue)
            },
            firstName : function(newvalue, oldvalue) {
                console.info("old-firstName=",oldvalue)
                console.info("new-firstName=",newvalue)
            },
            lastName : function(newvalue, oldvalue) {
                console.info("old-lastName=",oldvalue)
                console.info("new-lastName=",newvalue)
            },
            clickWatch : function(newvalue, oldvalue) {
                console.info("old-clickWatch=",oldvalue)
                console.info("new-clickWatch=",newvalue)
                if(newvalue){
                    this.watchValue = "改变为true"
                }else{
                    this.watchValue = "又改变为false"
                }
            },

        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            },
            reversedInput: function () {
                return this.input.split('').reverse().join('')
            },
            fullName:{
                get: function () {
                    return this.firstName + ' ' + this.lastName
                },
                set:function (newValue) {
                    var names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[1];
                },
            },
        },
        data() {
            return {
                message:'hello',
                input:"",
                firstName:"",
                lastName:"",
                setFullName:"",
                watchValue:"默认值",
                clickWatch:true,
            }
        },

        created() {

        },
        methods: {
            _setFullname(xx) {
                console.info(xx)
                this.fullName=this.setFullName;
            },
            _watch(){
                this.clickWatch = !this.clickWatch;
            },
        }

    }
</script>

<style lang="less" scoped>

</style>
