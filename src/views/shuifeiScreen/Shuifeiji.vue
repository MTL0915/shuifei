<template>
  <div class="shuifeiji-bg">
    <headerNav></headerNav>
    <!-- <div class="shuifeiji-box"> -->
      <draggable class="shuifeiji-box" chosenClass="chosen" forceFallback="true" group="big" animation="1000">
        <div class="shuifeiji">
          <div class="shuifeiji-left">
            <bgLeft></bgLeft>
          </div>
          <div class="shuifeiji-right">
            <bgRight></bgRight>
          </div>
        </div>
        <div class="showList">
          <showList></showList>
        </div>
      </draggable>
    <!-- </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import MyWebSocket from "@/utils/MyWebSocket";
import { getToken } from "@/utils/auth";

import { getTokenMethod } from "@/api/login";
import { getShuifeiData } from "@/api/getShuifeiData";

import draggable from 'vuedraggable'

import bgLeft from "./pipe/bgLeft.vue";
import bgRight from "./pipe/bgRight.vue";
import showList from "./showList";
import headerNav from "./Header.vue"
export default {
  data() {
    return {};
  },
  components: {
    bgLeft,
    bgRight,
    showList,
    headerNav,
    draggable,
  },
  methods: {
    getWebsocketInfo(data) {
      // console.log("WebSocket" + "上报了");
      if (data.device_id == "PK01B-2111020" && data.channelValue != null) {
        this.$store.commit("SET_EQUIPMENT_DATA", {pkArr02:data.sensorInfos});
        this.$store.commit("INIT_CODE", {pkArr02:data.sensorInfos});
        // console.log(data.sensorInfos);
        console.log("2111020装置设备上报");
      }
      if (data.device_id == "PK01B-2110019" && data.channelValue != null) {
        this.$store.commit("SET_EQUIPMENT_DATA", {pkArr01:data.sensorInfos});
        this.$store.commit("INIT_CODE", {pkArr01:data.sensorInfos});
        // console.log(data.sensorInfos);
        console.log("2110019装置设备上报");
      }
      if (data.device_id == "PC01B-2110019") {
        this.$store.commit("SET_SENSOR_DATA", data.sensorInfos);
        // console.log(data.sensorInfos);
        console.log("2110019传感器上报");
      }
    },
  },
  created() {
    console.log(JSON.parse(this.$route.query.row))
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
    // const PKid1 = "PK01B-2110019";
    // const PKid2 = "PK01B-2111020";
    const PKid1 = JSON.parse(this.$route.query.row).firstEquipment;
    const PKid2 = JSON.parse(this.$route.query.row).secondEquipment;
    // axios获取传感器
    // const PCid = "PC01B-2110019";
    const PCid = JSON.parse(this.$route.query.row).sensor;

    Promise.all([getShuifeiData(PKid1), getShuifeiData(PKid2), getShuifeiData(PCid)]).then(([res1,res2,res3]) => {
      this.$store.commit("SET_EQUIPMENT_DATA", {pkArr01:res1.data.sensor, pkArr02:res2.data.sensor});
      this.$store.commit("INIT_CODE", {pkArr01:res1.data.sensor, pkArr02:res2.data.sensor});
      this.$store.commit("SET_SENSOR_DATA", res3.data.sensor);
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

    // 触发回调，获取websocket的数据
    this.$ws.deviceInfoUpload = this.getWebsocketInfo;

  },
};
</script>

<style scoped>
.shuifeiji-bg{
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/shuifeiji/底图.png") no-repeat;
  background-size:cover;
  min-height: 931px;
  color: #fff;
}
.shuifeiji-box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(100% - 98px);
  /* min-height: 1030px; */
  overflow: hidden;
  color: #fff;
}
.shuifeiji {
  display: flex;
  width: 1760px;
  height: 830px;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 180px;
  box-sizing: content-box;
  margin-right: 20px;
}
.shuifeiji-left {
  padding-left: 60px;
}
.shuifeiji-right {

}
/* .shuifeiji {
    zoom: 0.8;
} */
@media screen and (max-height: 1049px) {
  /* 弊端：火狐浏览器不支持 */
  .shuifeiji {
      zoom: 0.8;
  }
}
@media screen and (min-height: 1050px) {
  /* 弊端：火狐浏览器不支持 */
  .shuifeiji {
      zoom: 0.9;
  }
}

.shuifeiji::-webkit-scrollbar {/*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 15px;
}

.shuifeiji::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(16,159,250,0.8);
  background: rgba(255,255,255,0.9);
}

.shuifeiji::-webkit-scrollbar-track { /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.9);
  border-radius: 0;
  background: rgba(0,0,0,0);
}

.showList{
  height: 100%;
}
/* .chosen {
  opacity: 0.4;
} */

.sortable-ghost{
  opacity: 0;
}

</style>