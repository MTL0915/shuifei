<template>
  <div class="yalichuanganqi">
    <div class="device-name">压力传感器</div>
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
        hd_device_sensor_id: "ff8080817ed201fe017ed74f40d70015",
        name: "出水口水压",
        device_id: "PC01B-2110014",
        channel: 1,
        value: "0.0",
        unit: "MPa",
        system_response_time: "2022-08-09 11:47:35",
        channelType: 5,
        hd_sensor_type_name: "水压",
        hd_sensor_type_code: "73",
        subgroup_name: null,
        subgroup_code: null,
        category: "水质",
        category_code: "WATER",
        sta: 1,
        hd_sensor_type_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/023515fc-9a6e-44e9-8ce8-6983bcde5a0a.png",
        hd_sensor_type_small_image_path:
          "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/978b7bfd-353b-49e8-a632-cb0cc567e29c.png",
      },
    };
  }
};
</script>

<style>
.yalichuanganqi {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 81px;
  height: 109px;
}
.yalichuanganqi .device-name {
  text-align: center;
}
.yalichuanganqi .device-bg {
  background: url(../../assets/images/shuifeiji/压力传感器.png) no-repeat;
  width: 81px;
  height: 89px;
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
