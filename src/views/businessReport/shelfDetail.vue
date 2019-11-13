<template>
    <div>
        <Divider orientation="left">
            <span>上架明细</span>
        </Divider>
       <div>
           <Row>
               <Col :span="7">
                   <span>创建日期</span>
                   <DatePicker type="date" v-model="shelfDetailrequest.create_date" style="width: 100px"></DatePicker>
                   <span>~</span>
                   <DatePicker type="date" v-model="shelfDetailrequest.goods_pro_data" style="width: 100px"></DatePicker>
               </Col>
               <Col :span="4">
                   <span>通知单：</span>
                   <Input  v-model="shelfDetailrequest.order_id" style="width: 100px"/>
               </Col>
               <Col :span="4">
                   <span>储位：</span>
                   <Input  v-model="shelfDetailrequest.ku_wei_bian_ma" style="width: 100px"/>
               </Col>
               <Col :span="4">
                   <span>托盘：</span>
                   <Input  v-model="shelfDetailrequest.bin_id" style="width: 100px"/>
               </Col>
               <Col :span="4">
                   <span>货主：</span>
                   <Input  v-model="shelfDetailrequest.cus_code" style="width: 100px"/>
               </Col>
           </Row>
           <Row>
               <Col>
                   <Col :span="4" style="margin-left: 10px">
                       <span>商品：</span>
                       <Input  v-model="shelfDetailrequest.goods_code" style="width: 100px"/>
                   </Col>
                   <Col :span="4" style="margin-left: 126px">
                       <span>第三方单号：</span>
                       <Input  v-model="shelfDetailrequest.im_cus_code" style="width: 100px"/>
                   </Col>
               </Col>
           </Row>
           <Row>
               <Col :span="12">
                   <Button icon="ios-albums" >导出</Button>
               </Col>
               <Col :span="12">
                   <Button  @click="shelfDetailFind" icon="ios-search" ghost  type="success" style="margin-left: 400px">查询</Button>
                   <Button @click="shelfDetailFindChong" icon="ios-albums" ghost  type="error">重置</Button>
               </Col>
           </Row>
       </div>
        <div>
            <Table :columns="shelfDetailColumns" :data="shelfDetailData">

            </Table>
        </div>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/shelfDetail.js'
    export default {
        name: "shelfDetail",
        data(){
            return{
                shelfDetailColumns:this.shelfDetailFindAll(),
                shelfDetailData:[],
                shelfDetailrequest:{
                    page:1,
                    size:5,
                    total:0,
                    order_id:'',
                    ku_wei_bian_ma:'',
                    bin_id:'',
                    cus_code:'',
                    goods_code:'',
                    im_cus_code:''
                }
            }
        },
        methods: {
            shelfDetailFindChong(){
               this.shelfDetailrequest={
                   page:1,
                   size:5,
                   total:0,
                   order_id:'',
                   ku_wei_bian_ma:'',
                   bin_id:'',
                   cus_code:'',
                   goods_code:'',
                   im_cus_code:''
               }
               this.shelfDetailFind();
            },
            shelfDetailFind(){  //查询
                let local=localStorage.getItem("shelfDetail");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.shelfDetailAll1((this.shelfDetailrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("shelfDetail",JSON.stringify(res.data.data.rows));//设值
                        this.shelfDetailData=res.data.data.rows;
                    })
                }else if(this.shelfDetailrequest.order_id!=''||this.shelfDetailrequest.ku_wei_bian_ma!=''||this.shelfDetailrequest.bin_id!=''||this.shelfDetailrequest.cus_code!=''||this.shelfDetailrequest.goods_code!=''||this.shelfDetailrequest.im_cus_code!='') {
                    standardApi.shelfDetailMoHu(this.shelfDetailrequest).then(res => {
                        this.shelfDetailData = res.data.data.rows;
                    });
                }else{
                    this.shelfDetailData=list;
                }
            },
            shelfDetailFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center',width:50},
                    {title:'创建日期',key:'create_date',align:'center'},
                    {title:'创建人',key:'create_name',align:'center'},
                    {title:'通知单',key:'order_id',align:'center'},
                    {title:'储位',key:'ku_wei_bian_ma',align:'center'},
                    {title:'托盘',key:'bin_id',align:'center'},
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
            this.shelfDetailFind();
        }
    }
</script>

<style scoped>

</style>
