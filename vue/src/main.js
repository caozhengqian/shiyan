import Vue from 'vue'
import App from './App.vue';
import "./element"
import router from './router'
import validate from './utils/validate'

Vue.config.productionTip = false;
Vue.prototype.$validate = validate;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
