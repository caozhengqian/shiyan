<template>
    <div>
        <p>One</p>
        <p>{{change}}</p>
        <OneOne :changeOne="change"/>
    </div>





</template>

<script>
    //import { mapState } from "vuex";
    import OneOne from "./OneOne";
    export default {
        components: {
            OneOne,
        },
        name: 'One',
        props: {
            change:Boolean,
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {}
        },
        beforeCreate() {
            console.info("======>One-beforeCreate")
        },
        created() {
            console.info("======>One-created")
        },
        beforeMount() {
            console.info("======>One-beforeMount")
        },
        mounted() {
            console.info("======>One-mounted")
        },
        beforeUpdate() {
            console.info("======>One-beforeUpdate")
        },
        updated() {
            console.info("======>One-updated")
        },
        beforeDestroy() {
            console.info("======>One-beforeDestroy")
        },
        destroyed() {
            console.info("======>One-destroyed")
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
