<template>
    <div class="commodityDetail">
        <Divider orientation="left">
            <span>商品明细</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="5">
                        <span class="title">货主：</span>
                        <Input type="text" v-model="queryForm.cus_code" style="width: 150px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">商品编码：</span>
                        <Input type="text" v-model="queryForm.goods_id" style="width: 150px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">商品SKU：</span>
                        <Input type="text" v-model="queryForm.goods_code" style="width: 150px"/>
                    </Col>
                    <Col span="5">
                        <span class="title">品名：</span>
                        <Input type="text" v-model="queryForm.shp_ming_cheng" style="width: 150px"/>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="xporteInfo">导出excel</Button>
            </Col>
            <Col span="4">
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
    import * as commodityDetailApi from '@/api/baseData/commodityDetailApi.js';
    export default {
        name: "commodityDetail",
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
            initMyColumns() {
                return[
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {key:'cus_code',title:'货主',align:'center',width:100},
                    {key:'goods_id',title:'商品编码',align:'center',width:100},
                    {key:'goods_code',title:'商品SKU',align:'center',width:100},
                    {key:'shp_ming_cheng',title:'品名',align:'center',width:100},
                    {key:'jf_shp_lei',title:'计费商品类',align:'center',width:100},
                    {key:'shl_dan_wei',title:'单位',align:'center',width:100},
                    {key:'cf_wen_ceng',title:'存放温层',align:'center',width:100},
                    {key:'mp_dan_ceng',title:'单层',align:'center',width:100},
                    {key:'mp_ceng_gao',title:'层高',align:'center',width:100},
                    {key:'bzhi_qi',title:'保质期',align:'center',width:100},
                    {key:'chl_shl',title:'拆零数量',align:'center',width:100},
                    {key:'ti_ji_cm',title:'体积',align:'center',width:100},
                    {key:'zhl_kg',title:'重量',align:'center',width:100},
                    {key:'chp_shu_xing',title:'产品属性',align:'center',width:100},
                    {key:'baseunit',title:'基本单位',align:'center',width:100},
                    {key:'jizhun_wendu',title:'基准温度',align:'center',width:100},
                    {key:'shp_bian_makh',title:'客户商品编码',align:'center',width:100},
                    {key:'chailing',title:'拆零',align:'center',width:100},
                ];
            },

            //获取列表
            getList(){
                commodityDetailApi.getList(this.requestParameters).then(res =>{
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
                commodityDetailApi.queryList(this.queryForm).then(res =>{
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

            //导出
            xporteInfo(){
                alert('导出');
            },

            //换页
            pageChange() {
                this.$Message.success('换页');
            },

            //换页容量
            pageSizeChange() {
                this.$Message.success('更换页容量');
            },
        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
