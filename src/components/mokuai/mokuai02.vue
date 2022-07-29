<template>
  <div class="bg2">
    <tiaojiefa></tiaojiefa>
    <yalichuanganqi></yalichuanganqi>
  </div>
</template>

<script>
import tiaojiefa from './tiaojiefa.vue'
import yalichuanganqi from './yalichuanganqi.vue'
export default {
  components: { 
    tiaojiefa,
    yalichuanganqi
  }
}
</script>

<style>
.bg2{
    background: url(../../assets/images/shuifeiji/2.png) no-repeat;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
}
</style>