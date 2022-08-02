<template>
  <div class="bg1">
    <div class="bg1-name">清水入口</div>
    <zengyabeng class="zengyabengComponent"></zengyabeng>
    <guolvqi class="guolvqiComponent"></guolvqi>
  </div>
</template>

<script>
import zengyabeng from './zengyabeng.vue'
import guolvqi from './guolvqi.vue'
export default {
  components: { 
    zengyabeng,
    guolvqi
  }
}
</script>

<style>
.bg1{
    background: url(../../assets/images/shuifeiji/1.png) no-repeat;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
}
.bg1-name{
  position: absolute;
  top:-5%;
  left:5%;
  color:yellow;
  font-size: 16px;
}
.zengyabengComponent{
  position: absolute;
  left:7%;
  top: 50%;
}
.guolvqiComponent{
  position: absolute;
  left:55%;
  bottom: 7.5%;
}
</style>