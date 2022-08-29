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
import { getToken } from "@/api/login";
import { getShebei } from "@/api/getShebei";
import { getChuanganqi } from "@/api/getChuanganqi";

import bgLeft from "./mokuai/bgLeft.vue";
import bgRight from "./mokuai/bgRight.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    bgLeft,
    bgRight,
  },
  created() {
    // axios获取token
    const data = {
      expires_in: 0,
      password: "Matianle0915",
      username: "18923236683",
    };
    getToken(data).then((res) => {
      console.log(res);
    });
    // axios获取设备
    const shebei = {
      // device_id: "PK01B-2110014",
      device_id: "PK01B-2110019",
    };
    getShebei(shebei).then((res) => {
      this.$store.commit("setShebeiData", res.data.sensor);
      this.$store.commit("initCode", res.data.sensor);
      console.log(res);
      console.log(this.$store.state.pkpc.pkArr);
      this.shebeiArr = res.data.sensor;
    });
    // axios获取传感器
    const chuanganqi = {
      // device_id: "PC01B-2110014",
      device_id: "PC01B-2110019",
    };
    getChuanganqi(chuanganqi).then((res) => {
      this.$store.commit("setChuanganqiData", res.data.sensor);
      // console.log(this.$store.state.pkpc.pcArr);
      console.log(res);
      this.chuanganqiArr = res.data.sensor;
    });
  },
};
</script>

<style scoped>
.shuifeiji {
  display: flex;
  width: 1800px;
  height: 950px;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 50px;
}
.shuifeiji-left {
  /* width: 75%;
    height: 100%; */
  padding-top: 170px;
  padding-left: 200px;
}
.shuifeiji-right {
  /* height: 100%;
    width: 25%; */
  padding-top: 170px;
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