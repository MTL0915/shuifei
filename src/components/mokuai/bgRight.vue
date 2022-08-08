<template>
  <div class="bg-right">
    <penguanfa @getWidth="getWidth"></penguanfa>
  </div>
</template>

<script>
import penguanfa from './penguanfa.vue'
export default {
  components:{
    penguanfa
  },
methods:{
    getWidth(length){
      var bgRight = document.getElementsByClassName('bg-right')[0]
      bgRight.style.width = 100 * length + 'px'
    }
  }
}
</script>

<style>
.bg-right{
    width: 400px;
    height: 800px;
    position: relative;
}
</style>