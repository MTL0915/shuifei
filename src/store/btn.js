export default{
  actions:{

  },
  mutations:{
    // 循环所有设备，获得开启的channel
    initCode(state,pkArr){
      state.openKey = []
      for(var i=0; i<pkArr.length; i++){
        if(pkArr[i].value == 1){
          state.openKey.push(pkArr[i].channel)
        }
      }
    },
    addCode(state,code){
      state.openKey.push(code)
    },
    delCode(state,index){
      state.openKey.splice(index, 1)
    }
  },
  state:{
    openKey:[]
  }
}