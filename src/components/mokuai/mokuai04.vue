<template>
  <div class="bg4">
    <jiayashifeibeng class="jiayaComponent"></jiayashifeibeng>
    <feishuihunheqi class="feishuiComponent"></feishuihunheqi>
    <famen class="famenComponent"></famen>
    <PH class="phComponent"></PH>
    <EC class="ecComponent"></EC>
    <guolvqi3 class="guolviqi3Component"></guolvqi3>
  </div>
</template>

<script>

import jiayashifeibeng from './jiayashifeibeng.vue'
import feishuihunheqi from './feishuihunheqi.vue'
import famen from './famen.vue'
import PH from './PH.vue'
import EC from './EC.vue'
import guolvqi3 from './guolvqi3.vue'
export default {
  components:{
    jiayashifeibeng,
    feishuihunheqi,
    famen,
    PH,
    EC,
    guolvqi3
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

.jiayaComponent{
    position: absolute;
    top: 32%;
    left: 7.5%;
    width: 33%;
    height: 15%;
}
.feishuiComponent{
    position: absolute;
    top: 55%;
    left: 4.4%;
    width: 20%;
    height: 15%;
}
.famenComponent{
    position: absolute;
    top: 80%;
    left: 4%;
    width: 18%;
    height: 8%;
}
.phComponent{
  position: absolute;
  bottom: -0.5%;
  right: 56%;
  width: 20%;
  height: 13%;
}
.ecComponent{
  position: absolute;
  bottom: -0.5%;
  right: 30%;
  width: 20%;
  height: 13%;
}
.guolviqi3Component{
  position: absolute;
  bottom: -1%;
  right: 5%;
  width: 20%;
  height: 7%;
}
</style>