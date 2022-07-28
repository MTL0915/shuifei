<template>
  <div class="bg4">
    <PH></PH>
    <pressureFertilization></pressureFertilization>
  </div>
</template>

<script>
import PH from './PH.vue'
import pressureFertilization from './pressureFertilization.vue'
export default {
  components:{
    PH,
    pressureFertilization
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
</style>