<template>
    <div class='One'>
        <el-input v-model="input"></el-input>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'One',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                input:"",
                radio: '1',
                checkList: ['复选框 A']
            }
        },
        created() {

        },
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    .One {

    }
</style>
