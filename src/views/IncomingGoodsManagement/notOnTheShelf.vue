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

        <Table :columns="notOnTheShelfColumns" :data="notOnTheShelfData" :loading='loading'  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp;<Button @click="PurchaseDetailsExport" type="info"><Icon type="ios-cloud-upload-outline" />导出excel</Button>
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
                notOnTheShelfColumns:this.notOnTheShelfColumnss(),
                notOnTheShelfData:[],
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
                loading:false
            }
        },
        methods:{
            PurchaseDetailsExport(){

            },
            notOnTheShelfColumnss(){
                    let newDate=[
                        {type:"index",title:'序号',align:'center'},
                        {key:'binId',title:'储位',align:'center'},
                        {key:'tinId',title:'托盘',align:'center'},
                        {key:'cusCode',title:'客户编码',align:'center'},
                        {key:'zhongWenQch',title:'客户名称',align:'center'},
                        {key:'goodsId',title:'商品编码',align:'center'},
                        {key:'shpMingCheng',title:'商品名称',align:'center'},
                        {key:'qmOkQuat',title:'数量',align:'center'},
                        {key:'shlDanWei',title:'单位',align:'center'},
                        {key:'proData',title:'生产日期',align:'center'},
                        {key:'createDate',title:'收货时间',align:'center'},
                        {key:'bzhiQi',title:'保质期（天）',align:'center'}
                    ]
                return newDate
            },
            changeTableData(){

            },
            //获取表格数据方法
            getnotOnTheShelfList(){
                for(let i=0;i<3;i++){
                    this.notOnTheShelfData.push({
                    'binId':1,
                    'tinId':1,
                    'cusCode':12,
                    'zhongWenQch':"郭雪柯",
                    'goodsId':"121",
                    'shpMingCheng':'辣条',
                    'qmOkQuat':12,
                    'shlDanWei':"包",
                    'proData':new Date(),
                    'createDate':new Date(),
                    'bzhiQi':30,
                    })
                }
            },
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
        },
        created() {
            this.getnotOnTheShelfList()
        }
    }
</script>