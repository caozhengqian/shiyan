<template>
    <div style="margin-left: 40px">
        <p>
            Son
            <span>{{number}}</span>
            <span>{{foo}}</span>
            <span>{{$attrs}}</span>
            <span @click="spot1" >传给父组件</span>
        </p>
        <Grandson  @spot11="spot2"/>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    import Grandson from "../grandson";
    export default {
        inject: ['foo'],
        components: {
              Grandson,
        },
        name: 'Son',
        props: ['number'],

        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {}
        },
        created() {
            console.info(this.$attrs)
        },
        methods: {
            spot1() {
                this.$emit("spot", '子组件传给父组件。')
            },
            spot2(data) {
                this.$emit("spot", data)
            },
        },
        mounted () {
        }

    }
</script>

<style lang="less" scoped>

</style>
