<template>
    <div class='Three'>
        <p>Three</p>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'Three',
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
            console.info("------------Three--Created")
        },
        mounted(){
            console.info("------------Three--mounted")
        },
        beforeCreate(){
            console.info("------------Three--beforeCreate")
        },
        beforeMount(){
            console.info("------------Three--beforeMount")
        },
        beforeUpdate(){
            console.info("------------Three--beforeUpdate")
        },
        updated(){
            console.info("------------Three--updated")
        },
        beforeDestroy(){
            console.info("------------Three--beforeDestroy")
        },
        destroyed(){
            console.info("------------Three--destroyed")
        },
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    .Three {

    }
</style>
