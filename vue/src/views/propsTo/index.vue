<template>
    <div>
        <p>父子孙传值</p>
        <Father/>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    import Father from "./father";
    export default {
        components: {
            Father,
        },
        name: 'PropsTo',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                number:12
            }
        },
        created() {

        },
        methods: {
            aa() {
            },
        }

    }
</script>

<style lang="less" scoped>

</style>
