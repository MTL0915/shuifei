export default{
  actions:{

  },
  mutations:{
    setShebeiData(state,pkArr){
      state.pkArr = pkArr
    },
    setChuanganqiData(state,pcArr){
      state.pcArr = pcArr
    }
  },
  state:{
    pkArr:[],
    pcArr:[]
  }
}