<template>
  <div class="tiaojiefa">
    <div class="device-name">调节阀</div>
    <div class="device-bg">
      <i @click="btnClick()" ref="btn" code="3" class="btn_s" :class="[btnStatus?'btn_on':'btn_off']"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btnStatus:''
    }
  },
  mounted(){
    // 获取属性code
    let code = this.$refs.btn.getAttribute("code")
    // 转变成数字
    code = Number(code)
    // 获取目前开关的情况
    const index = this.$store.state.btn.openKey.indexOf(code)
    if (index === -1) {
      this.btnStatus = false
    } else {
      this.btnStatus = true
    }
  },
  computed:{
    // 这里是拿到VueX的全局数据，打开的按钮
    openKey(){
      return this.$store.state.btn.openKey
    }
  },
	methods:{
		// 控制按钮开关
    btnClick(){
      // 获取属性code
      let code = this.$refs.btn.getAttribute("code")
      // 转变成数字
      code = Number(code)
      // 获取目前开关的情况，根据情况切换，并保存到vuex里
      const index = this.$store.state.btn.openKey.indexOf(code)
      if (index === -1) {       
        this.$store.commit('addCode',code)
        this.btnStatus = true
      } else {
        this.$store.commit('delCode',index)
        this.btnStatus = false        
      }
      console.log(this.$store.state.btn.openKey)
      // 事件总线触发流水事件
      this.$bus.$emit('waterEvent')
    }
	}
}
</script>

<style scoped>
.tiaojiefa{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 74px;
  height: 77px;
}
.tiaojiefa .device-name{
  text-align: center;
}
.tiaojiefa .device-bg{
    background: url(../../assets/images/shuifeiji/调节阀.png) no-repeat;
    background-size: 100% 100%;
    width: 74px;
    height: 57px;
    position: relative;
}
.btn_s {
	width: 25px;
	height: 25px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
  position: absolute;
  bottom: 5px;
  left: 50%;
  margin-left: -12.5px;
}

.btn_on {
	background-image: url(../../assets/images/shuifeiji/on.png);
}

.btn_off {
	background-image: url(../../assets/images/shuifeiji/off.png);
}
</style>