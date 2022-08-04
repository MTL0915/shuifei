<template>
  <div class="shuifeiji">
    <div class="shuifeiji-left">
        <div class="shuifeiji-left-top">
            <mokuai03></mokuai03>
        </div>
        <div class="shuifeiji-left-bottom">
            <div class="shuifeiji-left-bottom01">
                <mokuai01></mokuai01>
            </div>
            <div class="shuifeiji-left-bottom02">
                <mokuai02></mokuai02>
            </div>
        </div>
    </div>
    <div class="shuifeiji-middle">
        <mokuai04></mokuai04>
    </div>
    <div class="shuifeiji-right">
        <mokuai05></mokuai05>
    </div>
    <shuiliu class="shuiliuComponent"></shuiliu>
  </div>
</template>

<script>
import mokuai01 from './mokuai/mokuai01.vue'
import mokuai02 from './mokuai/mokuai02.vue'
import mokuai03 from './mokuai/mokuai03.vue'
import mokuai04 from './mokuai/mokuai04.vue'
import mokuai05 from './mokuai/mokuai05.vue'
import shuiliu from './mokuai/shuiliu.vue'
export default {
    components:{
        mokuai01,
        mokuai02,
        mokuai03,
        mokuai04,
        mokuai05,
        shuiliu
    }
}
</script>

<style scoped>
.shuifeiji{
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
}
.shuifeiji-left{
    width: 58.36%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.shuifeiji-middle{
    width: 24.08%;
    height: 100%;
}
.shuifeiji-right{
    flex-grow: 1;
    height: 100%;
    width: 17.56%;
    overflow-x: scroll;
    overflow-y: hidden;
    z-index: 1;
}
/* 滚动条 */
::-webkit-scrollbar{
    width:16px;
    height:5px;
    background-color:rgba(0,0,0,.1);
}
/*定义滚动条轨道

内阴影+圆角*/

::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 1px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#0889b0;
}

/*定义滑块

内阴影+圆角*/

::-webkit-scrollbar-thumb{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.3);
    background-color:#555;
}

.shuifeiji-left-top{
    height: 67.55%;
}
.shuifeiji-left-bottom{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
}
.shuifeiji-left-bottom01{
    width: 44.23%;
}
.shuifeiji-left-bottom02{
    flex-grow: 1;
}
.shuiliuComponent{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
}
</style>