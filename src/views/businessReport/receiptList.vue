<template>
    <div>
       <Card dis-hover>
           <Row>
               <Col :span="6">
                   单号: <Input type="text" style="width: 150px;margin-left: 9%"/>
               </Col>
               <Col :span="6">
                   备注: <Input type="text" style="width: 150px;margin-left: 9%"/>
               </Col>
               <Col :span="6">
                   货主: <Select style="width: 150px"></Select>
               </Col>
               <Col :span="6">
                   回单时间: <DatePicker style="width: 200px" split-panels type="daterange"/>
               </Col>
           </Row>
           <Row style="margin-top:5px">
               <Button type="success" style="margin-left: 2px" icon="md-add">录入</Button>
               <Button style="margin-left: 2px" icon="md-search">查看</Button>
               <Button style="margin-left: 2px" icon="md-cloud-download">导入</Button>
               <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
               <Button style="margin-left: 2px" icon="md-download">模板下载</Button>
               <Button icon="md-search" style="margin-left: 49%">查询</Button>
               <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
           </Row>
       </Card>
        <Card dis-hover>
            <Table :columns="rcolumns" :data="rdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as ReceApi from '@/api/businessReport/receiptList.js'
    export default {
        name: "receiptList",
        data(){
            return {
                rcolumns:this.ReceColumns(),
                rdata:[],
                recerequestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            ReceColumns(){
                let rarr = [
                    {title:'创建人名称',key:'createName',align:'center'},
                    {title:'创建日期',key:'createDate',align:'center'},
                    {title:'单号',key:'wmNoticeId',align:'center'},
                    {title:'备注',key:'beizhu',align:'center'},
                    {title:'货主',key:'cusCode',align:'center'},
                    {title:'回单时间',key:'hdData',align:'center'},
                    {title:'操作',key:'opt',align:'center'}
                ];
                return rarr;
            },
            ReceiptTestDate(){
                let local = localStorage.getItem("Recedate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    ReceApi.ReceiptList(this.recerequestparams).then(res=>{
                        localStorage.setItem("Recedate",JSON.stringify(res.data.data.rows));
                        this.rdata = res.data.data.rows;
                    })
                }else{
                    this.rdata = list;
                }
            }
        },
        created() {
            this.ReceiptTestDate()
        }
    }
</script>

<style scoped>

</style>
