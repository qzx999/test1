<template>
    <div>
        <Divider>卸货费</Divider>
        <Card>
            <Row>
                <Col :span="6">
                    验收人: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    商品: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    单号: <Select style="width: 150px"></Select>
                </Col>
                <Col :span="6">
                    验收日期: <DatePicker style="width: 200px" split-panels type="daterange"/>
                </Col>
            </Row>
            <Row style="margin-top:5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 75%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="Ucolumns" :data="Udata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as UnloadingApi from '@/api/businessReport/outsourcingDischarge.js'
    export default {
        name: "outsourcingDischarge",
        data(){
            return {
                Ucolumns:this.UnloadingColumns(),
                Udata:[],
                udrequestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            UnloadingColumns(){
                let uarr = [
                    {title:'费用',key:'feiyong',align:'center'},
                    {title:'验收人',key:'createname',align:'center'},
                    {title:'验收日期',key:'createdate',align:'center'},
                    {title:'单号',key:'imnoticeid',align:'center'},
                    {title:'商品',key:'goodsid',align:'center'},
                    {title:'商品名称',key:'shpmingcheng',align:'center'},
                    {title:'卸货数',key:'qmcount',align:'center'},
                    {title:'重量KG',key:'grcount',align:'center'},
                    {title:'费用RMB',key:'grcountfy',align:'center'},
                    {title:'单价/吨',key:'danjia',align:'center'}
                ];
                return uarr;
            },
            UnloadingTestDate(){
                let local = localStorage.getItem("Unloadingdate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    UnloadingApi.outsourcingDischargeList(this.udrequestparams).then(res=>{
                        localStorage.setItem("Unloadingdate",JSON.stringify(res.data.data.rows));
                        this.Udata = res.data.data.rows;
                    })
                }else{
                    this.Udata = list;
                }
            }
        },
        created() {
            this.UnloadingTestDate()
        }
    }
</script>

<style scoped>

</style>
