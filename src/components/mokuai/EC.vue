<template>
  <div class="ec">
    <div class="device-name">EC传感器</div>
    <div class="device-bg"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ec {
  display: flex;
  width: 110px;
  justify-content: space-between;
}
.ec .device-name {
  writing-mode: tb-rl;
  text-align: center;
}
.ec .device-bg {
  background: url(../../assets/images/shuifeiji/EC传感器.png) no-repeat;
  width: 89px;
  height: 61px;
  background-size: 100% 100%;
}
</style>
