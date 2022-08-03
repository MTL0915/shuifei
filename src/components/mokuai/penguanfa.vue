<template>
    <div class="penguanfa">
        <ul class="pg_valve" :class="item.name" v-for="item in penguanArr" :key="item.name">
            <li v-for="liItem in item.list" :key="liItem.number">
                <span class="valve_icon"></span>
                <a>{{liItem.dikuaiName}}</a>
                <a>{{liItem.dichifaName}}</a>
                <div class="penshui1" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3" style="display: none;"></div>
            </li>
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
                            dichifaName: '电池阀A'
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
            ]
        }
    },
    mounted(){
        let bgArr = []
        let len = this.penguanArr.length
        // 获取背景图标识
        if(len <= 2){
            bgArr = [1,4]
        };
        if(len == 3){
            bgArr = [1,2,5] 
        };
        if(len == 4){
            bgArr = [1,2,3,4] 
        };
        if(len == 5){
            bgArr = [1,2,3,2,5] 
        };
        if(len == 6){
            bgArr = [1,2,3,2,3,4] 
        };
        if(len == 7){
            bgArr = [1,2,3,2,3,2,5] 
        };
        if(len == 8){
            bgArr = [1,2,3,2,3,2,3,4] 
        };
        if(len == 9){
            bgArr = [1,2,3,2,3,2,3,2,5] 
        };
        if(len == 10){
            bgArr = [1,2,3,2,3,2,3,2,3,4] 
        };
        // 每一列宽度
        var listWidth = ''
        if(len <= 3){
            var listWidth = '33.33%'
        }else{
            listWidth = (100/bgArr.length) + '%'
        }
        for(var i=0;i<bgArr.length;i++){
            // 因为上面的标识是从1开始，所以要+1，为了获取到对应得dom
            var n = i+1
            var pgValve = 'pg_valve' + n
            var bgNum = bgArr[i]
            // 动态设置对应dom的背景图，宽度   
            document.getElementsByClassName(pgValve)[0].style.backgroundImage = "url(" + require(`../../assets/images/shuifeiji/5-${bgNum}.png`) + ")"
            document.getElementsByClassName(pgValve)[0].style.width = listWidth
        }
        
        // 事件总线，调整喷水器
        this.$bus.$on('penguanfaGetOpenKey',(openKey)=>{ // 这里一定要用箭头函数
            console.log(openKey)
            this.tiaozhengpenguanfa(openKey)
        })
    },
    methods:{
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
                    // ndcqg(null,true)
                    // phcqg(null,true)
                    // sq(null, true)
                }else{
                    penshuiItem.style.display = 'none'
                    // ndcqg(null,false)
                    // phcqg(null,false)
                    // sq(null, false)
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
/* .pg_valve1{
    background: url(../../assets/images/shuifeiji/5-1.png) no-repeat;
    width: 20%;
    height: 100%; 
    background-size: 100% 100%;
}
.pg_valve2{
    background: url(../../assets/images/shuifeiji/5-2.png) no-repeat;
    width: 20%;
    height: 100%; 
    background-size: 100% 100%;
}
.pg_valve3{
    background: url(../../assets/images/shuifeiji/5-3.png) no-repeat;
    width: 20%;
    height: 100%; 
    background-size: 100% 100%;
}
.pg_valve4{
    background: url(../../assets/images/shuifeiji/5-2.png) no-repeat;
    width: 20%;
    height: 100%; 
    background-size: 100% 100%;
}
.pg_valve5{
    background: url(../../assets/images/shuifeiji/5-5.png) no-repeat;
    width: 20%;
    height: 100%; 
    background-size: 100% 100%;
} */
.pg_valve {
	float: left;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
    box-sizing: border-box;
    padding-bottom: 100px;
    padding-top: 20px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height:100%;
}

.pg_valve li {
	/* overflow: hidden; */
	margin-bottom: 15px;
	height: 60px;
	position: relative;
    padding-left: 38%;
    box-sizing: border-box;
}

.pg_valve1 li {
	/* overflow: hidden; */
	margin-bottom: 15px;
	height: 60px;
	position: relative;
    padding-left: 36%;
    box-sizing: border-box;
}

.pg_valve li * {
	float: left;
	clear: left;
}

.valve_icon {
	width: 48px;
	height: 30px;
	background-image: url(../../assets/images/shuifeiji/电磁阀.png);
	background-position: center;
	background-repeat: no-repeat;
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
	left: calc(100% - 9px);
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
</style>