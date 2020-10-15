<template>
    <div class='Etable'>
        <p>基本</p>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    import {getTableData} from "../../../../api/table/table";
    export default {
        components: {
            //       All,
        },
        name: 'Etable',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                tableData:null//请求返回的结果
            }
        },
        created() {
            getTableData("请求").then((res)=>{
                this.tableData = res.data
            });
        },
        
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    .Etable {

    }
</style>
