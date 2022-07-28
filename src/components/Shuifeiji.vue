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
  </div>
</template>

<script>
import mokuai01 from './mokuai/mokuai01.vue'
import mokuai02 from './mokuai/mokuai02.vue'
import mokuai03 from './mokuai/mokuai03.vue'
import mokuai04 from './mokuai/mokuai04.vue'
import mokuai05 from './mokuai/mokuai05.vue'
export default {
    components:{
        mokuai01,
        mokuai02,
        mokuai03,
        mokuai04,
        mokuai05
    }
}
</script>

<style scoped>
.shuifeiji{
    display: flex;
    width: 100%;
    height: 100%;
}
.shuifeiji-left{
    width: 58.36%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.shuifeiji-middle{
    width: 12.319%;
    height: 100%;
}
.shuifeiji-right{
    flex-grow: 1;
    height: 100%;
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
</style>