<template>
    <div class='Test'>
        <p>ref的使用</p>
        <input ref="input">
        <div @click="focus">click</div>
        <el-input  ref="elInput"></el-input>
        <div @click="elFocus">click</div>
        <el-form ref="ruleForm">
            <el-form-item>
                <el-input ref="elFormInput"></el-input>
            </el-form-item>
            <div @click="elFormFocus">click</div>
        </el-form>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'Test',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            focus: function () {
                // debugger;
                this.$refs.input.focus()
            },
            elFocus:function () {
                this.$refs.elInput.focus()
            },
            elFormFocus:function () {
                this.$refs.elFormInput.focus()
            },
        }

    }
</script>

<style lang="less" scoped>
    .Test {

    }
</style>
