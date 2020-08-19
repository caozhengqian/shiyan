<template>
    <div>
        <p>FormTo</p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>

    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'FormTo',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                input: ''
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

</style>
