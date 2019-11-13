<template>
    <div>
        <Divider orientation="left">
            <span>出库通知项目</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="5">
                        <span>出库单号：</span>
                        <Input type="text" v-model="queryForm.omNoticeId" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>客户订单号：</span>
                        <Input type="text" v-model="queryForm.imCusCode" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>备注：</span>
                        <Input type="text" v-model="queryForm.omBeizhu" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>商品名称：</span>
                        <Input type="text" v-model="queryForm.goodsName" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>托盘：</span>
                        <Input type="text" v-model="queryForm.binId" style="width: 140px"/>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row type="flex" justify="end">
            <Col span="4">
                <Button @click="query">查询</Button>
                <Button @click="Reset">重置</Button>
            </Col>
        </Row>
        <Table :columns="myColumns" :data="myData" :loading="loading" :border="true" height="480">
            <template slot="loading">
                <h3 style="color: #000">数据正在加载中...</h3>
            </template>

            <template slot="btn" slot-scope="scope">
                <Button type="success" ghost icon="ios-eye" size="small" @click="showInfo(scope.row)">查看</Button>
                <Button type="info" ghost icon="md-cut" size="small" @click="infoOperating(scope.row)">修改</Button>
                <Button type="error" ghost icon="md-trash" size="small" @click="out(scope.row)">删除</Button>

            </template>

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>


    </div>
</template>

<script>
    import * as outLibraryNoticeProjectApi from '@/api/outGoods/outLibraryNoticeProjectApi.js';
    export default {
        name: "outLibraryNoticeProject",
        data() {
            return {
                loading:true,
                myColumns:this.initMyColumns(),
                myData:[],
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                queryForm:{},
            }
        },

        methods:{
            //初始化表头
            initMyColumns(){
                return[
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {key:'createName',title:'创建人',align:'center'},
                    {key:'omNoticeId',title:'出库单号',align:'center'},
                    {key:'imCusCode',title:'客户订单号',align:'center'},
                    {key:'omBeizhu',title:'备注',align:'center'},
                    {key:'goodsName',title:'商品名称',align:'center'},
                    {key:'goodsQua',title:'出货数量',align:'center'},
                    {key:'goodsUnit',title:'出货单位',align:'center'},
                    {key:'goodsProData',title:'生产日期',align:'center'},
                    {key:'baseGoodscount',title:'基本单位数量',align:'center'},
                    {key:'baseUnit',title:'基本单位',align:'center'},
                    {key:'binId',title:'托盘',align:'center'},
                    {key:'planSta',title:'下架计划生成状态',align:'center'},
                ];
            },

            //获取列表数据
            getList(){
                outLibraryNoticeProjectApi.getList(this.requestParameters).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //条件查询
            query(){
                outLibraryNoticeProjectApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //重置表单
            Reset(){
                this.queryForm = {};
                this.getList();
            },

            //换页
            pageChange() {
                this.$Message.success('换页');
                this.requestParameters.page = page;
                this.getList(this.requestParameters);
            },

            //换页容量
            pageSizeChange() {
                this.$Message.success('更换页容量');
                this.requestParameters.size = size;
                if(this.requestParameters.page == 1){
                    this.getList(this.requestParameters);
                }
            },
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
