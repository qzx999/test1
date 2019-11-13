<template>
    <div>
        <Divider orientation="left">
            <span> 效期预警</span>
        </Divider>
        <div>
            <Row>
                <Col :span="4">
                    <span>商品编码：</span>
                    <Input  v-model="vp_warningrequest.goodsId" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>客户商品编码：</span>
                    <Input  v-model="vp_warningrequest.shpBianmakh" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>商品名称：</span>
                    <Input  v-model="vp_warningrequest.shpMingCheng" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>客户编码：</span>
                    <Input  v-model="vp_warningrequest.cusCode" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>客户名称：</span>
                    <Input  v-model="vp_warningrequest.zhongWenQch" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>生产日期：</span>
                    <DatePicker type="date" v-model="vp_warningrequest.goodsProData" style="width: 100px"></DatePicker>
                </Col>
            </Row>
            <Row>
                    <Col :span="4">
                        <span>到期日期：</span>
                        <DatePicker type="date" v-model="vp_warningrequest.dqr" style="width: 100px"></DatePicker>
                    </Col>
                    <Col :span="8" style="margin-left: 24px">
                        <span>剩余比例：</span>
                        <Input  v-model="vp_warningrequest.guoqiBili" style="width: 100px"/>
                        <span>~</span>
                        <Input  v-model="vp_warningrequest.guoqiBili" style="width: 100px"/>
                    </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="vpwarningFind" icon="ios-search" ghost  type="success" style="margin-left: 400px">查询</Button>
                    <Button @click="vpwarningFindChongZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="vp_warningColumns" :data="vp_warningData">

        </Table>
        <!--</div>-->
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/vp_warning.js'
    export default {
        name: "vp_warning",
        data(){
            return{
                vp_warningColumns:this.vp_warningFindAll(),
                vp_warningData:[],
                vp_warningrequest:{
                    page:1,
                    size:5,
                    total:0,
                    goodsId:'',
                    shpBianmakh:'',
                    shpMingCheng:'',
                    cusCode:'',
                    zhongWenQch:'',
                    guoqiBili:'',
                    goodsProData:'',
                    dqr:'',
                },
            }
        },
        methods:{
            vpwarningFindChongZhi(){
               this.vp_warningrequest={
                   page:1,
                   size:5,
                   total:0,
                   goodsId:'',
                   shpBianmakh:'',
                   shpMingCheng:'',
                   cusCode:'',
                   zhongWenQch:'',
                   guoqiBili:'',
                   goodsProData:'',
                   dqr:'',
               }
            },
            vpwarningFind(){
                let local=localStorage.getItem("vp_warning");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.vp_warningAll1((this.vp_warningrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("vp_warning",JSON.stringify(res.data.data.rows));//设值
                        this.vp_warningData=res.data.data.rows;
                    })
                }else{
                    this.vp_warningData=list;
                }
            },
            vp_warningFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center'},
                    {title:'库存类型',key:'kuctype',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'客户商品编码',key:'shpBianmakh',align:'center'},
                    {title:'商品名称',key:'shpMingCheng',align:'center'},
                    {title:'基本数量',key:'baseGoodscount',align:'center'},
                    {title:'基本单位',key:'baseUnit',align:'center'},
                    {title:'客户编码',key:'cusCode',align:'center'},
                    {title:'客户名称',key:'zhongWenQch',align:'center'},
                    {title:'生成日期',key:'goodsProData',align:'center'},
                    {title:'保质期(天)',key:'bzhiQi',align:'center'},
                    {title:'到期日',key:'dqr',align:'center'},
                    {title:'剩余天数',key:'resDate',align:'center'},
                    {title:'剩余比例',key:'guoqiBili',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.vpwarningFind();
        }
    }
</script>

<style scoped>

</style>
