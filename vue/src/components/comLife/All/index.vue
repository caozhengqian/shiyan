<template>
    <div>
        <p  @click="aa()">All
        {{change}}</p>
        <One/>
        <Two/>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    import One from "./One";
    import Two from "./Two";
    export default {
        components: {
            Two,
            One
        },
        name: 'All',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                change:true
            }
        },
        beforeCreate() {
            console.info("=>All-beforeCreate")
        },
        created() {
            console.info("=>All-created")
        },
        beforeMount() {
            console.info("=>All-beforeMount")
        },
        mounted() {
            console.info("=>All-mounted")
        },
        beforeUpdate() {
            console.info("=>All-beforeUpdate")
        },
        updated() {
            console.info("=>All-updated")
        },
        beforeDestroy() {
            console.info("=>All-beforeDestroy")
        },
        destroyed() {
            console.info("=>All-destroyed")
        },
        methods: {
            aa() {
                console.info("zhixingle");
                // let tmp = this.change;
                this.change = "changele ";
                console.info(this.change)
            },
        }

    }
</script>

<style lang="less" scoped>

</style>
