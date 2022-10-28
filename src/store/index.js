import Vue from "vue";
import Vuex from "vuex";
import shuifei from "./modules/shuifei";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shuifei,
  },
});
