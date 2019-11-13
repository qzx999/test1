<template>
    <div>
        <Divider orientation="left">
            <span>历史库存查询</span>
        </Divider>
        <div>
            <Row>
                <Col :span="7">
                    <span>库存日期</span>
                    <DatePicker type="date" v-model="historyInventoryrequest.his_date" style="width: 100px"></DatePicker>
                    <span>~</span>
                    <DatePicker type="date" v-model="historyInventoryrequest.his_date" style="width: 100px"></DatePicker>
                </Col>
                <Col :span="4">
                    <span>货主：</span>
                    <Input  v-model="historyInventoryrequest.cus_code" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>储位：</span>
                    <Input  v-model="historyInventoryrequest.ku_wei_bian_ma" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>托盘：</span>
                    <Input  v-model="historyInventoryrequest.bin_id" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>商品：</span>
                    <Input  v-model="historyInventoryrequest.goods_id" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="historyInventoryFind" icon="ios-search" ghost  type="success" style="margin-left: 360px">查询</Button>
                    <Button @click="historyInventoryChongZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="historyInventoryColumns" :data="historyInventoryData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/historyInventory.js'
    export default {
        name: "historyInventory",
        data(){
            return{
                historyInventoryColumns:this.historyInventoryFindAll(),
                historyInventoryData:[],
                historyInventoryrequest:{
                    page:1,
                    size:5,
                    total:0,
                    cus_code:'',
                    ku_wei_bian_ma:'',
                    bin_id:'',
                    goods_id:''
                },
            }
        },
        methods:{
            historyInventoryChongZhi(){
                this.historyInventoryrequest={
                    page:1,
                    size:5,
                    total:0,
                    cus_code:'',
                    ku_wei_bian_ma:'',
                    bin_id:'',
                    goods_id:''
                }
                this.historyInventoryFind();
            },
            historyInventoryFind(){
                let local=localStorage.getItem('historyInventory');
                let list=JSON.parse(local);
                if(list==null||list.length==0){
                    standardApi.historyInventoryAll((this.historyInventoryrequest)).then(res=>{
                        localStorage.setItem('historyInventory',JSON.stringify(res.data.data.rows));
                        this.historyInventoryData=res.data.data.rows;
                    })
                }else{
                    this.historyInventoryData=list;
                }
            },
            historyInventoryFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center',width:50},
                    {title:'库存日期',key:'his_date',align:'center'},
                    {title:'货主',key:'cus_code',align:'center'},
                    {title:'货主名称',key:'zhong_wen_qch',align:'center'},
                    {title:'储位',key:'ku_wei_bian_ma',align:'center'},
                    {title:'托盘',key:'bin_id',align:'center'},
                    {title:'商品',key:'goods_id',align:'center'},
                    {title:'商品名称',key:'shp_ming_cheng',align:'center'},
                    {title:'数量',key:'count',align:'center'},
                    {title:'单位',key:'base_unit',align:'center'},
                    {title:'单价重量KG',key:'zhl_kg',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.historyInventoryFind();
        }
    }
</script>

<style scoped>

</style>
