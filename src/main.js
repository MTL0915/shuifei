import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import { Loading, Message, Dialog, Select, Option } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import store from '../src/store'
import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);


Vue.config.productionTip = false

// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //为了让$bus有Vue原型对象prototype上的$on、$emit、$off等，所以让它等于this，即指向vm
  },
  store
}).$mount('#app')
