<template>
  <div class="yalichuanganqi">
    <div class="device-name">压力传感器</div>
    <div class="device-bg">
      <span class="device-data">0Mpa</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.yalichuanganqi{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 81px;
    height: 109px;
}
.yalichuanganqi .device-name{
    text-align: center;
}
.yalichuanganqi .device-bg{
    background: url(../../assets/images/shuifeiji/压力传感器.png) no-repeat;
    width: 81px;
    height: 89px;
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