<template>
    <div>
        <Divider>装货费</Divider>
        <Card>
            <Row>
                <Col :span="6">
                    操作人: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    单号: <Select style="width: 150px"></Select>
                </Col>
                <Col :span="6">
                    商品: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    操作日期: <DatePicker style="width: 200px" split-panels type="daterange"/>
                </Col>
            </Row>
            <Row style="margin-top:5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 75%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="Lcolumns" :data="Ldata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as LoadingApi from '@/api/businessReport/outsourcingLoading.js'
    export default {
        name: "outsourcingLoading",
        data(){
            return {
                Lcolumns:this.LoadingColumns(),
                Ldata:[],
                Loadingrequestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            LoadingColumns(){
                let Larr = [
                    {title:'费用',key:'feiyong',align:'center'},
                    {title:'操作人',key:'createname',align:'center'},
                    {title:'操作日期',key:'createdate',align:'center'},
                    {title:'单号',key:'orderid',align:'center'},
                    {title:'商品',key:'goodsid',align:'center'},
                    {title:'商品名称',key:'shpmingcheng',align:'center'},
                    {title:'商品数',key:'qmcount',align:'center'},
                    {title:'重量KG',key:'grcount',align:'center'},
                    {title:'费用RMB',key:'grcountfy',align:'center'},
                    {title:'单价/吨',key:'danjia',align:'center'}
                ];
                return Larr;
            },
            LoadingTestDate(){
                let local = localStorage.getItem("Loadingdate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    LoadingApi.outsourcingLoadingList(this.Loadingrequestparams).then(res=>{
                        localStorage.setItem("Loadingdate",JSON.stringify(res.data.data.rows));
                        this.Ldata = res.data.data.rows;
                    })
                }else{
                    this.Ldata = list;
                }
            }
        },
        created() {
            this.LoadingTestDate()
        }
    }
</script>

<style scoped>

</style>
