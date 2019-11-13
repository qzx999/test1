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
                    <FormItem label="客户编码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="储位类型:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="创建时间:">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>

                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="单号:">
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
        <Table :columns="enterOutReportColumns" :data="enterOutReportData" highlight-row >
             <template slot='header'>
               <!--  &nbsp;<Button type="success" @click="batchReceiptWindow(null)"><Icon type="md-add" />新增</Button>
                 &nbsp;<Button @click="batchReceiptImport" type="info"><Icon type="md-arrow-down" />导入</Button>-->
                 &nbsp;<Button @click="enterOutReportExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                 <!--&nbsp;<Button @click="batchReceiptTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>-->
             </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "enterOutReport",
        data(){
            return{
                enterOutReportColumns:this.enterOutReportColumnss(),
                enterOutReportData:[]
            }
        },
        methods:{
            //导出
            enterOutReportExport(){

            },
            enterOutReportColumnss(){
                let newData=[
                    {type:'index',align:'center',title:'序号'},
                    {key:'kuWeiDianMa',align:'center',title:'储位'},
                    {key:'binId',align:'center',title:'托盘'},
                    {key:'cusCode',align:'center',title:'客户编码'},
                    {key:'zhongWenQch',align:'center',title:'客户名称'},
                    {key:'shpMingCheng',align:'center',title:'商品'},
                    {key:'goodsProData',align:'center',title:'生产日期'},
                    {key:'baseGoodscount',align:'center',title:'数量'},
                    {key:'baseUnit',align:'center',title:'单位'},
                    {key:'leixing',align:'center',title:'储位类型'},
                    {key:'createDate',align:'center',title:'创建时间'},
                    {key:'orderId',align:'center',title:'单号'}
                ]
                return newData
            }
        },
        created() {
            for (let i=0;i<1;i++){
                this.enterOutReportData.push({




                })


            }
        }
    }
</script>

<style scoped>

</style>
