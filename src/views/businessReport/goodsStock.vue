<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    储位: <Input type="text" style="width: 150px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    托盘: <Input type="text" style="width: 150px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    客户编码: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    客户名称: <Input type="text" style="width: 150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    商品编码: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width: 150px"/>
                </Col>
            </Row>
            <Row style="margin-top:5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 75%" @click="GoodsTestDate">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="gcolumns" :data="gdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as GoodsApi from '@/api/businessReport/goodsStock.js'
    export default {
        name: "goodsStock",
        data(){
            return {
                gcolumns:this.GoodsStockColumns(),
                gdata:[],
                goodsrequestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            GoodsStockColumns(){
                let garr = [
                    {title:'储位',key:'kuweibianma',align:'center'},
                    {title:'托盘',key:'binid',align:'center'},
                    {title:'客户编码',key:'cuscode',align:'center'},
                    {title:'客户名称',key:'zhongwenqch',align:'center'},
                    {title:'商品编码',key:'goodsid',align:'center'},
                    {title:'商品名称',key:'shpmingcheng',align:'center'},
                    {title:'数量',key:'basegoodscount',align:'center'},
                    {title:'单位',key:'baseunit',align:'center'},
                    {title:'生产日期',key:'goodsprodata',align:'center'},
                    {title:'保质期(天)',key:'bzhiqi',align:'center'},
                    {title:'库存类型',key:'kuctype',align:'center'},
                    {title:'到期日',key:'dqr',align:'center'},
                    {title:'库位类型',key:'kuweileixing',align:'center'},
                    {title:'规格',key:'shpguige',align:'center'},
                ];
                return garr;
            },
            GoodsTestDate(){
                let local = localStorage.getItem("Goodsdate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    GoodsApi.GoodsList(this.goodsrequestparams).then(res=>{
                        localStorage.setItem("Goodsdate",JSON.stringify(res.data.data.rows));
                        this.gdata = res.data.data.rows;
                    })
                }else{
                    this.gdata = list;
                }
            }
        },
        created() {
            this.GoodsTestDate()
        }
    }
</script>

<style scoped>

</style>
