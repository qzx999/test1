<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    储位: <Input type="text" style="width:200px;margin-left: 18%"/>
                </Col>
                <Col :span="6">
                    托盘: <Input type="text" style="width:200px"/>
                </Col>
                <Col :span="6">
                    商品编码: <Input type="text" style="width:200px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width:200px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    最后拣货时间: <DatePicker style="width: 200px" split-panels type="daterange"></DatePicker>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 60%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="dynamdata"></Table>
        </Card>
    </div>
</template>


<script>
    import * as DynaApi from '@/api/ManagementWithinTheLibrary/DynamicInventory.js'
    export default {
        name: "DynamicInventory",
        data(){
            return {
                columns:this.dynamcolumns(),
                dynamdata:[],
                dynamresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            dynamcolumns(){
                let dynamarr = [
                    {title:'储位',key:'kuWeiBianMa',align:'center'},
                    {title:'托盘',key:'binId',align:'center'},
                    {title:'商品编码',key:'goodsCode',align:'center'},
                    {title:'商品名称',key:'shpMingCheng',align:'center'},
                    {title:'规格',key:'shpGuiGe',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'保质期',key:'bzhiQi',align:'center'},
                    {title:'批次',key:'goodsBatch',align:'center'},
                    {title:'到期日',key:'dqr',align:'center'},
                    {title:'总库存',key:'baseGoodscount',align:'center'},
                    {title:'最后拣货时间',key:'lastDate',align:'center'},
                    {title:'可用库存',key:'keyongkucun',align:'center'},
                    {title:'待下架',key:'daixiaj',align:'center'},
                    {title:'单位',key:'baseUnit',align:'center'}
                ];
                return dynamarr;
            },
            DynaTestDate(){
                DynaApi.DynaList(this.dynamresquestparams).then(res=>{
                    this.dynamdata = res.data.data.rows;
                    this.dynamresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.DynaTestDate()
        }
    }
</script>

<style scoped>

</style>