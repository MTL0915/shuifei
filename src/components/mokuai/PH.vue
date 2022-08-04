<template>
  <div class="ph">
    <div class="device-name">PH传感器</div>
    <div class="device-bg">
      <span class="device-data">7.2</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ph {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ph .device-name {
  text-align: center;
}
.ph .device-bg {
  background: url(../../assets/images/shuifeiji/PH传感器.png) no-repeat;
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
