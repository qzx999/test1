<template>
    <div>
        <Divider orientation="left">
            <span>在途库存</span>
        </Divider>
        <div>
            <Row>
                <Col :span="4">
                    <span>出货订单：</span>
                    <Input  v-model="en_routeInventoryrequest.order_id" style="width: 100px"/>
                </Col>
                <Col :span="6" style="margin-left: 11px">
                    <span>创建日期</span>
                    <DatePicker type="date" v-model="en_routeInventoryrequest.goods_pro_data" style="width: 100px"></DatePicker>
                    <span>~</span>
                    <DatePicker type="date" v-model="en_routeInventoryrequest.create_date" style="width: 100px"></DatePicker>
                </Col>
                <Col :span="4">
                    <span>客户编码：</span>
                    <Input  v-model="en_routeInventoryrequest.cus_code" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>客户名称：</span>
                    <Input  v-model="en_routeInventoryrequest.zhong_wen_qch" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>商品编码：</span>
                    <Input  v-model="en_routeInventoryrequest.goods_id" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="4">
                    <span>商品名称：</span>
                    <Input  v-model="en_routeInventoryrequest.shp_ming_cheng" style="width: 100px"/>
                </Col>
                <Col :span="5">
                    <span>出货储位：</span>
                    <Input  v-model="en_routeInventoryrequest.ku_wei_bian_ma" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button  @click="en_routeInventoryFind" icon="ios-search" ghost  type="success" style="margin-left: 360px">查询</Button>
                    <Button @click="en_routeInventoryZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="en_routeInventoryColumns" :data="en_routeInventoryData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/en_routeInventory.js'
    export default {
        name: "en_routeInventory",
        data(){
            return{
                en_routeInventoryColumns:this.en_routeInventoryFindAll(),
                en_routeInventoryData:[],
                en_routeInventoryrequest:{
                    page:1,
                    size:5,
                    total:0,
                    order_id:'',
                    cus_code:'',
                    zhong_wen_qch:'',
                    goods_id:'',
                    shp_ming_cheng:'',
                    ku_wei_bian_ma:'',
                },
            }
        },
        methods:{
            en_routeInventoryFind(){
                let local=localStorage.getItem("en_routeInventory");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.en_routeInventoryAll((this.en_routeInventoryrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("en_routeInventory",JSON.stringify(res.data.data.rows));//设值
                        this.en_routeInventoryData=res.data.data.rows;
                    })
                }else{
                    this.en_routeInventoryData=list;
                }
            },
            en_routeInventoryZhi(){
              this.en_routeInventoryrequest={
                  page:1,
                  size:5,
                  total:0,
                  order_id:'',
                  cus_code:'',
                  zhong_wen_qch:'',
                  goods_id:'',
                  shp_ming_cheng:'',
                  ku_wei_bian_ma:'',
              }
              this.en_routeInventoryFind();
            },
            en_routeInventoryFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center'},
                    {title:'库存类型',key:'kuctype',align:'center'},
                    {title:'出货订单',key:'order_id',align:'center'},
                    {title:'出货日期',key:'create_date',align:'center'},
                    {title:'客户编码',key:'cus_code',align:'center'},
                    {title:'客户名称',key:'zhong_wen_qch',align:'center'},
                    {title:'商品编码',key:'goods_id',align:'center'},
                    {title:'商品名称',key:'shp_ming_cheng',align:'center'},
                    {title:'出货数量',key:'goods_quaok',align:'center'},
                    {title:'单位',key:'shl_dan_wei',align:'center'},
                    {title:'生成日期',key:'goods_pro_data',align:'center'},
                    {title:'出货储位',key:'ku_wei_bian_ma',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.en_routeInventoryFind();
        }
    }
</script>

<style scoped>

</style>
