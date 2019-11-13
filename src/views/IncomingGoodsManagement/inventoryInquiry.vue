<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='3'>
                    <FormItem label="储位：">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="托盘:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="客户编码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="客户名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="商品编码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="商品名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    &nbsp;
                    <Button type="info">
                        <Icon type="md-search" />
                        查询
                    </Button>
                    &nbsp; <Button type="info">
                    <Icon type="md-sync" />
                    重置
                </Button>
                </Col>
            </Row>
        </Form>
        <Table :columns="inventoryInquiryColumns" :data="inventoryInquiryData" :loading='loading'  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp;<Button @click="PurchaseDetailsExport" type="info"><Icon type="ios-cloud-upload-outline" />导出excel</Button>
            </template>
            <template slot="loading">
                <h1>
                    正在加载请稍后。。。。。
                </h1>
            </template>
        </Table>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                inventoryInquiryColumns:this.inventoryInquiryColumnss(),
                inventoryInquiryData:[],
                loading:false
            }
        },
        methods:{
            //导出
            PurchaseDetailsExport(){

            },
            //获取表头
            inventoryInquiryColumnss(){
                let newDate=[
                    {type:"index",title:'序号',align:'center'},
                    {key:"chuWeiBianMa",title:'储位',align:'center'},
                    {key:"bind",title:'托盘',align:'center'},
                    {key:"cusode",title:'客户编码',align:'center'},
                    {key:"zhongWenQch",title:'客户名称',align:'center'},
                    {key:"goodsId",title:'商品编码',align:'center'},
                    {key:"shpMingCheng",title:'商品名称',align:'center'},
                    {key:"baseoodscount",title:'数量',align:'center'},
                    {key:"basenit",title:'单位',align:'center'},
                    {key:"goodsProData",title:'生产日期',align:'center'},
                    {key:"bzhiQi",title:'保质期（天)',align:'center'},
                    {key:"kuctype",title:'库存类型',align:'center'},
                    {key:"dqr",title:'到期日',align:'center'},
                    {key:"kuWeiLeiXing",title:'库位类型',align:'center'},
                ]
                return newDate
            },
            changeTableData(){

            },
            //获取库存查询列表数据
            getInventoryInquiryList(){
                for (let i=0;i<3;i++){
                    this.inventoryInquiryData.push({
                    "chuWeiBianMa":1,
                    "bind":'1',
                    "cusode":'12',
                    "zhongWenQch":'123',
                    "goodsId":'12312',
                    "shpMingCheng":'1231',
                    "baseoodscount":'1231',
                    "basenit":'3123',
                    "goodsProData":new Date(),
                    "bzhiQi":12,
                    "kuctype":'s',
                    "dqr":new Date(),
                    "kuWeiLeiXing":2,
                    })
                }
            }
        },
        created() {
            this.getInventoryInquiryList()
        }
    }
</script>