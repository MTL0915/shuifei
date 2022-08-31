export default{
  actions:{

  },
  mutations:{
    setShebeiData(state,pkArr){
      state.pkArr = pkArr
      console.log(state.pkArr)
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