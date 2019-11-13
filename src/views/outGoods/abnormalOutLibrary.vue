<template>
    <div>
        <Divider orientation="left">
            <span>出货异常</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="5">
                        <span>通知单号：</span>
                        <Input type="text" v-model="queryForm.om_notice_id" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>第三方单号：</span>
                        <Input type="text" v-model="queryForm.im_cus_code" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>第三方客户：</span>
                        <Input type="text" v-model="queryForm.ocus_code" style="width: 140px"/>
                    </Col>

                    <Col span="5">
                        <span>第三方客户名称：</span>
                        <Input type="text" v-model="queryForm.ocus_name" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>备注：</span>
                        <Input type="text" v-model="queryForm.om_beizhu" style="width: 140px"/>
                    </Col>
                </Row>
                <Row>
                    <Col span="5">
                        <span>商品编码：</span>
                        <Input type="text" v-model="queryForm.goods_id" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span> 商 品 名称 ：  </span>
                        <Input type="text" v-model="queryForm.goods_name" style="width: 140px"/>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="exportInfo">导出excel</Button>
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

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>
    </div>
</template>

<script>
    import * as abnormalOutLibraryApi from '@/api/outGoods/abnormalOutLibraryApi.js';
    export default {
        name: "abnormalOutLibrary",
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
                    {key:'om_notice_id',title:'通知单号',align:'center',width: 100},
                    {key:'im_cus_code',title:'第三方单号',align:'center',width: 100},
                    {key:'ocus_code',title:'第三方客户',align:'center',width: 100},
                    {key:'ocus_name',title:'第三方客户名称',align:'center',width: 150},
                    {key:'om_beizhu',title:'备注',align:'center',width: 100},
                    {key:'goods_id',title:'商品编码',align:'center',width: 100},
                    {key:'goods_name',title:'商品名称',align:'center',width: 100},
                    {key:'base_goodscount',title:'通知数量',align:'center',width: 100},
                    {key:'goods_unit',title:'单位',align:'center',width: 100},
                    {key:'plan_sta',title:'状态',align:'center',width: 100},
                    {key:'sumqua',title:'下架任务数量',align:'center',width: 150},
                ];
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

            //导出
            exportInfo(){
                alert('导出');
            },

            //获取列表数据
            getList(){
                abnormalOutLibraryApi.getList(this.requestParameters).then(res =>{
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
                abnormalOutLibraryApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
