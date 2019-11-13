<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="通知单:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="验收日期:">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="货主:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品:">
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

        <Table :columns="acceptanceDetailColumns" :data="acceptanceDetailData" highlight-row >
            <template slot='header'>
                <!--  &nbsp;<Button type="success" @click="batchReceiptWindow(null)"><Icon type="md-add" />新增</Button>
                  &nbsp;<Button @click="batchReceiptImport" type="info"><Icon type="md-arrow-down" />导入</Button>-->
                &nbsp;<Button @click="acceptanceDetailExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                <!--&nbsp;<Button @click="batchReceiptTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>-->
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "acceptanceDetail",
        data(){
            return{
                acceptanceDetailColumns:this.acceptanceDetailColumnss(),
                acceptanceDetailData:[]
            }
        },
        methods:{
            acceptanceDetailExport(){

            },
            acceptanceDetailColumnss(){
                let newData=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'create_date',align:'center',title:'验收期日'},
                    {key:'create_name',align:'center',title:'验收人'},
                    {key:'create_by',align:'center',title:'验收账号'},
                    {key:'im_notice_id',align:'center',title:'通知单'},
                    {key:'item_text',align:'center',title:'品质'},
                    {key:'rec_deg',align:'center',title:'收获温度'},
                    {key:'ku_wei_bian_ma',align:'center',title:'建议储位'},
                    {key:'bin_id',align:'center',title:'托盘'},
                    {key:'cus_code',align:'center',title:'货主'},
                    {key:'zhong_wen_qch',align:'center',title:'货主名称'},
                    {key:'goods_code',align:'center',title:'商品'},
                    {key:'shp_ming_cheng',align:'center',title:'商品名称'},
                    {key:'goods_pro_data',align:'center',title:'生产日期'},
                    {key:'bzhi_qi',align:'center',title:'保质期'},
                    {key:'base_unit',align:'center',title:'单位'},
                    {key:'base_goodscount',align:'center',title:'数量'},
                    {key:'zhl_kg',align:'center',title:'单箱重量KG'},
                    {key:'sumzhl',align:'center',title:'总重量KG'},
                ]
                return newData
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
