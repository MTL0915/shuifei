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
import Vue from "vue";
import MyWebSocket from "@/utils/MyWebSocket";
import { getToken } from "@/utils/auth";

import { getTokenMethod } from "@/api/login";
import { getPK } from "@/api/getPK";
import { getPC } from "@/api/getPC";

import bgLeft from "./mokuai/bgLeft.vue";
import bgRight from "./mokuai/bgRight.vue";
export default {
  data() {
    return {
      PKArr: [],
      PCArr: [],
    };
  },
  components: {
    bgLeft,
    bgRight,
  },
  methods: {
    getWebsocketInfo(data) {
      // 只改变一个按钮的情况
      // if (data.device_id == "PK01B-2110019" && data.channelValue == null) {
      //   console.log("WebSocket" + "上报了");
      //   console.log(data.sensorInfos);
      //   for (var i = 0; i < this.PKArr.length; i++) {
      //     if (this.PKArr[i].channel == data.sensorInfos[0].channel) {
      //       this.PKArr[i].value = data.sensorInfos[0].value;
      //       this.$store.commit("setShebeiData", this.PKArr);
      //       this.$store.commit("initCode", this.PKArr);
      //     }
      //   }
      // }
      if (data.device_id == "PK01B-2110019" && data.channelValue != null) {
        this.PKArr = data.sensorInfos;
        this.$store.commit("setShebeiData", data.sensorInfos);
        this.$store.commit("initCode", data.sensorInfos);
        // console.log(data.sensorInfos);
      }
      if (data.device_id == "PC01B-2110019") {
        this.PCArr = data.sensorInfos;
        this.$store.commit("setChuanganqiData", data.sensorInfos);
        // console.log(data.sensorInfos);
      }
    },
  },
  created() {
    // axios获取token
    const data = {
      expires_in: 0,
      password: "Matianle0915",
      username: "18923236683",
    };
    getTokenMethod(data).then((res) => {
      console.log(res);
    });
    // axios获取设备
    const PKid = {
      // device_id: "PK01B-2110014",
      device_id: "PK01B-2110019",
    };
    getPK(PKid).then((res) => {
      this.$store.commit("setShebeiData", res.data.sensor);
      this.$store.commit("initCode", res.data.sensor);
      console.log(res);
      // console.log(this.$store.state.pkpc.pkArr);
      this.PKArr = res.data.sensor;
    });
    // axios获取传感器
    const PCid = {
      // device_id: "PC01B-2110014",
      device_id: "PC01B-2110019",
    };
    getPC(PCid).then((res) => {
      this.$store.commit("setChuanganqiData", res.data.sensor);
      // console.log(this.$store.state.pkpc.pcArr);
      console.log(res);
      this.PCArr = res.data.sensor;
    });

    // websocket相关
    if (Vue.prototype.$ws) {
      return;
    }
    console.log("水肥建立socket连接");
    // let ws = new MyWebSocket(process.env.WEBSOCKET_URL, getToken());
    let ws = new MyWebSocket(
      "iot.joinken.cn/iotcs-websocket/socketServer",
      getToken()
    );
    Vue.prototype.$ws = ws;
    if (!window["GLOBAL_VARIABLE"]) window["GLOBAL_VARIABLE"] = {};
    window["GLOBAL_VARIABLE"]["WEBSOCKET"] = ws;
    this.$ws.open(this);
    // 当浏览器界面关闭或刷新时触发该事件
    window.addEventListener("beforeunload", (e) => {
      this.$ws.close();
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