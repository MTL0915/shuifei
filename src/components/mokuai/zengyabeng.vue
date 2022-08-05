<template>
  <div class="zengyabeng"> 
    <div class="device-name">增压泵</div>
    <div class="device-bg">
      <i @click="btnClick($event)" code="1" shuiliu="1,2,3" class="btn_s btn_off"></i>
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
};
</script>

<style scoped>
.zengyabeng {
  display: flex;
  width: 127px;
  height: 83px;
  flex-direction: column;
  justify-content: space-between;
}
.zengyabeng .device-name {
  text-align: center;
}
.zengyabeng .device-bg {
  background: url(../../assets/images/shuifeiji/增压泵.png) no-repeat;
  width: 127px;
  height: 63px;
  background-size: 100% 100%;
  position: relative;
}
.btn_s {
	width: 25px;
	height: 25px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
  position: absolute;
  top: 50%;
  left: 6px;
  margin-top: -12.5px;
}

.btn_on {
	background-image: url(../../assets/images/shuifeiji/on.png);
}

.btn_off {
	background-image: url(../../assets/images/shuifeiji/off.png);
}
</style>
