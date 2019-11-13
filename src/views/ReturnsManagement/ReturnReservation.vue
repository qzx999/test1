<template>
    <div>
        <Divider orientation="left">
            <span>退货登记</span>
        </Divider>
        <div>
            <Row>
                <Col span="4">
                    <span>通知单</span>
                    <Input  v-model="ReturnReservationDataRequest.imNoticeId" style="width: 100px"/>
                </Col>
                <Col span="4">
                        <span>客户订单号</span>
                        <Input  v-model="ReturnReservationDataRequest.imCusCode" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>商品编码</span>
                    <Input  v-model="ReturnReservationDataRequest.goodsId" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>商品名称</span>
                    <Input  v-model="ReturnReservationDataRequest.imCusCode" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>推盘</span>
                    <Input  v-model="ReturnReservationDataRequest.imCusCode" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>储位</span>
                    <Input  v-model="ReturnReservationDataRequest.goodsId" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col span="4">
                    <span style="margin-left: 10px">货主</span>
                    <Select v-model="ReturnReservationDataRequest.platformCode" style="width: 100px">
                        <Option :value="0">希奥利</Option>
                        <Option :value="1">嗡嗡嗡</Option>
                        <Option :value="1">嘻嘻嘻</Option>
                    </Select>
                </Col>
                <Col span="5">
                    <span>是否已上架</span>
                    <Select v-model="ReturnReservationDataRequest.platformCode1" style="width: 100px">
                        <Option :value="0">是</Option>
                        <Option :value="1">否</Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <!--<Button @click="CustomerAddTian(null)" icon="ios-add" >录入</Button>-->
                    <Button icon="md-create" @click="ReturnReservRu(null)">导入</Button>
                    <Button icon="md-create" >导出</Button>
                    <Button icon="md-create" >模板下载</Button>
                </Col>
                <Col :span="12">
                    <Button @click="ReturnReservationFind" icon="ios-search" style="margin-left: 400px">查询</Button>
                    <Button @click="ReturnReservationZhi"icon="ios-search">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="ReturnReservation" :data="ReturnReservationData">
            <template slot="btn" slot-scope="scope">
                <Button @click="ReturnReservationAddTian(null)" type="success" icon="ios-add" >录入</Button>
                <Button @click="ReturnReservationAddTian(scope.row)" type="warning" icon="md-create">编辑</Button>
            </template>
        </Table>
        <ReturnReservationXiao ref="ReturnXiao"></ReturnReservationXiao>
        <ReturnReservationAddUpdaate ref="Return"></ReturnReservationAddUpdaate>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/ReturnReservation.js'
    export default {
        name: "ReturnReservation",
        data(){
            return{
                ReturnReservation:this.ReturnReservationFindAll(),
                ReturnReservationData:[],
                ReturnReservationDataRequest:{
                    page:1,
                    size:10,
                    total:0,
                    imNoticeId:'',
                    imCusCode:'',
                    goodsId:'',
                    goodsName:'',
                    tinId:'',
                    binId:'',
                    cusCode:'',
                }
            }
        },
        methods:{
            ReturnReservRu(data){  //导入
                if(data==null){
                    this.$refs['ReturnXiao'].ReturnReservationXiaoData={};
                    this.$refs['ReturnXiao'].ReturnReservationXiao=true;
                }
            },
            ReturnReservationAddTian(data){
                if(data==null){
                    this.$refs['Return'].ReturnReservationAddData={};
                    this.$refs['Return'].ReturnReservationAddUpdaate=true;
                }else{
                    this.$refs['Return'].ReturnReservationAddData=data;
                    this.$refs['Return'].ReturnReservationAddUpdaate=true;
                }
            },
            ReturnReservationZhi(){  //重置
               this.ReturnReservationDataRequest={
                   page:1,
                   size:10,
                   total:0,
                   imNoticeId:'',
                   imCusCode:'',
                   goodsId:'',
                   goodsName:'',
                   tinId:'',
                   binId:'',
                   cusCode:'',
               }
               this.ReturnReservationFind();
            },
            ReturnReservationFind(){ //查询
                let local=localStorage.getItem("ReturnReservation");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.ReturnReservationFindCha((this.ReturnReservationDataRequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("ReturnReservation",JSON.stringify(res.data.data.rows));//设值
                        this.ReturnReservationData=res.data.data.rows;
                    })
                }else if(this.ReturnReservationData.imNoticeId!=''||this.ReturnReservationDataRequest.imCusCode!=''||this.CustomerReturnsrequest.goodsId!=''||this.CustomerReturnsrequest.goodsName!=''||this.CustomerReturnsrequest.tinId!=''||this.CustomerReturnsrequest.binId!=''||this.CustomerReturnsrequest.cusCode!=''){
                    standardApi.ReturnReservationMoHuCha(this.ReturnReservationDataRequest).then(res=>{
                        this.ReturnReservationData=res.data.data.rows;
                    });
                }else{
                    this.ReturnReservationData=list;
                }
            },
            ReturnReservationFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center'},
                    {title:'验收人',key:'createName',align:'center'},
                    {title:'收货时间',key:'createDate',align:'center'},
                    {title:'通知单',key:'imNoticeId',align:'center'},
                    {title:'客户订单号',key:'imCusCode',align:'center'},
                    {title:'商品编号',key:'goodsId',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'到货数量',key:'imQuat',align:'center'},
                    {title:'数量',key:'qmOkQuat',align:'center'},
                    {title:'生产日期',key:'proData',align:'center'},
                    {title:'托盘',key:'tinId',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'储位',key:'binId',align:'center'},
                    {title:'体积',key:'tinTj',align:'center'},
                    {title:'重量',key:'tinZhl',align:'center'},
                    {title:'基本单位',key:'baseUnit',align:'center'},
                    {title:'基本单位数量',key:'baseGoodscount',align:'center'},
                    {title:'货主',key:'cusCode',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn'},
                ]
                return arr;
            }
        },
        created(){
            this.ReturnReservationFind();
        },
        components:{
            ReturnReservationXiao:()=>import('@/views/ReturnsManagement/ReturnReservationAdd/ReturnReservationXiao.vue'),
            ReturnReservationAddUpdaate:()=>import('@/views/ReturnsManagement/ReturnReservationAdd/ReturnReservationAddUpdaate.vue')
        }
    }
</script>

<style scoped>

</style>