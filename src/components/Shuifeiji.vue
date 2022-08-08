<template>
  <div class="shuifeiji">
    <div class="shuifeiji-left">
        <bgLeft></bgLeft>
    </div>
    <div class="shuifeiji-right">
        <bgRight></bgRight>
    </div>
    <shuiliu class="shuiliuComponent"></shuiliu>
  </div>
</template>

<script>
import bgLeft from './mokuai/bgLeft.vue'
import bgRight from './mokuai/bgRight.vue'
import shuiliu from './mokuai/shuiliu.vue'
export default {
    components:{
        bgLeft,
        bgRight,
        shuiliu
    }
}
</script>

<style scoped>
.shuifeiji{
    display: flex;
    width: 1600px;
    height: 800px;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 30px;
    margin:0 auto;
}
.shuifeiji-left{
    width: 75%;
    height: 100%;
}
.shuifeiji-right{
    height: 100%;
    width: 25%;
    /* overflow-x: scroll;
    overflow-y: hidden;
    z-index: 1;
    padding-bottom: 3px; */
}
/* 滚动条
::-webkit-scrollbar{
    width:16px;
    height:3px;
    background-color:rgba(0,0,0,.1);
}
定义滚动条轨道,内阴影+圆角
::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 1px rgba(0,0,0,0.3);
    border-radius:10px;
}
定义滑块,内阴影+圆角
::-webkit-scrollbar-thumb{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.3);
    background-color:#555;
} */
.shuiliuComponent{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
}
</style>