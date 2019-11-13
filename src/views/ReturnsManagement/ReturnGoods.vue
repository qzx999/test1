<template>
    <div>
        <Divider orientation="left">
            <span>客户退货</span>
        </Divider>
        <div>
            <Row>
                <Col span="4">
                    <span class="title">通知单号：</span>
                    <Input type="text" v-model="ReturnGoodsRequest.noticeId" style="width: 100px"/>
                </Col>
                <Col span="6">
                    <span>预计到货时间：</span>
                    <DatePicker type="date" v-model="ReturnGoodsRequest.createDate" style="width: 100px"></DatePicker>
                    <span>~</span>
                    <DatePicker type="date" v-model="ReturnGoodsRequest.imData" style="width: 100px"></DatePicker>
                </Col>
                <Col span="4">
                    <span>客户订单号：</span>
                    <Input  v-model="ReturnGoodsRequest.imCusCode" style="width: 100px"/>
                </Col>
                <Col span="3">
                    <span>车号：</span>
                    <Input  v-model="ReturnGoodsRequest.imCarNo" style="width: 100px"/>
                </Col>
                <Col span="3">
                    <span>司机：</span>
                    <Input  v-model="ReturnGoodsRequest.imCarDri" style="width: 100px"/>
                </Col>
                <Col span="3">
                    <span>司机电话：</span>
                    <Input  v-model="ReturnGoodsRequest.imCarMobile" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col span="4">
                    <span>订单类型：</span>
                    <Select v-model="ReturnGoodsRequest.orderTypeCode" style="width: 100px">
                        <Option :value="0">线下订单</Option>
                        <Option :value="1">线上订单</Option>
                        <Option :value="1">退货订单</Option>
                    </Select>
                </Col>
                <Col span="4" style="margin-left: 48px">
                    <span>月台：</span>
                    <Select v-model="ReturnGoodsRequest.platformCode" style="width: 100px">
                        <Option :value="0">1</Option>
                        <Option :value="1">2</Option>
                        <Option :value="1">3</Option>
                    </Select>
                </Col>
                <Col span="4" style="margin-left: 70px">
                    <span>单据状态：</span>
                    <Input  v-model="ReturnGoodsRequest.imSta" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button icon="ios-search"  @click="ReturnGoodsAddTian(1)">查看</Button>
                    <Button icon="md-create" @click="ReturnGoodsDaoRu(null)">导入</Button>
                    <Button icon="md-create" >导出</Button>
                    <Button icon="md-create" >模板下载</Button>
                </Col>
                <Col :span="12">
                    <Button @click="ReturnGoodsFindAdll" icon="ios-search" style="margin-left: 400px">查询</Button>
                    <Button @click="ReturnGoodsZhongZhi"icon="ios-search">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="ReturnGoodsColumns" :data="ReturnGoodsData" highlight-row @on-current-change="ReturnGoodsXiao" >
            <template slot="btn" slot-scope="scope">
                <Button @click="ReturnGoodsAddTian(null)" type="success" icon="ios-add" >录入</Button>
                <Button @click="ReturnGoodsAddTian(scope.row)" type="warning" icon="md-create">编辑</Button>
            </template>
        </Table>
        <ReturnGoodsAdd ref="ReturnAdd"></ReturnGoodsAdd>
        <ReturnGoodsDaoRu ref="ReturnGoodsDaoRuAdd"></ReturnGoodsDaoRu>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/ReturnGoods.js'
    export default {
        name: "ReturnGoods",
        data(){
            return{
                ReturnGoodsColumns:this.ReturnGoodsColumnsFindAll(),
                ReturnGoodsData:[],
                ReturnGoodsRequest:{
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
                },
                Xiao:{}
            }
        },
        methods:{
            ReturnGoodsXiao(data){  //选一行
              this.Xiao=data;
            },
            ReturnGoodsAddTian(data){
              if(data==1){
                  if(this.Xiao.createName!=null){
                      this.$refs['ReturnAdd'].Kan=1 //如果是等于1就走查看信息
                      this.$refs['ReturnAdd'].ReturnData=this.Xiao;
                      this.$refs['ReturnAdd'].ReturnGoodsAdd=true;
                      this.$refs['ReturnAdd'].disableds=true;//如果等于查看信息,就禁用信息,不能修改
                      this.$refs['ReturnAdd'].ReturnGoodsAddUpdate=''  //只能查看数据,不能修改
                  }else{
                      this.$Message.error('请选中一行进行查看');
                  }
              }else if(data!=null){
                  this.$refs['ReturnAdd'].Kan=2
                  this.$refs['ReturnAdd'].ReturnData=data;
                  this.$refs['ReturnAdd'].ReturnGoodsAdd=true;
                  this.$refs['ReturnAdd'].disableds=false;
              }else{
                  this.$refs['ReturnAdd'].Kan=3
                  this.$refs['ReturnAdd'].ReturnData={};
                  this.$refs['ReturnAdd'].ReturnGoodsAdd=true;
                  this.$refs['ReturnAdd'].disableds=false;
              }
            },
            ReturnGoodsDaoRu(data){  //导入
                if(data==null){
                    this.$refs['ReturnGoodsDaoRuAdd'].ReturnGoodsDaoRuData={};
                    this.$refs['ReturnGoodsDaoRuAdd'].ReturnGoodsDaoRuDao=true;
                }
            },
            ReturnGoodsZhongZhi(){
                this.ReturnGoodsRequest={
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
                this.ReturnGoodsFindAdll();
            },
            ReturnGoodsFindAdll(){
                let local=localStorage.getItem("ReturnGoods");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.ReturnGoodsFindAll((this.ReturnGoodsRequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("ReturnGoods",JSON.stringify(res.data.data.rows));//设值
                        this.ReturnGoodsData=res.data.data.rows;
                    })
                }else if(this.ReturnGoodsRequest.noticeId!=''||this.ReturnGoodsRequest.imCusCode!=''||this.ReturnGoodsRequest.imCarNo!=''||this.ReturnGoodsRequest.imCarDri!=''||this.ReturnGoodsRequest.imCarMobile!=''||this.ReturnGoodsRequest.orderTypeCode!=''||this.ReturnGoodsRequest.platformCode!=''||this.ReturnGoodsRequest.imSta!=''){
                    standardApi.ReturnGoodsMoHu(this.ReturnGoodsRequest).then(res=>{
                        this.ReturnGoodsData=res.data.data.rows;
                    });
                }else{
                    this.ReturnGoodsData=list;
                }
            },
            ReturnGoodsColumnsFindAll(){
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
            }
        },
        created(){
            this.ReturnGoodsFindAdll();
        },
        components:{
            ReturnGoodsAdd:()=>import('@/views/ReturnsManagement/ReturnGoodsAdd/ReturnGoodsAdd.vue'),
            ReturnGoodsDaoRu:()=>import('@/views/ReturnsManagement/ReturnGoodsAdd/ReturnGoodsDaoRu.vue')
        }
    }
</script>

<style scoped>

</style>