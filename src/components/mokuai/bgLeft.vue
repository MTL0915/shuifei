<template>
  <div class="bg-left">
    <feiliaotong class="feiliaotongComponent"></feiliaotong>
    <zengyabeng class="zengyabengComponent"></zengyabeng>
    <guolvqi class="guolvqiComponent"></guolvqi>
    <jinshuifa class="jinshuifaComponent"></jinshuifa>
    <yalichuanganqi class="yalichuanganqiComponent"></yalichuanganqi>
    <tiaojiefa class="tiaojiefaComponent"></tiaojiefa>
    <jiayashifeibeng class="jiayashifeibengComponent"></jiayashifeibeng>
    <feishuihunheqi class="feishuihunheqiComponent"></feishuihunheqi>
    <famen class="famenComponent"></famen>
    <PH class="phComponent"></PH>
    <EC class="ecComponent"></EC>
    <diepianguolvqi class="diepianguolvqiComponent"></diepianguolvqi>
    <shuiliu class="shuiliuComponent"></shuiliu>
  </div>
</template>

<script>
import feiliaotong from './feiliaotong.vue'
import zengyabeng from './zengyabeng.vue'
import guolvqi from './guolvqi.vue'
import jinshuifa from './jinshuifa.vue'
import yalichuanganqi from './yalichuanganqi.vue'
import tiaojiefa from './tiaojiefa.vue'
import jiayashifeibeng from './jiayashifeibeng.vue'
import feishuihunheqi from './feishuihunheqi.vue'
import famen from './famen.vue'
import PH from './PH.vue'
import EC from './EC.vue'
import diepianguolvqi from './diepianguolvqi.vue'
import shuiliu from './shuiliu.vue'
export default {
  components:{
    feiliaotong,
    zengyabeng,
    guolvqi,
    jinshuifa,
    yalichuanganqi,
    tiaojiefa,
    jiayashifeibeng,
    feishuihunheqi,
    famen,
    PH,
    EC,
    diepianguolvqi,
    shuiliu
  }
}
</script>

<style>
.bg-left{
    background: url(../../assets/images/shuifeiji/bg-left.png) no-repeat;
    width: 1200px;
    height: 800px;
    background-size: 100% 100%;
    position: relative;
}
.feiliaotongComponent{
    position: absolute;
	top: -115px;
	left: 0;
}
.zengyabengComponent{
    position: absolute;
	top: 660px;
	left: 23px;
}
.guolvqiComponent{
    position: absolute;
	top: 620px;
	left: 215px;
}
.jinshuifaComponent{
    position: absolute;
    top: 675px;
    left: 389px;
}
.yalichuanganqiComponent{
    position: absolute;
    top: 532px;
    left: 550px;
}
.tiaojiefaComponent{
    position: absolute;
    top: 730px;
    left: 550px;
}
.jiayashifeibengComponent{
    position: absolute;
    top: 260px;
    left: 874px;
}
.feishuihunheqiComponent{
    position: absolute;
    top: 400px;
    left: 864px;
}
.famenComponent{
    position: absolute;
    top: 620px;
    left: 863px;
}
.phComponent{
    position: absolute;
    top: 695px;
    left: 908px;
}
.ecComponent{
    position: absolute;
    top: 695px;
    left: 986px;
}
.diepianguolvqiComponent{
    position: absolute;
    top: 678px;
    left: 1107px;
}
.shuiliuComponent{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
}
</style>