<template>
    <div class="vp_warning">
        <Divider orientation="left">
            <span>效期预警</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="5">
                        <span class="title">商品编码：</span>
                        <Input type="text" v-model="queryForm.goodsId" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">客户商品编码：</span>
                        <Input type="text" v-model="queryForm.shpBianmakh" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">商品名称：</span>
                        <Input type="text" v-model="queryForm.shpMingCheng" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">客户编码：</span>
                        <Input type="text" v-model="queryForm.cusCode" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">客户名称：</span>
                        <Input type="text" v-model="queryForm.zhongWenQch" style="width: 140px"/>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="5">
                        <span>生产日期：</span>
                        <DatePicker type="date" v-model="queryForm.goodsProData" style="width: 140px"></DatePicker>
                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right">
                                <span>到期日：</span>
                            </Col>
                            <Col span="10">
                                <DatePicker type="date" v-model="queryForm.dqr" style="width: 140px"></DatePicker>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="10">
                        <Row>
                            <Col span="3">
                                <span class="title">剩余比例：</span>
                            </Col>
                            <Col span="7">
                                <Input type="text" v-model="queryForm.guoqiBiliStart" style="width: 140px"/>
                            </Col>
                            <Col span="1">
                                <span class="title">至：</span>
                            </Col>
                            <Col span="7">
                                <Input type="text" v-model="queryForm.guoqiBiliEnd" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="24" push="21">
                <Button @click="query">查询</Button>
                <Button @click="Reset">重置</Button>
            </Col>
        </Row>
        <Table :columns="myColumns" :data="myData" :loading="loading" border height="480">
            <template slot="loading">
                <h3 style="color: #000">数据正在加载中...</h3>
            </template>

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>
    </div>
</template>

<script>
    import * as vp_warningApi from '@/api/clientReport/vp_warningApi.js';
    export default {
        name: "vp_warning",
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
                    {key:'kuctype',title:'库存类型',align:'center',width:100},
                    {key:'goodsId',title:'商品编码',align:'center',width:100},
                    {key:'shpBianmakh',title:'客户商品编码',align:'center',width:110},
                    {key:'shpMingCheng',title:'商品名称',align:'center',width:100},
                    {key:'baseGoodscount',title:'基本数量',align:'center',width:100},
                    {key:'baseUnit',title:'基本单位',align:'center',width:100},
                    {key:'cusCode',title:'客户编码',align:'center',width:100},
                    {key:'zhongWenQch',title:'客户名称',align:'center',width:100},
                    {key:'goodsProData',title:'生产日期',align:'center',width:100},
                    {key:'bzhiQi',title:'保质期天',align:'center',width:100},
                    {key:'dqr',title:'到期日',align:'center',width:100},
                    {key:'resDate',title:'剩余天数',align:'center',width:100},
                    {key:'guoqiBili',title:'剩余比例',align:'center',width:100},
                ];
            },

            //获取列表数据
            getList(){
                vp_warningApi.getList(this.requestParameters).then(res =>{
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
                vp_warningApi.queryList(this.queryForm).then(res =>{
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
            pageChange() {
                this.$Message.success('换页');
                this.requestParameters.page = page;
                this.getList(this.requestParameters);
            },

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
