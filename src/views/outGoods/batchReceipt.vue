<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='3'>
                    <FormItem label="客户订单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="备注:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="出货单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="客户:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="回单时间:">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="收货人:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="收货人电话:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="承运人:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="承运人电话:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="承运人车号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='3'>
                    <FormItem label="发货云台:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="状态:">
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
        <Table :columns="batchReceiptColumns" :data="batchReceiptData" highlight-row >
           <!-- <template slot='header'>
                &nbsp;<Button type="success" @click="batchReceiptWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button @click="batchReceiptImport" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="batchReceiptExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="batchReceiptTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>-->
        </Table>


    </div>
</template>

<script>
    export default {
        name: "batchReceipt",
        data(){
            return{
                batchReceiptColumns:this.batchReceiptColumnss(),
                batchReceiptData:[],
            }
        },
        methods:{
            batchReceiptColumnss(){
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'createName',title:'创建人名称',align:'center'},
                    {key:'createDate',title:'创建日期',align:'center'},
                    {key:'imCusCode',title:'客户订单号',align:'center'},
                    {key:'omBeizhu',title:'备注',align:'center'},
                    {key:'omNoticeId',title:'出货单号',align:'center'},
                    {key:'cusCode',title:'客户',align:'center'},
                    {key:'delvData',title:'回单时间',align:'center'},
                    {key:'delvMember',title:'收货人',align:'center'},
                    {key:'delvMobile',title:'收货人电话',align:'center'},
                    {key:'delvAddr',title:'收货人地址',align:'center'},
                    {key:'delvAddr',title:'承运人',align:'center'},
                    {key:'reMobile',title:'承运人电话',align:'center'},
                    {key:'reCarno',title:'承运人车号',align:'center'},
                    {key:'omPlatNo',title:'发货人月台',align:'center'},
                    {key:'omSta',title:'状态',align:'center',render(h,params){
                            return h('p',params.row.omSta===1 ? "复核完成" : "复核未完成")
                        }},
                ]
                return newDate
            }
        },
        created() {
            for (let i=0;i<3;i++) {
                this.batchReceiptData.push({
                'createName':'郭雪柯',
                'createDate':new Date(),
                'imCusCode':123123,
                'omBeizhu':"sdsds",
                'omNoticeId':12312,
                'cusCode':"郭雪柯",
                'delvData':new Date(),
                'delvMember':'郭雪柯',
                'delvMobile':'1323122',
                'delvAddr':'ssds',
                'delvAddr':"郭雪柯",
                'reMobile':12312312,
                'reCarno':'A666',
                'omPlatNo':'ssss',
                'omSta':1,
                })
            }
        }
    }
</script>

<style scoped>

</style>
