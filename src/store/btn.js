export default{
  actions:{

  },
  mutations:{
    addCode(state,code){
      state.openKey.push(code)
    },
    delCode(state,index){
      state.openKey.splice(index, 1)
    }
  },
  state:{
    openKey:[1,3,101]
  }
}