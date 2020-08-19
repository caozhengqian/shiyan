<template>
    <div style="margin-left: 40px">
        <p>
            Grandson
            <span>{{foo}}</span>
            <span @click="spot2">传给爷组件</span>
        </p>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        inject: ['foo'],
        components: {
            //       All,
        },
        name: 'Grandson',
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
            // console.info("孙组建=>",this.$attrs)
        },
        methods: {
            spot2() {
                this.$emit("spot11", '孙组件传给爷组件。')
            },
        }

    }
</script>

<style lang="less" scoped>

</style>
