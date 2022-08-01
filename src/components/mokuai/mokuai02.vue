<template>
  <div class="bg2">
    <tiaojiefa class="tiaojieComponent"></tiaojiefa>
    <yalichuanganqi class="yaliComponent"></yalichuanganqi>
    <jinshuifa class="jinshuifaComponent"></jinshuifa>
  </div>
</template>

<script>
import tiaojiefa from './tiaojiefa.vue'
import yalichuanganqi from './yalichuanganqi.vue'
import jinshuifa from './jinshuifa.vue'
export default {
  components: { 
    tiaojiefa,
    yalichuanganqi,
    jinshuifa
  }
}
</script>

<style scoped>
.bg2{
    background: url(../../assets/images/shuifeiji/2.png) no-repeat;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
}
.yaliComponent{
  position: absolute;
  left:30%;
  top: -3%;
}
.tiaojieComponent{
  position: absolute;
  left: 40%;
  bottom: -2%;
}
.jinshuifaComponent{
  position: absolute;
  left: 3%;
  top: 50%;
}
</style>