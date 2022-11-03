<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
  data() {
    return {};
  },
};
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 12px;
  min-width: 1900px;
}
/*重置*/
body,
ul,
p,
br {
  margin: 0px;
  padding: 0px;
}

img {
  display: block;
}

li {
  list-style: none;
}

* {
  font-family: "微软雅黑";
  font-size: 12px;
}
#app {
  height: 100%;
}


@media screen and (max-width: 1400px) {
  /* 弊端：不居中 */
  /* html {
    transform: scale(0.8);
  } */

  /* 弊端：火狐浏览器不支持 */
  /* html {
    zoom: 0.8;
  } */
}
</style>