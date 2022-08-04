<template>
  <div class="ec">
    <div class="device-name">EC传感器</div>
    <div class="device-bg">
      <span class="device-data">6.5</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ec {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ec .device-name {
  text-align: center;
}
.ec .device-bg {
  background: url(../../assets/images/shuifeiji/EC传感器.png) no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: relative;
}
.device-data{
    position: absolute;
    bottom:10%;
    width: 100%;
    display: inline-block;
    text-align: center;
}
</style>
