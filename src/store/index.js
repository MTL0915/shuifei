import Vue from "vue";
import Vuex from "vuex"
import btn from "./btn"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    btn
  }
})