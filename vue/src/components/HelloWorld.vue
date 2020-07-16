<template>
  <All/>
</template>

<script>
// import { mapState } from "vuex";
import All from "./comLife/All";
export default {
    components: {
        All,
    },
    name: 'HelloWorld',
    props: {
      msg: String
    },
    computed: {
        // ...mapState(["activityData"])
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        aa(){},
    }

}
</script>

<style scoped>

</style>
