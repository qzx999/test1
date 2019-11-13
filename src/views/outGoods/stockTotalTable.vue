<template>
    <div>
        <Form :label-width="100">
        <Row style="margin-top: 15px">
            <Col span='4'>
                <FormItem label="储位:">
                    <Input type="text"></Input>
                </FormItem>
            </Col>
            <Col span='4'>
                <FormItem label="托盘:">
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
            <Col span='4'>
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

        <Table :columns="stockTotalTableColumns" :data="stockTotalTableData" highlight-row >
            <template slot='header'>
                <!--  &nbsp;<Button type="success" @click="batchReceiptWindow(null)"><Icon type="md-add" />新增</Button>
                  &nbsp;<Button @click="batchReceiptImport" type="info"><Icon type="md-arrow-down" />导入</Button>-->
                &nbsp;<Button @click="stockTotalTableExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                <!--  &nbsp;<Button @click="batchReceiptTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>-->
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "stockTotalTable",
        data(){
         return{
             stockTotalTableColumns:this.stockTotalTableColumnss()
         }
        },
        methods:{
            //导入
            stockTotalTableExport(){

            },
            stockTotalTableColumnss(){
            let newData=[
                {type:'index',title:'序号',align:'center'},
                {type:'kuWeiDianMa',title:'储位',align:'center'},
                {type:'binId',title:'托盘',align:'center'},
                {type:'goodsId',title:'商品编码',align:'center'},
                {type:'shpMingCheng',title:'商品名称',align:'center'},
                {type:'shpGuiGe',title:'规格',align:'center'},
                {type:'baseUnit',title:'单位',align:'center'},
                {type:'baseGoodscount',title:'总库存',align:'center'},
                {type:'daixiaj',title:'待下架库存',align:'center'},
                {type:'keyongkucun',title:'可用库存',align:'center'},
                {type:'goodsroData',title:'生产日期',align:'center'},
                {type:'bzhi_qi',title:'保质期',align:'center'},
                {type:'dqr',title:'到期日',align:'center'},
                {type:'kuWeiLeiXing',title:'库位类型',align:'center'},
            ]
            return newData
        }
    }
    }
</script>

<style scoped>

</style>
