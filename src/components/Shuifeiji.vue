<template>
  <div class="shuifeiji">
    <div class="shuifeiji-left">
        <bgLeft></bgLeft>
    </div>
    <div class="shuifeiji-right">
        <bgRight></bgRight>
    </div>
  </div>
</template>

<script>
import bgLeft from './mokuai/bgLeft.vue'
import bgRight from './mokuai/bgRight.vue'
export default {
    components:{
        bgLeft,
        bgRight
    }
}
</script>

<style scoped>
.shuifeiji{
    display: flex;
    width: 1800px;
    height: 950px;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 30px;
}
.shuifeiji-left{
    /* width: 75%;
    height: 100%; */
    padding-top:150px;
    padding-left:200px;
}
.shuifeiji-right{
    /* height: 100%;
    width: 25%; */
    padding-top:150px;
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

</style>