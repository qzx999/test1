<template>
    <div>
        <Divider orientation="left">
            <span>退货验收</span>
        </Divider>
        <div>
            <Row>
                <Col span="4">
                    <span>到货通知单：</span>
                    <Input type="text" v-model="ReturnsReturnsrequest.imNoticeId" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>商品编码：</span>
                    <Input type="text" v-model="ReturnsReturnsrequest.goodsCode" style="width: 100px"/>
                </Col>
                <Col span="4">
                    <span>商品名称：</span>
                    <Input type="text" v-model="ReturnsReturnsrequest.goodsName" style="width: 100px"/>
                </Col>
            </Row>
           <Row>
               <Col :span="12" style="margin-left:50%">
                   <Button @click="ReturnsReturnsFind" icon="ios-search" style="margin-left: 400px">查询</Button>
                   <Button @click="ReturnsReturnsZhi1"icon="ios-search">重置</Button>
               </Col>
           </Row>
        </div>
        <Table :columns="ReturnsMaterialColumns" :data="ReturnsMaterialData">

        </Table>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/ReturnsMaterial.js'
    export default {
        name: "ReturnsMaterial",
        data(){
           return{
               ReturnsMaterialColumns:this.MaterialColumns(),
               ReturnsMaterialData:[],
               ReturnsReturnsrequest:{
                   page:1,
                   size:10,
                   total:0,
                   imNoticeId:'',
                   goodsCode:'',
                   goodsName:''
               }
           }
        },
        methods:{
            ReturnsReturnsFind(){
                let local=localStorage.getItem("ReturnsMaterial");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.ReturnsReturnsFindAll((this.ReturnsReturnsrequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("ReturnsMaterial",JSON.stringify(res.data.data.rows));//设值
                        this.ReturnsMaterialData=res.data.data.rows;
                    })
                }else if(this.ReturnsReturnsrequest.imNoticeId!=''||this.ReturnsReturnsrequest.goodsCode||this.ReturnsReturnsrequest.goodsName){
                    standardApi.ReturnsReturnsMoHu(this.ReturnsReturnsrequest).then(res=>{
                        this.ReturnsMaterialData=res.data.data.rows;
                    });
                }else{
                    this.ReturnsMaterialData=list;
                }
            },
            ReturnsReturnsZhi1(){
                this.ReturnsReturnsrequest={
                    page:1,
                    size:10,
                    total:0,
                    imNoticeId:'',
                    goodsCode:'',
                    goodsName:''
                }
                this.ReturnsReturnsFind();
            },
            MaterialColumns(){
                let arr=[
                    {type:'selection',title:'序号',align:'center'},
                    {title:'操作',key:'opt',align:'center'},
                    {title:'到货通知单',key:'imNoticeId',align:'center'},
                    {title:'商品编码',key:'goodsCode',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'预约数量',key:'goodsCount',align:'center'},
                    {title:'已登录数量',key:'goodsQmCount',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                ]
                return arr;
            }
        },
        created(){
            this.ReturnsReturnsFind();
        }
    }
</script>

<style scoped>

</style>