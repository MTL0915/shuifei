<template>
  <div class="jiayashifeibeng">
    <div class="device-name">加压施肥泵</div>
    <div class="device-bg">
      <i @click="btnClick($event)" code="4" shuiliu="8" class="btn_s btn_off"></i>
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
        // 具体控制逻辑，为了能双向按钮控制
        doubleControl(targetBtn){
            // 用事件总线把对应按钮的数字传到控制面板组件
            var code = targetBtn.getAttribute("code");
            // this.$bus.$emit('code',code)
            if(targetBtn.getAttribute("class").includes("btn_off")){
                targetBtn.classList.add("btn_on")
                targetBtn.classList.remove("btn_off")
            }
            else{
                targetBtn.classList.add("btn_off")
                targetBtn.classList.remove("btn_on")
            }
            // 调整水流，包括水流动画与喷水器动画
            // this.tiaozhengshuiliu()
        },
	}
}
</script>

<style scoped>
.jiayashifeibeng{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 102px;
  height: 110px;
}
.jiayashifeibeng .device-name{
  text-align: center;
}
.jiayashifeibeng .device-bg{
    background: url(../../assets/images/shuifeiji/加压施肥泵.png) no-repeat;
    width: 102px;
    height: 89px; 
    background-size: 100% 100%;
}
.btn_s {
	width: 25px;
	height: 25px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
  position: absolute;
  bottom: 3%;
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