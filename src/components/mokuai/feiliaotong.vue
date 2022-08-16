<template>
    <!--施肥桶-->
    <div class="pot_cont">
		<!--入口背景-->
		<div class="pot_entry"></div>
		<!-- 小水流 -->
		<div class="smallWater-box">
			<div class="smallWater smallWater1" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
        	</div>
			<div class="smallWater smallWater2" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater3" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater4" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater5" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater6" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater7" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater8" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater9" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater10" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater11" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater12" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater13" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater14" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
			<div class="smallWater smallWater15" where="" or="">
				<div class="shuiliu_r">
					<img class="" src="../../assets/images/shuifeiji/smallWater_r.png">
				</div>
			</div>
			<div class="smallWater smallWater16" where="" or="">
				<div class="shuiliuB">
					<img class="" src="../../assets/images/shuifeiji/smallWater_b.png">
				</div>
			</div>
		</div>

        <!--循环遍历每一个桶-->
        <div class="pot_box" v-for="(item,index) in pots" :key="item.tag" :class="`pot_box${item.num}`">
            <a><span>{{item.tag}}&nbsp;-&nbsp;</span><span class="boxL">{{item.volume}}L</span></a>
            <div class="pot_water" :class="`pot_water_${item.EnglishNum}`">
                <ul class="water_bg">
                    <li class="water_top" :class="`water_top${item.num}`"></li>
                    <li class="water_bottom"></li>
                </ul>
                <div class="water_scale"></div>
            </div>
            <i @click="btnClick($event)" class="btn_s btn_off" :class="`switch_${item.num}`" :code="`${item.code}`"></i>
			<!--注水阀按钮-->
			<i @click="zhushuiBtnClick($event,index)" class="zhushuiBtn" :class="[item.zhushuifa.value?'smallBtn_on':'smallBtn_off']" :code="`${item.zhushuifa.channel}`"></i>
			<!--注肥阀按钮-->
			<i @click="zhufeiBtnClick($event,index)" class="zhufeiBtn" :class="[item.zhufeifa.value?'smallBtn_on':'smallBtn_off']" :code="`${item.zhufeifa.channel}`"></i>
			<!--排水阀按钮-->
			<i @click="paishuiBtnClick($event,index)" class="paishuiBtn" :class="[item.paishuifa.value?'smallBtn_on':'smallBtn_off']" :code="`${item.paishuifa.channel}`"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'shuifei',
    data(){
        return{
            // 肥料桶
            pots:[
                {
                    tag: 'A',
                    num: '1',
                    EnglishNum: 'one',
                    volume: 300,
                    code: 4,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶1注水阀",
						"device_id": "PK01B-2110014",
						"channel": 23,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶1注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 18,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶1排水阀",
						"device_id": "PK01B-2110014",
						"channel": 28,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'B',
                    num: '2',
                    EnglishNum: 'two',
                    volume: 300,
                    code: 5,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶2注水阀",
						"device_id": "PK01B-2110014",
						"channel": 24,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶2注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 19,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶2排水阀",
						"device_id": "PK01B-2110014",
						"channel": 29,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'C',
                    num: '3',
                    EnglishNum: 'three',
                    volume: 300,
                    code: 6,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶3注水阀",
						"device_id": "PK01B-2110014",
						"channel": 25,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶3注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 20,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶3排水阀",
						"device_id": "PK01B-2110014",
						"channel": 30,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'D',
                    num: '4',
                    EnglishNum: 'four',
                    volume: 300,
                    code: 7,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶4注水阀",
						"device_id": "PK01B-2110014",
						"channel": 26,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶4注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 21,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶4排水阀",
						"device_id": "PK01B-2110014",
						"channel": 31,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'E',
                    num: '5',
                    EnglishNum: 'five',
                    volume: 300,
                    code: 8,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶5注水阀",
						"device_id": "PK01B-2110014",
						"channel": 27,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶5注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 22,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶5排水阀",
						"device_id": "PK01B-2110014",
						"channel": 32,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'F',
                    num: '6',
                    EnglishNum: 'six',
                    volume: 300,
                    code: 9,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶6注水阀",
						"device_id": "PK01B-2110014",
						"channel": 61,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶6注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 62,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶6排水阀",
						"device_id": "PK01B-2110014",
						"channel": 63,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'G',
                    num: '7',
                    EnglishNum: 'seven',
                    volume: 300,
                    code: 10,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶7注水阀",
						"device_id": "PK01B-2110014",
						"channel":71,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶7注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 72,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶7排水阀",
						"device_id": "PK01B-2110014",
						"channel": 73,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                },
                {
                    tag: 'H',
                    num: '8',
                    EnglishNum: 'eight',
                    volume: 300,
                    code: 11,
                    zhushuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
						"name": "肥桶8注水阀",
						"device_id": "PK01B-2110014",
						"channel": 81,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					zhufeifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
						"name": "肥桶8注肥阀",
						"device_id": "PK01B-2110014",
						"channel": 82,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					},
					paishuifa:{
						"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
						"name": "肥桶8排水阀",
						"device_id": "PK01B-2110014",
						"channel": 83,
						"value": 0.0,
						"unit": "",
						"system_response_time": "2022-08-09 14:18:33",
						"channelType": 1,
						"hd_sensor_type_name": "二挡开关",
						"hd_sensor_type_code": "101",
						"subgroup_name": null,
						"subgroup_code": null,
						"category": "控制阀",
						"category_code": "VALVE",
						"sta": 1,
						"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
						"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
					}
                }
            ],
			// 注水阀
			zhushuifaArr:[
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217b402ab",
					"name": "肥桶1注水阀",
					"device_id": "PK01B-2110014",
					"channel": 23,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217bb02ac",
					"name": "肥桶2注水阀",
					"device_id": "PK01B-2110014",
					"channel": 24,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217c102ad",
					"name": "肥桶3注水阀",
					"device_id": "PK01B-2110014",
					"channel": 25,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217c902ae",
					"name": "肥桶4注水阀",
					"device_id": "PK01B-2110014",
					"channel": 26,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217d102af",
					"name": "肥桶5注水阀",
					"device_id": "PK01B-2110014",
					"channel": 27,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				}
			],
			// 注肥阀
			zhufeifaArr:[
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c22178e02a6",
					"name": "肥桶1注肥阀",
					"device_id": "PK01B-2110014",
					"channel": 18,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c22179702a7",
					"name": "肥桶2注肥阀",
					"device_id": "PK01B-2110014",
					"channel": 19,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c22179f02a8",
					"name": "肥桶3注肥阀",
					"device_id": "PK01B-2110014",
					"channel": 20,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217a702a9",
					"name": "肥桶4注肥阀",
					"device_id": "PK01B-2110014",
					"channel": 21,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217ad02aa",
					"name": "肥桶5注肥阀",
					"device_id": "PK01B-2110014",
					"channel": 22,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				}
			],
			// 排水阀
			paishuifaArr:[
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217d902b0",
					"name": "肥桶1排水阀",
					"device_id": "PK01B-2110014",
					"channel": 28,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217e502b1",
					"name": "肥桶2排水阀",
					"device_id": "PK01B-2110014",
					"channel": 29,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217ed02b2",
					"name": "肥桶3排水阀",
					"device_id": "PK01B-2110014",
					"channel": 30,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217f502b3",
					"name": "肥桶4排水阀",
					"device_id": "PK01B-2110014",
					"channel": 31,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				},
				{
					"hd_device_sensor_id": "ff8080817d37c928017d4c2217fc02b4",
					"name": "肥桶5排水阀",
					"device_id": "PK01B-2110014",
					"channel": 32,
					"value": 0.0,
					"unit": "",
					"system_response_time": "2022-08-09 14:18:33",
					"channelType": 1,
					"hd_sensor_type_name": "二挡开关",
					"hd_sensor_type_code": "101",
					"subgroup_name": null,
					"subgroup_code": null,
					"category": "控制阀",
					"category_code": "VALVE",
					"sta": 1,
					"hd_sensor_type_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/c97df452-f287-49f3-91bd-a7ae3dbe3bd9.png",
					"hd_sensor_type_small_image_path": "https://iot.joinken.cn/picture/iot/upload/sensor/2020-03-21/dd1330c6-f70c-4a52-907e-8a30d82723b9.png"
				}
			]
        }
    },
	methods:{
		// 控制按钮开关
		btnClick(e){
			console.log(e.target)
			var targetBtn = e.currentTarget
			this.doubleControl(targetBtn)
		},
		// 具体控制逻辑，为了能双向按钮控制(以后可能要用到)
		doubleControl(targetBtn){
			if(targetBtn.getAttribute("class").includes("btn_off")){
				targetBtn.classList.add("btn_on")
				targetBtn.classList.remove("btn_off")
			}
			else{
				targetBtn.classList.add("btn_off")
				targetBtn.classList.remove("btn_on")
			}
			// 用事件总线给水流组件传入对应的按钮值
			var code = targetBtn.getAttribute("code");
			this.$bus.$emit('getCode',code)
		},

		// 注水阀小按钮控制开关
		zhushuiBtnClick(e,index){
			console.log(e.target)
			// 小按钮开关的切换    
            if(this.pots[index].zhushuifa.value == 0){
                this.pots[index].zhushuifa.value = 1
            }
            else{
                this.pots[index].zhushuifa.value = 0
            }
		},

		// 注肥阀小按钮控制开关
		zhufeiBtnClick(e,index){
			console.log(e.target)
			// 小按钮开关的切换    
            if(this.pots[index].zhufeifa.value == 0){
                this.pots[index].zhufeifa.value = 1
            }
            else{
                this.pots[index].zhufeifa.value = 0
            }
		},

		// 排水阀小按钮控制开关
		paishuiBtnClick(e,index){
			console.log(e.target)
			// 小按钮开关的切换    
            if(this.pots[index].paishuifa.value == 0){
                this.pots[index].paishuifa.value = 1
            }
            else{
                this.pots[index].paishuifa.value = 0
            }
		}
	}
}
</script>

<style>
/*施肥桶样式*/
.pot_cont {
	z-index: 1;
	width: 822px;
    height: 608px;
	/* position: relative; */
}
.pot_entry{
	width:196px;
	height:363px;
	background-image: url(../../assets/images/shuifeiji/pot_01.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: -196px;
	top: -50px;
}
.pot_box {
	position: absolute;
	left: 0;
	top: 0;
	width: 120px;
	/* height: 100%; */
	height:608px;
	background-image: url(../../assets/images/shuifeiji/pot_09.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.pot_box:last-child{
	background-image: url(../../assets/images/shuifeiji/pot_10.png);
}
.pot_box1 {
    background-image: url(../../assets/images/shuifeiji/pot_08.png);
    /* height: 448px; */
}

/*施肥桶顶部文字描述+容量*/
.pot_box a {
	position: relative;
    left: 14px;
    top: 130px;
	color: #e5596b;
	font-weight: bold;
}

.pot_box a span {
	color: #2d94e3;
	font-size: 13px;
}

/*施肥桶填充水*/
.pot_water {
    width: 69px;
    height: 93px;
    position: relative;
    left: 7px;
    top: 148px;
    overflow: hidden;
}

.water_bg {
	position: absolute;
	bottom: 0px;
	width: 100%;
}

.water_bg li {
	width: 100%;
}

.water_top {
	height: 65px;
	max-height: 66px;
	background-color: #9bcdf2;
}

.water_bottom {
	height: 22px;
	background-image: url(../../assets/images/shuifeiji/waterbg_bottom.png);
	background-repeat: no-repeat;
	background-size: 100%;
}

/*施肥桶刻度*/
.water_scale {
	position: absolute;
	left: 30px;
	bottom: 0px;
	width: 31px;
	height: 93px;
	background-image: url(../../assets/images/shuifeiji/03scale.png);
	background-repeat: no-repeat;
}


.water_top1 {
	height: 65px;
}

.pot_box2 {
	left: 12%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top2 {
	height: 65px;
}

.pot_box3 {
	left: 24%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top3 {
	height: 65px;
}

.pot_box4 {
	left: 36%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top4 {
	height: 65px;
}

.pot_box5 {
	left: 48%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top5 {
	height: 65px;
}

.pot_box6 {
    left: 60%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top6 {
	height: 65px;
}

.pot_box7 {
    left: 72%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top7 {
	height: 65px;
}

.pot_box8 {
    left: 84%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top8 {
	height: 65px;
}

/* 肥料桶控制开关按钮 */
.btn_s {
	width: 25px;
	height: 25px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
}

.btn_on {
	background-image: url(../../assets/images/shuifeiji/on.png);
}

.btn_off {
	background-image: url(../../assets/images/shuifeiji/off.png);
}

.switch_1 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_2 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_3 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_4 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_5 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_6 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_7 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

.switch_8 {
	right: 30%;
	bottom: 11%;
	position: absolute;
}

/* 注水阀 */
.zhushuiBtn{
	top: 33px;
    left: 51px;
	position: absolute;
	width: 10px;
	height: 10px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
}

/* 注肥阀 */
.zhufeiBtn{
	top: 92px;
    left: 21px;
	position: absolute;
	width: 10px;
	height: 10px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
}

/* 排水阀 */
.paishuiBtn{
	top: 274px;
    left: 81px;
	position: absolute;
	width: 10px;
	height: 10px;
	cursor: pointer;
	z-index:1;
	background-size: cover;
}

.smallBtn_on {
	background-image: url(../../assets/images/shuifeiji/small_on.png);
}

.smallBtn_off {
	background-image: url(../../assets/images/shuifeiji/small_off.png);
}

/* 小水流 */
.smallWater-box{
	position: relative;
	z-index: 1;
}
.smallWater{
	position: absolute;
    /* display: none; */
    z-index: 1;
    overflow: hidden;
}
.smallWater1{
	top: 3px;
	left: 0;
	width: 29px;
    height: 9px;
}
.smallWater3{
	top: 3px;
	left: 90px;
	width: 29px;
    height: 9px;
}
.smallWater5{
	top: 3px;
	left: 190px;
	width: 29px;
    height: 9px;
}
.smallWater7{
	top: 3px;
	left: 290px;
	width: 29px;
    height: 9px;
}
.smallWater9{
	top: 3px;
	left: 390px;
	width: 29px;
    height: 9px;
}
.smallWater11{
	top: 3px;
	left: 490px;
	width: 29px;
    height: 9px;
}
.smallWater13{
	top: 3px;
	left: 590px;
	width: 29px;
    height: 9px;
}
.smallWater15{
	top: 3px;
	left: 690px;
	width: 29px;
    height: 9px;
}
.smallWater2{
	top: 82px;
	left: 51px;
	width: 9px;
    height: 29px;
}
.smallWater4{
	top: 82px;
	left: 151px;
	width: 9px;
    height: 29px;
}
.smallWater6{
	top: 82px;
	left: 249px;
	width: 9px;
    height: 29px;
}
.smallWater8{
	top: 82px;
	left: 348px;
	width: 9px;
    height: 29px;
}
.smallWater10{
	top: 82px;
	left: 447px;
	width: 9px;
    height: 29px;
}
.smallWater12{
	top: 82px;
	left: 545px;
	width: 9px;
    height: 29px;
}
.smallWater14{
	top: 82px;
	left: 644px;
	width: 9px;
    height: 29px;
}
.smallWater16{
	top: 82px;
	left: 742px;
	width: 9px;
    height: 29px;
}

/* 小水流动画 */

* {
    -ms-user-select: none;
}

@keyframes shuiliuT {
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-220px);
    }
}

.shuiliuT {
    animation: shuiliuT 1s linear infinite;
}

@keyframes shuiliu_r {
    from {
        transform: translateX(-25px);
    }

    to {
        transform: translateX(25px);
    }
}

.shuiliu_r {
    animation: shuiliu_r 1s linear infinite;
}

@keyframes shuiliu_l {
    from {
        transform: translateX(50px);
    }

    to {
        transform: translateX(-150px);
    }
}

.shuiliu_l {
    animation: shuiliu_l 1s linear infinite;
}

@keyframes shuiliuB {
    from {
        transform: translateY(-25px);
    }

    to {
        transform: translateY(25px);
    }
}

.shuiliuB {
    animation: shuiliuB 1s linear infinite;
}

</style>