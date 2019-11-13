<template>
    <div>
        <Row >
            <Col span="24">
                <div style="padding:20px;font-size: 20px;background-color: #fff;margin-top: 20px;height: 100px">
                    <p>欢迎您使用货物管理系统,<span id="timeShow"></span></p>
                    <p>您有 <span style="color: red">{{ count }}</span> 件商品需要做库存调整，请及时调整</p>
                </div>
            </Col>
        </Row>
        <Row style="margin-top: 20px;">
            <Col span="6" style="border-right: #dedede solid 2px">
                <div style="background-color: #fff;">
                    <Row>
                        <Col style="margin: 10px">
                            <Avatar icon="ios-cart-outline" style="background-color: #fca241" size="large" />
                            <!--<Icon type="" size="35"/>-->
                            待收货
                        </Col>
                    </Row>
                    <Row style="height: 130px">
                        <Col style="margin: 5px;text-align: center;">
                           <p style="font-size: 45px;">{{ pendingReceipt }}</p>
                            <p>待收货件数</p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span="6" style="border-right: #dedede solid 2px">
                <div style="background-color: #fff">
                    <Row>
                        <Col style="margin: 10px">
                            <Avatar icon="logo-yen" style="background-color: #ff5959" size="large" />
                            待上架
                        </Col>
                    </Row>
                    <Row style="height: 130px">
                        <Col style="margin: 5px;text-align: center">
                            <p style="font-size: 45px;">{{ pendingReceipt }}</p>
                            <p>待上架件数</p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span="6" style="border-right: #dedede solid 2px">
                <div style="background-color: #fff">
                    <Row>
                        <Col style="margin: 10px">
                            <Avatar icon="ios-car-outline" style="background-color: #3fcf90" size="large" />
                            待检练
                        </Col>
                    </Row>
                    <Row style="height: 130px">
                        <Col style="margin: 5px;text-align: center">
                            <p style="font-size: 45px;">{{ pendingReceipt }}</p>
                            <p>待检练件数</p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span="6" style="border-right: #dedede solid 2px">
                <div style="background-color: #fff">
                    <Row>
                        <Col style="margin: 10px">
                            <Avatar icon="ios-contact" style="background-color: #54aafa" size="large" />
                           <!-- <Icon type="" size="35"/>-->
                            拣货中
                        </Col>
                    </Row>
                    <Row style="height:130px">
                        <Col style="margin: 5px;text-align: center">
                            <p style="font-size: 45px;">{{ pendingReceipt }}</p>
                            <p>拣货中件数</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>

        <Row style="margin: 3%">
            <!--<Col span="8">
                <div style="height: 200px;">
                    <Progress  :percent="25" stroke-color="#ff8400" style="margin-bottom: 30px"/>
                    <Progress  :percent="45"  stroke-color="#fd2f2f" style="margin-bottom: 30px"/>
                    <Progress  :percent="65"  stroke-color="#36e096" style="margin-bottom: 30px"/>
                    <Progress  :percent="100" stroke-color="#4ea3f4"  style="margin-bottom: 20px"/>
                </div>
            </Col>-->
            <Col span="6">
                <div style="height: 200px;padding-left:10%">
                    <i-circle :percent="80" dashboard :size="200" stroke-color=" #fca241">
                        <span class="demo-circle-inner" style="font-size:15px">
                           待收货件数 80%
                        </span>
                    </i-circle>
                </div>
            </Col>
            <Col span="6">
                <div style="height: 200px;padding-left:20%">
                    <i-circle :percent="80" dashboard :size="200" stroke-color=" #ff5959">
                        <span class="demo-circle-inner" style="font-size:15px">
                           待上架件数 80%
                        </span>
                    </i-circle>
                </div>
            </Col>
            <Col span="6">
                <div style="height: 200px;padding-left:25%">
                    <i-circle :percent="80" dashboard :size="200" stroke-color=" #3fcf90">
                        <span class="demo-circle-inner" style="font-size:15px">
                           待检练件数 80%
                        </span>
                    </i-circle>
                </div>
            </Col>
            <Col span="6">
                <div style="height: 200px;padding-left:35%">
                    <i-circle :percent="80" dashboard :size="200" stroke-color=" #54aafa">
                        <span class="demo-circle-inner" style="font-size:15px">拣货中件数80%</span>
                    </i-circle>
                </div>
            </Col>
        </Row>
    </div>

</template>

<script>
    export default {
        name: "Home.vue",
        data(){
            return{
                dates:'',
                //商品总数
                count:123,
                //待收货数量
                pendingReceipt:1
            }
        },
        methods:{
            time() {
                clearTimeout(t); //清除定时器
                let dt = new Date();
                let y = dt.getFullYear();
                let mm = dt.getMonth() + 1;
                let d = dt.getDate();
                let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                let day = dt.getDay();
                let h = dt.getHours();
                let m = dt.getMinutes();
                let s = dt.getSeconds();
                if(h < 10) {
                    h = "0" + h;
                }
                if(m < 10) {
                    m = "0" + m;
                }
                if(s < 10) {
                    s = "0" + s;
                }
                document.getElementById("timeShow").innerHTML =
                    "现在的时间为："+"<span style='color: red'>"+y+"</span>"+"年"+"<span style='color: red'>"+mm+"</span>"+"月"+"<span style='color: red'>"+d+"</span>"+"日"+weekday[day]+""+h+":"+m+":"+s+"";
                let t = setTimeout(this.time, 1000); //设定定时器，循环执行
            }
        },
        created() {
            let t = null;
            t = setTimeout(this.time, 1000);
        }
    }
</script>

<style scoped>


</style>