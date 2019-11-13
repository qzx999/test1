<template>
    <div>
        <Divider orientation="left">
            <span> 计费库存查询</span>
        </Divider>
        <div>
            <Row>
                <Col :span="6">
                    <span>库存日期</span>
                    <DatePicker type="date" v-model="billingInventoryrequest.his_date" style="width: 100px"></DatePicker>
                    <span>~</span>
                    <DatePicker type="date" v-model="billingInventoryrequest.goods_pro_data" style="width: 100px"></DatePicker>
                </Col>
                <Col :span="4">
                    <span>货主：</span>
                    <Input  v-model="billingInventoryrequest.cus_code" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>储位：</span>
                    <Input  v-model="billingInventoryrequest.ku_wei_bian_ma" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>托盘：</span>
                    <Input  v-model="billingInventoryrequest.bin_id" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>商品：</span>
                    <Input  v-model="billingInventoryrequest.goods_id" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="billingInventoryFind" icon="ios-search" ghost  type="success" style="margin-left: 310px">查询</Button>
                    <Button @click="billingInventoryChongZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="billingInventoryColumns" :data="billingInventoryData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/billingInventory.js'
    export default {
        name: "billingInventory",
        data(){
            return{
                billingInventoryColumns:this.billingInventoryFindAll(),
                billingInventoryData:[],
                billingInventoryrequest:{
                    page:1,
                    size:5,
                    total:0,
                    his_date:'',
                    cus_code:'',
                    ku_wei_bian_ma:'',
                    bin_id:'',
                    goods_id:''
                },
            }
        },
        methods:{
            billingInventoryFind(){
                let local=localStorage.getItem('billingInventory');
                let list=JSON.parse(local);
                if(list==null||list.length==0){
                    standardApi.billingInventoryAll((this.billingInventoryrequest)).then(res=>{
                        localStorage.setItem('billingInventory',JSON.stringify(res.data.data.rows));
                        this.billingInventoryData=res.data.data.rows;
                    })
                }else{
                    this.billingInventoryData=list;
                }
            },
            billingInventoryChongZhi(){
               this.billingInventoryrequest={
                   page:1,
                   size:5,
                   total:0,
                   his_date:'',
                   cus_code:'',
                   ku_wei_bian_ma:'',
                   bin_id:'',
                   goods_id:''
               }
            },
            billingInventoryFindAll(){
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
                    {title:'单件重量KG',key:'zhl_kg',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.billingInventoryFind();
        }
    }
</script>

<style scoped>

</style>
