<template>
    <div>
        <Divider orientation="left">
            <span>出库明细</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem>
                <Row>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>出库单号：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.om_notice_id" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>第三方单号：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.im_cus_code" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>第三方客户：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocus_code" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="9" align="right"><span>第三方客户名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocus_name" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>备注：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.om_beizhu" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>地址：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.delv_addr" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>商品编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.goods_id" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>商品名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.goods_name" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FormItem>
        </Form>

        <Row>
            <Col span="20">

                <Button @click="">导出excel</Button>
            </Col>
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
    import * as outLibraryDetailApi from '@/api/outGoods/outLibraryDetailApi.js';
    export default {
        name: "outLibraryDetail",
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
                    {key:'om_sta',title:'状态',align:'center',width:100},
                    {key:'om_notice_id',title:'出库单号',align:'center',width:100},
                    {key:'im_cus_code',title:'第三方单号',align:'center',width:100},
                    {key:'ocus_code',title:'第三方客户',align:'center',width:100},
                    {key:'ocus_name',title:'第三方客户名称',align:'center',width:100},
                    {key:'om_beizhu',title:'备注',align:'center',width:100},
                    {key:'delv_addr',title:'地址',align:'center',width:100},
                    {key:'goods_id',title:'商品编码',align:'center',width:100},
                    {key:'goods_name',title:'商品名称',align:'center',width:100},
                    {key:'base_goodscount',title:'出货单数量',align:'center',width:100},
                    {key:'goods_unit',title:'单位',align:'center',width:100},
                    {key:'sumqua',title:'拣货数量',align:'center',width:100},
                ];
            },

            //获取列表数据
            getList(){
                outLibraryDetailApi.getList(this.requestParameters).then(res =>{
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
                outLibraryDetailApi.queryList(this.queryForm).then(res =>{
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
