<template>
    <div class='IfTo'>
        <p style="display: none">IfTo</p>
        <p style="visibility: hidden">IfTo</p>
        <p>display: none 和 visibility: hidden 都存在DOM树中，visibility会占空间。</p>
        <p>---------------------------------------------------------------------------------</p>
        <div v-if="isTure">
            <lable>名称</lable>
            <input/>
        </div>
        <div v-else>
            <lable>姓名</lable>
            <input/>
        </div>
        <div v-if="isTure">
            <lable>密码</lable>
            <input key="a"/>
        </div>
        <div v-else>
            <lable>密钥</lable>
            <input key="b"/>
        </div>
        <el-button @click="_click"> 改变isTure</el-button>
        <p>
            没有使用key，lable和input被<span class="red">高效复用</span>。
        </p>
        <p>
            <span class="red">姓名</span> 改变组件，文本框内部的值也<span class="red">不会删除</span>
        </p>
        <p>
            <span class="red">密码</span> 使用了<span class="red">key</span>属性，文本框内部值会<span class="red">被删除</span>
        </p>
        <p>---------------------------------------------------------------------------------</p>
        <p>
            v-show<span class="red">基于css</span>:频繁切换的用v-show,或者tabs内容较多，一次性加载出来，<span class="red">用v-show切换css</span><br/>
            v-if<span class="red">基于重新渲染</span>:不停的换组件，<span class="red">切换都要重新渲染</span>
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
        name: 'IfTo',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                isTure:true
            }
        },
        created() {

        },
        methods: {
            _click() {
                this.isTure = !this.isTure;
            },
        }

    }
</script>

<style lang="less" scoped>
    .IfTo {
        .red{
            color:red
        }
    }
</style>
