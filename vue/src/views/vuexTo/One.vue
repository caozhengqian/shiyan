<template>
    <div class='One'>
        <p>One</p>
        <p>{{bigObj}}</p>
        <p>{{small}}</p>
    </div>

</template>

<script>
    import {mapState} from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'One',
        props: {
            //  msg: String
        },
        computed: {
            ...mapState({
                bigObj: store => store.products.bigObj,
                small: store => store.products.small,
            })
        },
        data() {
            return {}
        },
        created() {
            console.info("------------One--Created")
        },
        mounted() {
            console.info("------------One--mounted")
        },
        beforeCreate() {
            console.info("------------One--beforeCreate")
        },
        beforeMount() {
            console.info("------------One--beforeMount")
        },
        beforeUpdate() {
            console.info("------------One--beforeUpdate")
        },
        updated() {
            console.info("------------One--updated")
        },
        beforeDestroy() {
            console.info("------------One--beforeDestroy")
        },
        destroyed() {
            console.info("------------One--destroyed")
        },
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>
    .One {
        border: 1px solid blueviolet;
        margin-bottom: 10px;
    }
</style>
