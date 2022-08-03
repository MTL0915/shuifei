<template>
  <div class="jinshuifa"> 
    <div class="device-bg">
      <i @click="btnClick($event)" code="2" shuiliu="4,5,6,7" class="btn_s btn_off"></i>
    </div>
    <div class="device-name">进水阀</div>
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
};
</script>

<style scoped>
.jinshuifa {
  display: flex;
  /* width: 110px; */
  justify-content: space-between;
}
.jinshuifa .device-name {
  writing-mode: tb-rl;
  text-align: center;
}
.jinshuifa .device-bg {
  background: url(../../assets/images/shuifeiji/进水阀.png) no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.btn_s {
	width: 25px;
	height: 25px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
  position: absolute;
  bottom: 30%;
  left: 7%;
}
.btn_on {
	background-image: url(../../assets/images/shuifeiji/on.png);
}
.btn_off {
	background-image: url(../../assets/images/shuifeiji/off.png);
}
</style>
