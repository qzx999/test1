<template>
    <div>
        <Divider orientation="left">
            <span>下架明细</span>
        </Divider>
        <div>
            <Row>
                <Col :span="5">
                    <span>创建日期</span>
                    <DatePicker type="date" v-model="obtainedDetailrequest.create_date" style="width: 100px"></DatePicker>
                    <span>~</span>
                    <DatePicker type="date" v-model="obtainedDetailrequest.goods_pro_data" style="width: 100px"></DatePicker>
                </Col>
                <Col :span="4">
                    <span>单号：</span>
                    <Input  v-model="obtainedDetailrequest.order_id" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>储位：</span>
                    <Input  v-model="obtainedDetailrequest.ku_wei" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>下架托盘：</span>
                    <Input  v-model="obtainedDetailrequest.bin_id" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>到托盘：</span>
                    <Input  v-model="obtainedDetailrequest.bin_id_to" style="width: 100px"/>
                </Col>
                <Col :span="3" >
                    <span>货主：</span>
                    <Input  v-model="obtainedDetailrequest.cus_code" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="4" style="margin-left: 12px">
                    <span>商品：</span>
                    <Input  v-model="obtainedDetailrequest.goods_code" style="width: 100px"/>
                </Col>
                <Col :span="4" style="margin-left: 5px">
                    <span>第三方单号：</span>
                    <Input  v-model="obtainedDetailrequest.im_cus_code" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button  icon="ios-search" ghost @click="obtainedDetailFindCha" type="success" style="margin-left: 400px">查询</Button>
                    <Button  icon="ios-albums" ghost @click="obtainedDetailZhongZhi" type="error">重置</Button>
                </Col>
            </Row>
        </div>
        <div>
            <Table :columns="obtainedDetailColumns" :data="obtainedDetailData">

            </Table>
        </div>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/obtainedDetail.js'
    export default {
        name: "obtainedDetail",
        data(){
            return{
                obtainedDetailColumns:this.obtainedDetailFindAll(),
                obtainedDetailData:[],
                obtainedDetailrequest:{
                    page:1,
                    size:5,
                    total:0,
                    create_date:'',
                    goods_pro_data:'',
                    order_id:'',
                    ku_wei:'',
                    bin_id:'',
                    bin_id_to:'',
                    cus_code:'',
                    goods_code:'',
                    im_cus_code:''
                },
            }
        },
        methods:{
            obtainedDetailZhongZhi(){  //重置
               this.obtainedDetailrequest={
                   page:1,
                   size:5,
                   total:0,
                   create_date:'',
                   goods_pro_data:'',
                   order_id:'',
                   ku_wei:'',
                   bin_id:'',
                   bin_id_to:'',
                   cus_code:'',
                   goods_code:'',
                   im_cus_code:''
               }
               this.obtainedDetailFindCha();
            },
            obtainedDetailFindCha(){
                let local=localStorage.getItem('obtainedDetail');
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.obtainedDetailCha((this.obtainedDetailrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem('obtainedDetail',JSON.stringify(res.data.data.rows));//设值
                        this.obtainedDetailData=res.data.data.rows;
                    })
                }else{
                    this.obtainedDetailData=list;
                }
            },
            obtainedDetailFindAll(){
            let arr=[
                {type:'index',title:'序号',align:'center',width:50},
                {title:'创建日期',key:'create_date',align:'center'},
                {title:'创建人',key:'create_name',align:'center'},
                {title:'单号',key:'order_id',align:'center'},
                {title:'下架托盘',key:'bin_id',align:'center'},
                {title:'到托盘',key:'bin_id_to',align:'center'},
                {title:'货主',key:'cus_code',align:'center'},
                {title:'货主名称',key:'zhong_wen_qch',align:'center'},
                {title:'商品',key:'goods_code',align:'center'},
                {title:'商品名称',key:'shp_ming_cheng',align:'center'},
                {title:'生产日期',key:'goods_pro_data',align:'center'},
                {title:'保质期',key:'bzhi_qi',align:'center'},
                {title:'单位',key:'base_unit',align:'center'},
                {title:'数量',key:'base_goodscount',align:'center'},
                {title:'单件重量KG',key:'zhl_kg',align:'center'},
                {title:'第三方单号',key:'im_cus_code',align:'center'},
                {title:'规格',key:'shp_gui_ge',align:'center'},
            ]
            return arr;
         }
        },
        created(){
            this.obtainedDetailFindCha();
        }
    }
</script>

<style scoped>

</style>
