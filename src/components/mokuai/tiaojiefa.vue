<template>
  <div class="tiaojiefa">
    <div class="device-name">调节阀</div>
    <div class="device-bg">
      <i @click="btnClick($event)" code="3" shuiliu="19,20,21,22,23,24,25,26,27,28,29,30,31" class="btn_s btn_off"></i>
    </div>
  </div>
</template>

<script>
export default {
	methods:{
		// 控制按钮开关
    btnClick(e){
        console.log(e.target)
        var targetBtn = e.currentTarget
        this.doubleControl(targetBtn)
    },
    // 具体控制逻辑，为了能双向按钮控制(以后可能要用到)
    doubleControl(targetBtn){
        if(targetBtn.getAttribute("class").includes("btn_off")){
            targetBtn.classList.add("btn_on")
            targetBtn.classList.remove("btn_off")
        }
        else{
            targetBtn.classList.add("btn_off")
            targetBtn.classList.remove("btn_on")
        }
        // 用事件总线给水流组件传入对应的按钮值
        var code = targetBtn.getAttribute("code");
        this.$bus.$emit('getCode',code)
    },
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