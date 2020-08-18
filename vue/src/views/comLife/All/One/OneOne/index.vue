<template>
    <p>OneOneOneOne</p>
</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        compOneOnents: {
            //       All,
        },
        name: 'OneOneOneOne',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {}
        },
        beforeCreate() {
            console.info("============>OneOne-beforeCreate")
        },
        created() {
            console.info("============>OneOne-created")
        },
        beforeMount() {
            console.info("============>OneOne-beforeMount")
        },
        mounted() {
            console.info("============>OneOne-mounted")
        },
        beforeUpdate() {
            console.info("============>OneOne-beforeUpdate")
        },
        updated() {
            console.info("============>OneOne-updated")
        },
        beforeDestroy() {
            console.info("============>OneOne-beforeDestroy")
        },
        destroyed() {
            console.info("============>OneOne-destroyed")
        },
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    p{
        margin-left: 40px;
    }
</style>
