<template>
  <div class="bg1">
    <zengyabeng></zengyabeng>
    <guolvqi></guolvqi>
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
</style>