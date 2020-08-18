import Vue from 'vue'
import App from './App.vue';
import { Button, Select } from 'element-ui';
import router from './router'

Vue.config.productionTip = false;
Vue.use(Button)
Vue.use(Select)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
