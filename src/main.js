import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import store from '../src/store'
import * as echarts from "echarts";
import router from "../src/router/routers";

import {
  Loading,
  Message,
  Dialog,
  Select,
  Option,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Button,
  ButtonGroup,
  Row,
  Input,
  InputNumber,
  Form,
  FormItem,
  DatePicker,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Row);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(Loading.directive);

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //为了让$bus有Vue原型对象prototype上的$on、$emit、$off等，所以让它等于this，即指向vm
  },
  router,
  store
}).$mount('#app')
