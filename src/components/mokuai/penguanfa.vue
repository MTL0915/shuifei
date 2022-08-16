<template>
    <div class="penguanfa">
        <ul class="pg_valve" v-for="(item,ulIndex) in sixResult" :key="ulIndex">
            <li v-for="(liItem,liIndex) in item" :key="liItem.hd_device_sensor_id">
                <span class="valve_icon" :class="[liItem.value?'btn_on':'btn_off']" @click="btnClick($event,ulIndex,liIndex)" :code="`${100+liItem.channel}`"></span>
                <a>{{liItem.name}}</a>
                <div class="penshui1" :where="`1,2,12,13,${100+liItem.channel}`" or="4,5,6,7,8,9,10,11" :where1="`1,3,${100+liItem.channel}`" style="display: none;"></div>
            </li>
            <div class="shuiliu shuiliu20" where="1,2,12,13" or="4,5,6,7,8,9,10,11" where1="1,3">
                <div class="shuiliuT" style="">
                    <img style="display:block;height:50%;margin: 55px 0" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                    <img style="height:50%;display:block;" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                </div>
            </div>
            <div class="shuiliu shuiliu21" where="1,2,12,13" or="4,5,6,7,8,9,10,11" where1="1,3">
                <div class="shuiliuT" style="">
                    <img style="display:block;height:50%;margin: 55px 0" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                    <img style="height:50%;display:block;" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                </div>
            </div>
            <div class="shuiliu shuiliu22" where="1,2,12,13" or="4,5,6,7,8,9,10,11" where1="1,3">
                <div class="shuiliuT" style="">
                    <img style="display:block;height:50%;margin: 55px 0" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                    <img style="height:50%;display:block;" class="" src="../../assets/images/shuifeiji/shuiliu_t.png">
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 喷灌阀
            penguanArr:[
                {
                    name: 'pg_valve1',
                    num: 1,
                    list:[
                        {
                            number: 1,
                            dikuaiName: '#1地块',
                            dichifaName: '电池阀A',
                            status:1
                        },
                        {
                            number: 2,
                            dikuaiName: '#2地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 3,
                            dikuaiName: '#3地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 4,
                            dikuaiName: '#4地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 5,
                            dikuaiName: '#5地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 6,
                            dikuaiName: '#6地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_valve2',
                    num: 2,
                    list:[
                        {
                            number: 7,
                            dikuaiName: '#7地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 8,
                            dikuaiName: '#8地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 9,
                            dikuaiName: '#9地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 10,
                            dikuaiName: '#10地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 11,
                            dikuaiName: '#11地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 12,
                            dikuaiName: '#12地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_valve3',
                    num: 3,
                    list:[
                        {
                            number: 13,
                            dikuaiName: '#13地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 14,
                            dikuaiName: '#14地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 15,
                            dikuaiName: '#15地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 16,
                            dikuaiName: '#16地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 17,
                            dikuaiName: '#17地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 18,
                            dikuaiName: '#18地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_valve4',
                    num: 4,
                    list:[
                        {
                            number: 19,
                            dikuaiName: '#19地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 20,
                            dikuaiName: '#20地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 21,
                            dikuaiName: '#21地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 22,
                            dikuaiName: '#22地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 23,
                            dikuaiName: '#23地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 24,
                            dikuaiName: '#24地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_valve5',
                    num: 5,
                    list:[
                        {
                            number: 25,
                            dikuaiName: '#25地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 26,
                            dikuaiName: '#26地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 27,
                            dikuaiName: '#27地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 28,
                            dikuaiName: '#28地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 29,
                            dikuaiName: '#29地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 30,
                            dikuaiName: '#30地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                }
            ],
            apiResult:[
                {
                    "hd_device_sensor_id": "ff8080817d37c928017d4c2216ff0295",
                    "name": "灌溉阀1",
                    "device_id": "PK01B-2110014",
                    "channel": 1,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c2217070296",
                    "name": "灌溉阀2",
                    "device_id": "PK01B-2110014",
                    "channel": 2,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c2217100297",
                    "name": "灌溉阀3",
                    "device_id": "PK01B-2110014",
                    "channel": 3,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22171a0298",
                    "name": "灌溉阀4",
                    "device_id": "PK01B-2110014",
                    "channel": 4,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c2217220299",
                    "name": "灌溉阀5",
                    "device_id": "PK01B-2110014",
                    "channel": 5,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22172a029a",
                    "name": "灌溉阀6",
                    "device_id": "PK01B-2110014",
                    "channel": 6,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c221730029b",
                    "name": "灌溉阀7",
                    "device_id": "PK01B-2110014",
                    "channel": 7,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c221737029c",
                    "name": "灌溉阀8",
                    "device_id": "PK01B-2110014",
                    "channel": 8,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22173d029d",
                    "name": "灌溉阀9",
                    "device_id": "PK01B-2110014",
                    "channel": 9,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c221744029e",
                    "name": "灌溉阀10",
                    "device_id": "PK01B-2110014",
                    "channel": 10,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c221755029f",
                    "name": "灌溉阀11",
                    "device_id": "PK01B-2110014",
                    "channel": 11,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22175e02a0",
                    "name": "灌溉阀12",
                    "device_id": "PK01B-2110014",
                    "channel": 12,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22176602a1",
                    "name": "灌溉阀13",
                    "device_id": "PK01B-2110014",
                    "channel": 13,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22176d02a2",
                    "name": "灌溉阀14",
                    "device_id": "PK01B-2110014",
                    "channel": 14,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22177602a3",
                    "name": "灌溉阀15",
                    "device_id": "PK01B-2110014",
                    "channel": 15,
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
                    "hd_device_sensor_id": "ff8080817d37c928017d4c22177e02a4",
                    "name": "灌溉阀16",
                    "device_id": "PK01B-2110014",
                    "channel": 16,
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
            sixResult:[]
        }
    },
    mounted(){
        // 每六个一组
        for(var i=0;i<this.apiResult.length;i+=6){
            this.sixResult.push(this.apiResult.slice(i,i+6));
        }
        console.log(this.sixResult)
        // 子向父传值，告诉父有数组有多少个数据,从而控制宽度
        // this.$emit('getWidth',this.penguanArr.length)
        this.$emit('getWidth',this.sixResult.length)
        
        // 事件总线，调整喷水器
        this.$bus.$on('penguanfaGetOpenKey',(openKey)=>{ // 这里一定要用箭头函数
            console.log(openKey)
            this.tiaozhengpenguanfa(openKey)
        })
    },
    methods:{
		// 控制按钮开关
        btnClick(e,ulIndex,liIndex){
            console.log(e.target)
            var targetBtn = e.currentTarget
            this.doubleControl(targetBtn,ulIndex,liIndex)
        },
        // 具体控制逻辑，为了能双向按钮控制(以后可能要用到)
        doubleControl(targetBtn,ulIndex,liIndex){   
            // 喷灌阀开关的切换    
            if(this.sixResult[ulIndex][liIndex].value == 0){
                this.sixResult[ulIndex][liIndex].value = 1
            }
            else{
                this.sixResult[ulIndex][liIndex].value = 0
            }
            // 用事件总线给水流组件传入对应的按钮值
            var code = targetBtn.getAttribute("code");
            this.$bus.$emit('getCode',code)
        },
        tiaozhengpenguanfa(openKey){
            // 所有的噴水器
            var penshui = document.getElementsByClassName('penshui1')
            var penshuiBox = Array.prototype.slice.apply(penshui);

            for( var i = 0 ; i < penshuiBox.length ; i++ ){
                var penshuiItem = penshuiBox[i];
                var where = penshuiItem.getAttribute("where");
                if( !where ) continue;
                where = where.split(",");
                var or = penshuiItem.getAttribute("or");
                if( or ) or = or.split(",");
                var bool = true;
                for( var ii in where ){
                    if( openKey.indexOf(where[ii]) === -1 ){
                        bool = false;
                        break;
                    }
                } 
                if( or && bool ){
                    bool = false;
                    for( var ii in or ){
                        if( openKey.indexOf(or[ii]) !== -1 ){						
                            bool = true;
                            break;
                        }
                    }
                }
                
                var bool1 = true;
                var where1 = penshuiItem.getAttribute("where1");
                if( !where1 ) {
                    bool1=false;
                }else{
                    where1 = where1.split(",");
                    var or1 = penshuiItem.getAttribute("or1");
                    if( or1 ) or1 = or1.split(",");		
                    for( var ii in where1 ){
                        if( openKey.indexOf(where1[ii]) === -1 ){
                            bool1 = false;
                            break;
                        }
                    }
                    if( or1 && bool1 ){
                        bool1 = false;
                        for( var ii in or1 ){
                            if( openKey.indexOf(or1[ii]) !== -1 ){						
                                bool1 = true;
                                break;
                            }
                        }
                    }
                }
                
                if( bool || bool1 ){
                    penshuiItem.style.display = 'block'
                }else{
                    penshuiItem.style.display = 'none'
                }
            }
        }
    }
}
</script>

<style scoped>
.penguanfa{
    width: 100%;
    height: 100%;
}
.pg_valve {
	float: left;
	display: flex;
	flex-direction: column;
	/* justify-content: space-evenly; */
    box-sizing: border-box;
    padding-bottom: 100px;
    padding-top: 60px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100px;
    background-image: url(../../assets/images/shuifeiji/5-a.png);
    position: relative;
}
.pg_valve:last-child{
    background-image: url(../../assets/images/shuifeiji/5-b.png);
}

.pg_valve li {
	/* overflow: hidden; */
	margin: 22px 0;
	height: 60px;
	position: relative;
    padding-left: 27px;
    box-sizing: border-box;
    z-index:1;
}

/* .pg_valve1 li {
	overflow: hidden;
	margin-bottom: 15px;
	height: 60px;
	position: relative;
    padding-left: 36%;
    box-sizing: border-box;
} */

.pg_valve li * {
	float: left;
	clear: left;
}

.valve_icon {
	width: 48px;
	height: 30px;
	/* background-image: url(../../assets/images/shuifeiji/电磁阀.png); */
	background-position: center;
	background-repeat: no-repeat;
    cursor: pointer;
}

.btn_on {
	background-image: url(../../assets/images/shuifeiji/电磁阀on.png);
}

.btn_off {
	background-image: url(../../assets/images/shuifeiji/电磁阀off.png);
}

.pg_valve li a {
	margin-left: 12px;
	color: #7a8399;
}

.margin_left {
	/* margin-left: 39px; */
}

/* .pg_valve3 .valve_icon {
	background-image: url(../assets/images/shuifei/05-2valve_off.png);
}

.pg_valve4 .valve_icon {
	background-image: url(../assets/images/shuifei/05-3valve_no.png);
} */
.penshui1 {
	/* left: calc(100% - 9px); */
	left: 72px;
	top: 0;
	width: 19px;
	height: 35px;
	background: url(../../assets/images/shuifeiji/penshui.png);
	/* transform: rotateZ(90deg); */
	background-position: 0px 0px;
	background-repeat: no-repeat;
	animation: penshuiAnimate 1.5s infinite linear;
	position: absolute;
	display: none;
}
@keyframes penshuiAnimate{
	from{ background-position: -32px 0px ; }
	to{ background-position: 0px 0px; }
}

/* 水流 */
.shuiliu {
	position: absolute;
	width:50px;
	height: 13px;
	display: none;
	z-index: 2;
	overflow: hidden;
}
.shuiliu20 {
	left: 15px;
	top: 650px;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliu21 {
	left: 15px;
	top: 400px;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliu22 {
	left: 15px;
	top: 150px;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliuAnimateT {
	animation: slt 0.75s infinite;
}
@keyframes slt{
	from{ transform: translateY(0); }
	to{ transform: translateY(-50%); }
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
    animation: shuiliuT 3s linear infinite;
}

</style>