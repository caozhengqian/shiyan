<template>
    <div class='Etable'>
        <p>-1边框 + 斑马纹</p>
        <el-table
            :data="tableData"
            style="width: 100%"
            border
            stripe="true"
    >
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
        <p>-2定义斑马纹</p>
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
    >
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
            tableRowClassName({row, rowIndex}) {
                debugger;
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }

    }
</script>

<style lang="less" scoped>
    .Etable {
       /deep/ .el-table .warning-row {
            background: oldlace;
        }

        /deep/ .el-table .success-row {
            background: #f0f9eb;
        }
    }
</style>
