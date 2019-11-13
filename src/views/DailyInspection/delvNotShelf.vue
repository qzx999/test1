<template>
    <div class="delvNotShelf">
        <Divider orientation="left">
            <span>收货未上架库存</span>
        </Divider>
        <div>
            <Form :model="queryForm" ref="myForm" style="margin: 10px">
                <FormItem label="">
                    <Row>
                        <Col span="4">
                            <span class="title">储位：</span>
                            <Input type="text" v-model="queryForm.bin_id" style="width: 100px"/>
                        </Col>
                        <Col span="4">
                            <span class="title">托盘：</span>
                            <Input type="text" v-model="queryForm.tin_id" style="width: 100px"/>
                        </Col>
                        <Col span="4">
                            <span class="title">客户编码：</span>
                            <Input type="text" v-model="queryForm.cus_code" style="width: 100px"/>
                        </Col>
                        <Col span="4">
                            <span class="title">客户名称：</span>
                            <Input type="text" v-model="queryForm.zhong_wen_qch" style="width: 100px"/>
                        </Col>
                        <Col span="4">
                            <span class="title">商品编码：</span>
                            <Input type="text" v-model="queryForm.goods_id" style="width: 100px"/>
                        </Col>
                        <Col span="4">
                            <span class="title">商品名称：</span>
                            <Input type="text" v-model="queryForm.shp_ming_cheng" style="width: 100px"/>
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
        </div>
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
    import * as delvNotShelfApi from '@/api/DailyInspection/delvNotShelfApi.js';
    export default {
        name: "delvNotShelf",
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
            initMyColumns() {
                return[
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {key:'kucunsta',title:'库存状态',align:'center',width:100},
                    {key:'bin_id',title:'储位',align:'center',width:100},
                    {key:'tin_id',title:'托盘',align:'center',width:100},
                    {key:'cus_code',title:'客户编码',align:'center',width:100},
                    {key:'zhong_wen_qch',title:'客户名称',align:'center',width:100},
                    {key:'goods_id',title:'商品编码',align:'center',width:100},
                    {key:'shp_ming_cheng',title:'商品名称',align:'center',width:100},
                    {key:'qm_ok_quat',title:'数量',align:'center',width:100},
                    {key:'shl_dan_wei',title:'单位',align:'center',width:100},
                    {key:'pro_data',title:'生产日期',align:'center',width:100},
                    {key:'create_date',title:'收货时间',align:'center',width:100},
                    {key:'bzhi_qi',title:'保质期（天）',align:'center',width:100},
                ];
            },

            //获取列表数据
            getList(){
                delvNotShelfApi.getList(this.requestParameters).then(res =>{
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
                delvNotShelfApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //重置查询条件
            Reset() {
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
