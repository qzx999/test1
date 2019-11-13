<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="波次号:">
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
                    <FormItem label="客户订单号：">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="仓位:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="托盘:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="可用库存:">
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

        <Table :columns="waveExportColumns" :data="waveExportData" highlight-row >
            <template slot='header'>
                &nbsp;<Button @click="waveExportExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "waveExport",
        data(){
            return{
                waveExportColumns:this.waveExportColumnss(),
                waveExportData:[]
            }
        },
        methods:{
            waveExportColumnss(){
                let newDate=[
                    {tyep:'index',align:'center',title:'序号'},
                    {key:'createBy',align:'center',title:'创建人登录名称 '},
                    {key:'createName',align:'center',title:'创建人名称 '},
                    {key:'cusCode',align:'center',title:'货主 '},
                    {key:'cusName',align:'center',title:'客户昵称 '},
                    {key:'waveId',align:'center',title:'波次号'},
                    {key:'goodsId',align:'center',title:'商品编码 '},
                    {key:'goodsName',align:'center',title:'商品名称'},
                    {key:'imCusCode',align:'center',title:'客户订单号  '},
                    {key:'binId',align:'center',title:'仓位'},
                    {key:'tinId',align:'center',title:'托盘 '},
                    {key:'proData',align:'center',title:'生产日期 '},
                    {key:'baseGoodscount',align:'center',title:'数量 '},
                    {key:'omBeizhu',align:'center',title:'可用库存 '},
                    {key:'baseUnit',align:'center',title:'基本单位 '},
                    {key:'otp',align:'center',title:'操作 '},
                ]
                return newDate
            },
            //导出
            waveExportExport(){

            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
