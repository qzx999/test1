<template>
     <div>
         <Divider orientation="left">
             <span>客户退货</span>
         </Divider>
         <div>
             <Row>
                 <Col span="4">
                     <span class="title">通知单号：</span>
                     <Input type="text" v-model="CustomerReturnsrequest.noticeId" style="width: 100px"/>
                 </Col>
                 <Col span="6">
                     <span>预计到货时间：</span>
                     <DatePicker type="date" v-model="CustomerReturnsrequest.createDate" style="width: 100px"></DatePicker>
                     <span>~</span>
                     <DatePicker type="date" v-model="CustomerReturnsrequest.imData" style="width: 100px"></DatePicker>
                 </Col>
                 <Col span="4">
                     <span>客户订单号：</span>
                     <Input  v-model="CustomerReturnsrequest.imCusCode" style="width: 100px"/>
                 </Col>
                 <Col span="3">
                     <span>车号：</span>
                     <Input  v-model="CustomerReturnsrequest.imCarNo" style="width: 100px"/>
                 </Col>
                 <Col span="3">
                     <span>司机：</span>
                     <Input  v-model="CustomerReturnsrequest.imCarDri" style="width: 100px"/>
                 </Col>
                 <Col span="4">
                     <span>司机电话：</span>
                     <Input  v-model="CustomerReturnsrequest.imCarMobile" style="width: 100px"/>
                 </Col>
             </Row>
             <Row>
                 <Col span="4">
                     <span>订单类型：</span>
                     <Select v-model="CustomerReturnsrequest.orderTypeCode" style="width: 100px">
                         <Option :value="0">线下订单</Option>
                         <Option :value="1">线上订单</Option>
                         <Option :value="1">退货订单</Option>
                     </Select>
                 </Col>
                 <Col span="4">
                     <span style="margin-left: 50px">月台：</span>
                     <Select v-model="CustomerReturnsrequest.platformCode" style="width: 100px">
                         <Option :value="0">1</Option>
                         <Option :value="1">2</Option>
                         <Option :value="1">3</Option>
                     </Select>
                 </Col>
                 <Col span="8">
                     <span style="margin-left: 120px">单据状态：</span>
                     <Input  v-model="CustomerReturnsrequest.imSta" style="width: 100px"/>
                 </Col>
             </Row>
             <Row>
                 <Col :span="12">
                     <Button icon="md-create" >导出</Button>
                 </Col>
                 <Col :span="12">
                     <Button @click="CustomerReturnsFindAdll" icon="ios-search" style="margin-left: 400px">查询</Button>
                     <Button @click="CustomerReturnsZhongZhi"icon="ios-search">重置</Button>
                 </Col>
             </Row>
         </div>
         <Table :columns="CustomerColumns" :data="CustomerData">
             <template slot="btn" slot-scope="scope">
                 <Button @click="CustomerAddTian(null)" type="success" icon="ios-add" >录入</Button>
                 <Button @click="CustomerAddTian(scope.row)" type="warning" icon="md-create">查看</Button>
             </template>
         </Table>
         <CustomerReturnsAdd ref="CustAdd"></CustomerReturnsAdd>
     </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/CustomerReturns.js'
    export default {
        name: "CustomerReturns",
        data(){
            return{
                CustomerColumns:this.CustomerReturn(),
                CustomerData:[],
                CustomerReturnsrequest:{
                    page:1,
                    size:10,
                    total:0,
                    noticeId:'',
                    imCusCode:'',
                    imCarNo:'',
                    imCarDri:'',
                    imCarMobile:'',
                    orderTypeCode:'',
                    platformCode:'',
                    imSta:''
                }
            }
        },
        methods:{
            CustomerAddTian(data){  //添加
               if(data==null){
                   this.$refs['CustAdd'].archiveData={};
                   this.$refs['CustAdd'].CustomerAdd=true;
               }else{
                   this.$refs['CustAdd'].archiveData=data;
                   this.$refs['CustAdd'].CustomerAdd=true;
               }
            },
            CustomerReturnsZhongZhi(){  //重置
                this.CustomerReturnsrequest={
                    page:1,
                    size:10,
                    total:0,
                    noticeId:'',
                    imCusCode:'',
                    imCarNo:'',
                    imCarDri:'',
                    imCarMobile:'',
                    orderTypeCode:'',
                    platformCode:'',
                    imSta:''
                }
                this.CustomerReturnsFindAdll();
            },
            CustomerReturnsFindAdll(){  //查看数据
                let local=localStorage.getItem("CustomerReturns1");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.CustomerReturnsFindAll((this.CustomerReturnsrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("CustomerReturns1",JSON.stringify(res.data.data.rows));//设值
                        this.CustomerData=res.data.data.rows;
                    })
                }else if(this.CustomerReturnsrequest.noticeId!=''||this.CustomerReturnsrequest.imCusCode!=''||this.CustomerReturnsrequest.imCarNo!=''||this.CustomerReturnsrequest.imCarDri!=''||this.CustomerReturnsrequest.imCarMobile!=''||this.CustomerReturnsrequest.orderTypeCode!=''||this.CustomerReturnsrequest.platformCode!=''||this.CustomerReturnsrequest.imSta!=''){
                    standardApi.CustomerReturnsMoHu(this.CustomerReturnsrequest).then(res=>{
                        this.CustomerData=res.data.data.rows;
                    });
                }else{
                    this.CustomerData=list;
                }
            },
            CustomerReturn(){
                let arr=[
                    {type:'selection',title:'序号',align:'center'},
                    {title:'创建人名称',key:'createName',align:'center',width:100},
                    {title:'创建日期',key:'createDate',align:'center'},
                    {title:'通知单号',key:'noticeId',align:'center'},
                    {title:'客户编码',key:'cusCode',align:'center'},
                    {title:'预计到货时间',key:'imData',align:'center',width:150},
                    {title:'客户订单号',key:'imCusCode',align:'center',width:100},
                    {title:'车号',key:'imCarNo',align:'center'},
                    {title:'司机',key:'imCarDri',align:'center'},
                    {title:'司机电话',key:'imCarMobile',align:'center'},
                    {title:'订单类型',key:'orderTypeCode',align:'center'},
                    {title:'月台',key:'platformCode',align:'center'},
                    {title:'备注',key:'imBeizhu',align:'center'},
                    {title:'单据状态',key:'imSta',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn'},
                ]
                return arr;
            },
        },
        components:{
            CustomerReturnsAdd:()=>import('@/views/ReturnsManagement/CustomerAdd/CustomerReturnsAdd.vue')
        },
        created(){
           this.CustomerReturnsFindAdll();
        }
    }
</script>

<style scoped>

</style>