<template>
    <!--施肥桶-->
    <div class="pot_cont">
        <!--循环遍历每一个桶-->
        <div class="pot_box" v-for="item in pots" :key="item.tag" :class="`pot_box${item.num}`">
            <a><span>{{item.tag}}&nbsp;-&nbsp;</span><span class="boxL">{{item.volume}}L</span></a>
            <div class="pot_water" :class="`pot_water_${item.EnglishNum}`">
                <ul class="water_bg">
                    <li class="water_top" :class="`water_top${item.num}`"></li>
                    <li class="water_bottom"></li>
                </ul>
                <div class="water_scale"></div>
            </div>
            <i @click="btnClick($event)" class="btn_s btn_off" :class="`switch_${item.num}`" fn="shuixiang2" :code="`${item.code}`" :shuiliu="`${item.shuiliu}`"></i>
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
                    shuiliu: 8
                },
                {
                    tag: 'B',
                    num: '2',
                    EnglishNum: 'two',
                    volume: 300,
                    code: 5,
                    shuiliu: 9
                },
                {
                    tag: 'C',
                    num: '3',
                    EnglishNum: 'three',
                    volume: 300,
                    code: 6,
                    shuiliu: 10
                },
                {
                    tag: 'D',
                    num: '4',
                    EnglishNum: 'four',
                    volume: 300,
                    code: 7,
                    shuiliu: 11
                },
                {
                    tag: 'E',
                    num: '5',
                    EnglishNum: 'five',
                    volume: 300,
                    code: 8,
                    shuiliu: 12
                },
                {
                    tag: 'F',
                    num: '6',
                    EnglishNum: 'six',
                    volume: 300,
                    code: 9,
                    shuiliu: 13
                },
                {
                    tag: 'G',
                    num: '7',
                    EnglishNum: 'seven',
                    volume: 300,
                    code: 10,
                    shuiliu: 14
                },
                {
                    tag: 'H',
                    num: '8',
                    EnglishNum: 'eight',
                    volume: 300,
                    code: 11,
                    shuiliu: 15
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
        // 具体控制逻辑，为了能双向按钮控制
        doubleControl(targetBtn){
            // 用事件总线把对应按钮的数字传到控制面板组件
            var code = targetBtn.getAttribute("code");
            // this.$bus.$emit('code',code)
            if(targetBtn.getAttribute("class").includes("btn_off")){
                targetBtn.classList.add("btn_on")
                targetBtn.classList.remove("btn_off")
            }
            else{
                targetBtn.classList.add("btn_off")
                targetBtn.classList.remove("btn_on")
            }
            // 调整水流，包括水流动画与喷水器动画
            // this.tiaozhengshuiliu()
        },
	}
}
</script>

<style>
/*施肥桶样式*/
.pot_cont {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100%;
	width:100%;
}

.pot_box {
	position: absolute;
	left: 0;
	top: 0px;
	width: 14.5%;
	height: 90.5%;
	background-image: url(../../assets/images/shuifeiji/pot.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

/*施肥桶顶部文字描述+容量*/
.pot_box a {
	position: relative;
	left: 8px;
	top: 20px;
	color: #e5596b;
	font-weight: bold;
}

.pot_box a span {
	color: #2d94e3;
	font-size: 13px;
}

/*施肥桶填充水*/
/* .pot_water {
	width: 62px;
	height: 93px;
	position: relative;
	left: 9px;
	top: 8px;
	overflow: hidden
} */

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
.pot_box1 {
    background-image: url(../../assets/images/shuifeiji/pot1.png);
    height: 83.5%;
}

.water_top1 {
	height: 65px;
}

.pot_box2 {
	left: 11%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top2 {
	height: 65px;
}

.pot_box3 {
	left: 22%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top3 {
	height: 65px;
}

.pot_box4 {
	left: 33%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top4 {
	height: 65px;
}

.pot_box5 {
	left: 44%;
	/* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top5 {
	height: 65px;
}

.pot_box6 {
    left: 55%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top6 {
	height: 65px;
}

.pot_box7 {
    left: 66%;
    /* background-image: url(../../assets/images/shuifeiji/pot.png);
	height: 60.5%; */
}

.water_top7 {
	height: 65px;
}

.pot_box8 {
    left: 77%;
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
	right: 31%;
	bottom: 5%;
	position: absolute;
}

.switch_2 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_3 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_4 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_5 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_6 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_7 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

.switch_8 {
	right: 31%;
	bottom: 12%;
	position: absolute;
}

/* 响应式媒体查询 */
@media screen and (min-width: 1800px) {
	.pot_water {
		width: 62%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	
	.pot_water.pot_water_one {
		height: 28.5%;
	}
	
	.pot_box a {
		top : 8px;
		left: 16px;
	}
	
}

@media (min-width: 1467px) and (max-width: 1799px) {
	.pot_water {
		width: 62%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	.pot_water.pot_water_one {
		height: 28.5%;
	}
}

@media screen and (max-width: 1466px) {
	.pot_box a {
		top : 20px;
		left: 2px;
	}
	.pot_water {
		width: 62%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	.pot_water.pot_water_one {
		height: 28.5%;
	}

}

@media (min-width: 1399px) and (max-width: 1599px) {

}
</style>