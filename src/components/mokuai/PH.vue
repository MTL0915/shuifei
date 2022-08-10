<template>
  <div class="ph">
    <div class="device-name">PH传感器</div>
    <div class="device-bg">
      <span class="device-data">{{acceptData.value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acceptData: {
        hd_device_sensor_id: "ff8080817ed201fe017ed74f40f40017",
        name: "出水口pH",
        device_id: "PC01B-2110014",
        channel: 3,
        value: "6.2",
        unit: "",
        system_response_time: "2022-08-09 13:44:31",
        channelType: 5,
        hd_sensor_type_name: "pH值",
        hd_sensor_type_code: "3",
        subgroup_name: null,
        subgroup_code: null,
        category: "水质",
        category_code: "WATER",
        sta: 1,
        hd_sensor_type_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/2cc541b6-8122-4dfa-bc12-3f55df1a453d.png",
        hd_sensor_type_small_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/0736c070-5198-4f0b-806a-2fe8f0f34932.png",
      },
    };
  },
};
</script>

<style scoped>
.ph {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 110px;
}
.ph .device-name {
  text-align: center;
}
.ph .device-bg {
  background: url(../../assets/images/shuifeiji/PH传感器.png) no-repeat;
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
