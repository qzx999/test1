<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="通知单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="客户编码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="客户名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="通知单状态:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品编码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="客户订单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="生产日期:">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='4'>
                    &nbsp;
                    <Button type="info">
                        <Icon type="md-search" />
                        查询
                    </Button>
                    &nbsp; <Button type="info" @click="PurchaseDetailsReset">
                    <Icon type="md-sync" />
                    重置
                </Button>

                </Col>
            </Row>
        </Form>
        <Table :columns="PurchaseDetailsColumns" :data="PurchaseDetailsData" :loading='loading'  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp;<Button @click="PurchaseDetailsExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
            </template>
            <template slot="loading">
                <h1>
                    正在加载请稍后。。。。。
                </h1>
            </template>
        </Table>

        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                PurchaseDetailsColumns:this.PurchaseDetailsColumnss(),
                PurchaseDetailsData:[],
                loading:true,
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
            }
        },
        methods:{
            //进货通知明细分页
            subPageChange(page){
                this.requestParameters.page = page;
                this.getData(this.requestParameters);
            },
            subPageSizeChange(size){
                this.requestParameters.size = size;
                if(this.requestParameters.page == 1){
                    this.getData(this.requestParameters);
                }
            },
            PurchaseDetailsColumnss(){
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'noticeId',title:'通知单号',align:'center'},
                    {key:'cusCode',title:'客户编码 ',align:'center'},
                    {key:'clientName',title:'客户名称',align:'center'},
                    {key:'imSta',title:'通知单状态',align:'center'},
                    {key:'goodsCode',title:'商品编码',align:'center'},
                    {key:'shpMingCheng',title:'商品名称',align:'center'},
                    {key:'goodsCount',title:'通知单数量 ',align:'center'},
                    {key:'goodsQmCount',title:'验收数量 ',align:'center'},
                    {key:'shlDanWei',title:'单位',align:'center'},
                    {key:'goodsFvol',title:'体积CM3 ',align:'center'},
                    {key:'goodsWeight',title:'重量KG ',align:'center'},
                    {key:'imCusCode',title:'客户订单号 ',align:'center'},
                    {key:'baseGoodscount',title:'基本单位数量 ',align:'center'},
                    {key:'baseUnit',title:'基本单位 ',align:'center'},
                    {key:'goodsPrdData',title:'生产日期 ',align:'center'},
                ]
                return newDate
            },
            changeTableData(){

            },
            //导出excel
            PurchaseDetailsExport(){

            },
            //动态加载表格数据
            getPurchaseDetailsList(){
                for(let i=0;i<3;i++){
                    this.PurchaseDetailsData.push({
                        "noticeId":213,
                        "cusCode":1231,
                        "clientName":"老板",
                        "imSta":1,
                        "goodsCode":12312,
                        "shpMingCheng":"好东西",
                        "goodsCount":13,
                        "goodsQmCount":13,
                        "shlDanWei":'陈村',
                        "goodsFvol":12,
                        "goodsWeight":12,
                        "imCusCode":12312,
                        "baseGoodscount":12,
                        "baseUnit":"陈村",
                        "goodsPrdData":new Date(),
                    })
                }

                this.loading=false
            },
            //重置
            PurchaseDetailsReset(){
                this.PurchaseDetailsData=[]
                this.getPurchaseDetailsList()
            }
        },
        created(){
            this.getPurchaseDetailsList()

        }
    }
</script>