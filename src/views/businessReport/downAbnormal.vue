<template>
    <div>
        <Divider orientation="left">
            <span>出货异常</span>
        </Divider>
        <Row>

                <Col :span="4">
                    <span>下架日期：</span>
                    <DatePicker type="date" v-model="downAbnormalrequest.create_date" style="width: 100px"></DatePicker>
                </Col>
                <Col :span="4">
                    <span>下架人：</span>
                    <Input  v-model="downAbnormalrequest.create_name" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>复核人：</span>
                    <Input  v-model="downAbnormalrequest.update_name" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>储位：</span>
                    <Input  v-model="downAbnormalrequest.ku_wei_bian_ma" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>下架托盘：</span>
                    <Input  v-model="downAbnormalrequest.bin_id" style="width: 100px"/>
                </Col> <Col :span="4">
                <span>货主：</span>
                <Input  v-model="downAbnormalrequest.cus_code" style="width: 100px"/>
            </Col>
            <Row>
                <Col :span="12">
                    <Button icon="ios-albums" >导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="downAbnormalFind" icon="ios-search" ghost  type="success" style="margin-left: 410px">查询</Button>
                    <Button @click="downAbnormalChongZhi" icon="ios-albums" ghost  type="error">重置</Button>
                </Col>
            </Row>
        </Row>
        <Table :columns="downAbnormalColumns" :data="downAbnormalData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/businessReport/downAbnormal.js'
    export default {
        name: "downAbnormal",
        data(){
            return{
                downAbnormalColumns:this.downAbnormalFindAll(),
                downAbnormalData:[],
                downAbnormalrequest:{
                    page:1,
                    size:5,
                    total:0,
                    create_date:'',
                    create_name:'',
                    update_name:'',
                    ku_wei_bian_ma:'',
                    bin_id:'',
                    cus_code:''
                },
            }
        },
        methods:{
            downAbnormalChongZhi(){  //重置
               this.downAbnormalrequest={
                   page:1,
                   size:5,
                   total:0,
                   create_date:'',
                   create_name:'',
                   update_name:'',
                   ku_wei_bian_ma:'',
                   bin_id:'',
                   cus_code:''
               }
               this.downAbnormalFind();
            },
            downAbnormalFind(){
                let local=localStorage.getItem("downAbnormal");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.downAbnormalAll((this.downAbnormalrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("downAbnormal",JSON.stringify(res.data.data.rows));//设值
                        this.downAbnormalData=res.data.data.rows;
                    })
                }else{
                    this.downAbnormalData=list;
                }
            },
            downAbnormalFindAll(){
                let arr=[
                    {type:'index',title:'序号',align:'center'},
                    {title:'下架日期',key:'create_date',align:'center'},
                    {title:'下架人',key:'create_name',align:'center'},
                    {title:'复核人',key:'update_name',align:'center'},
                    {title:'储位',key:'ku_wei_bian_ma',align:'center'},
                    {title:'下架托盘',key:'bin_id',align:'center'},
                    {title:'单号',key:'bin_id_to',align:'center'},
                    {title:'货主',key:'cus_code',align:'center'},
                    {title:'货主名称',key:'zhong_wen_qch',align:'center'},
                    {title:'商品',key:'goods_code',align:'center'},
                    {title:'商品编码',key:'shp_ming_cheng',align:'center'},
                    {title:'生成日期',key:'goods_pro_data',align:'center'},
                    {title:'单位',key:'base_unit',align:'center'},
                    {title:'下架数量',key:'goods_qua',align:'center'},
                    {title:'复核数量',key:'goods_quaok',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.downAbnormalFind();
        }
    }
</script>

<style scoped>

</style>
