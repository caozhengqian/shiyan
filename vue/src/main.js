import Vue from 'vue'
import App from './App.vue'
import './element'
import router from './router'
import validate from './utils/validate'
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.prototype.$validate = validate
Vue.use(Antd);

new Vue({
  el: '#app',
  router,
    store,
  render: h => h(App)
})
