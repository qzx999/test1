<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="出货订单:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="出货日期:">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='4'>
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
                    <FormItem label="商品编码：">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="出货储位:">
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

        <Table :columns="enRouteInventoryColumns" :data="enRouteInventoryData" highlight-row >
             <template slot='header'>
               <!--  &nbsp;<Button type="success" @click="batchReceiptWindow(null)"><Icon type="md-add" />新增</Button>
                 &nbsp;<Button @click="batchReceiptImport" type="info"><Icon type="md-arrow-down" />导入</Button>-->
                 &nbsp;<Button @click="enRouteInventoryExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
               <!--  &nbsp;<Button @click="batchReceiptTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>-->
             </template>
        </Table>

    </div>
</template>

<script>
    export default {
        name: "en_routeInventory",
        data(){
            return{
                enRouteInventoryColumns:this.enRouteInventoryColumnss(),
                enRouteInventoryData:[]
            }
        },
        methods:{
            //导出
            enRouteInventoryExport(){

            },
            //获取数据
            enRouteInventoryColumnss(){
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'kuctype',title:'库存类型',align:'center'},
                    {key:'order_id',title:'出货订单',align:'center'},
                    {key:'create_date',title:'出货日期',align:'center'},
                    {key:'cus_code',title:'客户编码',align:'center'},
                    {key:'zhongWenQch',title:'客户名称',align:'center'},
                    {key:'goodsId',title:'商品编码',align:'center'},
                    {key:'shpMingCheng',title:'商品名称',align:'center'},
                    {key:'goodsQuaok',title:'出货数量',align:'center'},
                    {key:'shlDanWei',title:'单位',align:'center'},
                    {key:'goodsProData',title:'生产日期',align:'center'},
                    {key:'kuWeiDianMa',title:'出货储位',align:'center'},
                ]
                return newDate
            }
        },
        created() {
            for(let i=0;i<3;i++){
                this.enRouteInventoryData.push({
                'kuctype':'12312',
                'order_id':'123123',
                'create_date':new Date(),
                'cus_code':12312,
                'zhongWenQch':'郭雪柯',
                'goodsId':'A0000',
                'shpMingCheng':'香烟',
                'goodsQuaok':1,
                'shlDanWei':"陈村",
                'goodsProData':new Date(),
                'kuWeiDianMa':12312,
                })
            }
        }
    }
</script>

<style scoped>

</style>
