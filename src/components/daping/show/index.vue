<template>
  <div class="showbox">
    <draggable class="small-box" chosenClass="chosen" forceFallback="true" group="small" animation="1000">
    <Shishi></Shishi>
    <Kongzhi></Kongzhi>
    <Shangqing></Shangqing>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Shishi from './Shishi'
import Kongzhi from './Kongzhi'
import Shangqing from './Shangqing'
export default {
  components: {
    draggable,
    Shishi,
    Kongzhi,
    Shangqing
  }
}
</script>

<style scoped>
.showbox {
    width: 350px;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.small-box{
  height: 100%;
}
.chosen {
  opacity: 0;
}
</style>