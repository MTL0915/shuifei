<template>
  <div class="bg4">
    <PH class="phComponent"></PH>
    <EC class="ecComponent"></EC>
    <jiayashifeibeng class="jiayaComponent"></jiayashifeibeng>
  </div>
</template>

<script>
import PH from './PH.vue'
import EC from './EC.vue'
import jiayashifeibeng from './jiayashifeibeng.vue'
export default {
  components:{
    PH,
    EC,
    jiayashifeibeng
  }
}
</script>

<style>
.bg4{
    background: url(../../assets/images/shuifeiji/4.png) no-repeat;
    width: 100%;
    height: 100%; 
    background-size: 100% 100%;
    position: relative;
}
.phComponent{
  position: absolute;
  top: 60%;
  right: 18%;
}
.ecComponent{
  position: absolute;
  top: 70%;
  right: 18%;
}
.jiayaComponent{
    position: absolute;
    top: 15.5%;
    left: 0;
}
</style>