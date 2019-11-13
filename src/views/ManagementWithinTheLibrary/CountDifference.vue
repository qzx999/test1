<template>
    <div>
       <Card dis-hover>
           <Row>
               <Col :span="6">
                   盘点人: <Input type="text" style="width:150px;margin-left: 5%"/>
               </Col>
               <Col :span="6">
                   储位: <Input type="text" style="width:150px"/>
               </Col>
               <Col :span="6">
                   托盘: <Input type="text" style="width:150px;margin-left: 9%"/>
               </Col>
               <Col :span="6">
                   商品编码: <Input type="text" style="width:150px"/>
               </Col>
           </Row>
           <Row style="margin-top: 5px">
               <Col :span="6">
                   商品名称: <Input type="text" style="width:150px"/>
               </Col>
               <Col :span="6">
                   货主: <Input type="text" style="width:150px"/>
               </Col>
               <Col :span="6">
                   货主编码: <Input type="text" style="width:150px"/>
               </Col>
           </Row>
           <Row style="margin-top: 5px">
               <Button icon="md-cloud-upload">导出</Button>
               <Button icon="md-search" style="margin-left: 70%">查询</Button>
               <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
           </Row>
       </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="countdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as CountApi from '@/api/ManagementWithinTheLibrary/CountDifference.js'
    export default {
        name: "CountDifference",
        data(){
            return {
                columns:this.countcolumns(),
                countdata:[],
                countresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            countcolumns(){
                let countarr = [
                    {title:'序号',type:'index',align:'center'},
                    {title:'盘点人',key:'updateName',align:'center'},
                    {title:'盘点日期',key:'updateDate',align:'center'},
                    {title:'储位',key:'binId',align:'center'},
                    {title:'托盘',key:'tinId',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'账目数量',key:'goodsQua',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'盘点数量',key:'sttQua',align:'center'},
                    {title:'货主',key:'cusName',align:'center'},
                    {title:'货主编码',key:'cusCode',align:'center'},
                    {title:'盘点状态',key:'sttSta',align:'center'},
                ];
                return countarr;
            },
            CountGetTestDate(){
                CountApi.CountList(this.countresquestparams).then(res=>{
                    this.countdata = res.data.data.rows;
                    this.countresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.CountGetTestDate();
        }
    }
</script>

<style scoped>

</style>