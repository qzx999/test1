<template>
    <div>
        <Divider orientation="left">
            <span>收货未上架</span>
        </Divider>
        <div>
            <Row>
                <Col>
                    <Col :span="4">
                        <span>储位：</span>
                        <Input  v-model="delvNotShelfrequest.bin_id" style="width: 100px"/>
                    </Col>
                    <Col :span="4">
                        <span>托盘：</span>
                        <Input  v-model="delvNotShelfrequest.tin_id" style="width: 100px"/>
                    </Col>
                    <Col :span="4">
                        <span>客户编码：</span>
                        <Input  v-model="delvNotShelfrequest.cus_code" style="width: 100px"/>
                    </Col>
                    <Col :span="4">
                        <span>客户名称：</span>
                        <Input  v-model="delvNotShelfrequest.zhong_wen_qch" style="width: 100px"/>
                    </Col>
                    <Col :span="4">
                        <span>商品编码：</span>
                        <Input  v-model="delvNotShelfrequest.goods_id" style="width: 100px"/>
                    </Col>
                    <Col :span="4">
                        <span>商品名称：</span>
                        <Input  v-model="delvNotShelfrequest.shp_ming_cheng" style="width: 100px"/>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="delvNotShelfFind" icon="ios-search" ghost  type="success" style="margin-left: 410px">查询</Button>
                    <Button @click="delvNotShelfChongZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="delvNotShelfColumns" :data="delvNotShelfData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/delvNotShelf.js'
    export default {
        name: "delvNotShelf",
        data(){
            return{
                delvNotShelfColumns:this.delvNotShelfFindAll(),
                delvNotShelfData:[],
                delvNotShelfrequest:{
                    page:1,
                    size:5,
                    total:0,
                    bin_id:'',
                    tin_id:'',
                    cus_code:'',
                    zhong_wen_qch:'',
                    goods_id:'',
                    shp_ming_cheng:''
                },
            }
        },
        methods:{
            delvNotShelfChongZhi(){
               this.delvNotShelfrequest={
                   page:1,
                   size:5,
                   total:0,
                   bin_id:'',
                   tin_id:'',
                   cus_code:'',
                   zhong_wen_qch:'',
                   goods_id:'',
                   shp_ming_cheng:''
                }
                this.delvNotShelfFind();
            },
            delvNotShelfFind(){
                let local=localStorage.getItem('delvNotShelf');
                let list=JSON.parse(local);
                if(list==null||list.length==0){
                    standardApi.delvNotShelfAll((this.delvNotShelfrequest)).then(res=>{
                        localStorage.setItem('delvNotShelf',JSON.stringify(res.data.data.rows));
                        this.delvNotShelfData=res.data.data.rows;
                    })
                }else{
                    this.delvNotShelfData=list;
                }
            },
            delvNotShelfFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center',width:50},
                    {title:'库存状态',key:'kucunsta',align:'center'},
                    {title:'储位',key:'bin_id',align:'center'},
                    {title:'托盘',key:'tin_id',align:'center'},
                    {title:'客户编码',key:'cus_code',align:'center'},
                    {title:'客户名称',key:'zhong_wen_qch',align:'center'},
                    {title:'商品编码',key:'goods_id',align:'center'},
                    {title:'商品名称',key:'shp_ming_cheng',align:'center'},
                    {title:'数量',key:'qm_ok_quat',align:'center'},
                    {title:'单位',key:'shl_dan_wei',align:'center'},
                    {title:'生成日期',key:'pro_data',align:'center'},
                    {title:'收货时间',key:'create_date',align:'center'},
                    {title:'保质期(天)',key:'datagrid-cell',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.delvNotShelfFind();
        }
    }
</script>

<style scoped>

</style>
