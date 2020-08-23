<template>
    <div class="layoutTo">
        <el-row>
            <el-col :span="24"><div class="min dark">span24</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="min dark">span12</div></el-col>
            <el-col :span="12"><div class="min1 dark">span12</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="min dark" style="width:100%;height:100px">width：100%正常显示</div></el-col>
            <el-col :span="6"><div class="min1 dark" style="width:500px;height:100px">width:500px</div></el-col>
            <el-col :span="6"><div class="min dark" style="height:100%">height:100%无效</div></el-col>
            <el-col :span="6"><div class="min1 dark">gutter 20</div></el-col>
        </el-row>
        <el-row :gutter="20" type="flex" align="middle">
            <el-col :span="6" :offset="6"><div class="min dark">align="middle"</div></el-col>
            <el-col :span="6" :offset="6"><div class="min1 dark">
                <span style="color:red">导致offset失效</span> padding:0;
                    margin:0;
               </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" align="middle" justify="center">
            <el-col :span="6"><div class="min dark">justify="center"</div></el-col>
            <el-col :span="6"><div class="min dark"></div></el-col>
        </el-row>
        <TestChildRow/>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    import TestChildRow from "./testChildRow";
    export default {
        components: {
            TestChildRow
        },
        name: 'LayoutTo',
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

    .layoutTo{
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        /deep/ .dark {
            background: #99a9bf;
        }
        /deep/  .min{
            min-height: 30px;
            border: 1px solid red;
            border-radius: 5px;
        }
        .min1{
            min-height: 60px;
            border: 1px solid red;
            border-radius: 5px;
        }
    }

</style>
