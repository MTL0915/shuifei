<template>
  <div class="ec">
    <div class="device-name">EC传感器</div>
    <div class="device-bg">
      <span class="device-data">{{acceptData.value}}{{acceptData.unit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acceptData: {
        hd_device_sensor_id: "ff8080817ed201fe017ed74f40fc0018",
        name: "出水口EC",
        device_id: "PC01B-2110014",
        channel: 4,
        value: "0.5",
        unit: "µS/cm",
        system_response_time: "2022-08-09 14:44:23",
        channelType: 5,
        hd_sensor_type_name: "电导率(uS/cm)",
        hd_sensor_type_code: "5",
        subgroup_name: null,
        subgroup_code: null,
        category: "水质",
        category_code: "WATER",
        sta: 1,
        hd_sensor_type_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/3856d296-0064-4346-be12-04fa5573bdc7.png",
        hd_sensor_type_small_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/3950b9e2-e8df-427a-b3da-e3c514ea7ffe.png",
      },
    };
  },
};
</script>

<style scoped>
.ec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 110px;
}
.ec .device-name {
  text-align: center;
}
.ec .device-bg {
  background: url(../../assets/images/shuifeiji/EC传感器.png) no-repeat;
  width: 70px;
  height: 90px;
  background-size: 100% 100%;
  position: relative;
}
.device-data {
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: inline-block;
  text-align: center;
}
</style>
