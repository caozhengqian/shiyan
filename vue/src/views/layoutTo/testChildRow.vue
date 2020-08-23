<template>
    <div class='TestChildRow'>
        <el-row>
            <el-col :span="24"><div class="min dark">&:last-Child会<span style="color:red">穿透</span>到子组件，class="min dark"样式<span style="color:red">不会穿透</span></div></el-col>
        </el-row>
        <test-child-child-row/>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    import TestChildChildRow from "./testChildChildRow";
    export default {
        components: {
            TestChildChildRow
        },
        name: 'TestChildRow',
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
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    .TestChildRow {
        .dark {
            background: #99a9bf;
        }
        .min{
            min-height: 30px;
            border: 1px solid red;
            border-radius: 5px;
        }
    }
</style>
