<template>
    <div class='child'>
        <div>
            我是一个子组件，我在红色的海洋里！
            <input type="button" value="点我隐身" @click="upIsShow">
        </div>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'child',
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
            upIsShow(){
                this.$emit("update:isShow",false);
            }
        }

    }
</script>

<style lang="less" scoped>
    .child {

    }
</style>
