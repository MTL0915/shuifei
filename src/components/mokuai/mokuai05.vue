<template>
  <div class="bg5">
    <penguanfa @getMessage="getMessage"></penguanfa>
  </div>
</template>

<script>
import penguanfa from './penguanfa.vue'
export default {
  components:{
    penguanfa
  },
  methods:{
    getMessage(length){
      var bg5 = document.getElementsByClassName('bg5')[0]
      bg5.style.width = 100 * length + 'px'
    }
  }
}
</script>

<style>
.bg5{
    /* background: url(../../assets/images/shuifeiji/5.png) no-repeat; */
    /* width: 100%;
    height: 100%;  */
    /* width: 500px; */
    height: 100%;
    display: flex;
}

</style>