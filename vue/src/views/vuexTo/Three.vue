<template>
    <div class='Three'>
        <p>Three</p>
        <p>页面引用，会更新</p>
        <p>script引用，store更新后，页面不会updated</p>
        {{small}}
    </div>

</template>

<script>
    import { mapState } from "vuex";
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
            ...mapState({
                small:store=>store.products.small,
            })
        },
        data() {
            return {}
        },
        created() {
            console.info("------------Three--Created")
            console.info("small------------Three--",this.small)
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
            console.info("small------updated------Three--",this.small)
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
        border: 1px solid blue;
    }
</style>
