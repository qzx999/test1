<template>
    <div class="DownAbnormal">
        <Divider orientation="left">
            <span>下架与复核差异</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span class="title">下架日期：</span>
                            <DatePicker type="date" v-model="queryForm.create_date" style="width: 120px"></DatePicker>
                    </Col>
                    <Col span="4">
                        <span class="title">下架人：</span>
                        <Input type="text" v-model="queryForm.create_name" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">复核人：</span>
                        <Input type="text" v-model="queryForm.update_name" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">储位：</span>
                        <Input type="text" v-model="queryForm.ku_wei_bian_ma" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">下架托盘：</span>
                        <Input type="text" v-model="queryForm.bin_id" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">货主：</span>
                        <Input type="text" v-model="queryForm.cus_code" style="width: 100px"/>
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
        <Table :columns="myColumns" :data="myData" :loading="loading" height="480" :border="true">
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
    import * as DownAbnormalApi from '@/api/DailyInspection/DownAbnormalApi.js';
    export default {
        name: "DownAbnormal",
        data() {
            return{
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
                return [
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {key:'create_date',title:'下架日期',align:'center',width:100},
                    {key:'create_name',title:'下架人',align:'center',width:100},
                    {key:'update_name',title:'复核人',align:'center',width:100},
                    {key:'ku_wei_bian_ma',title:'储位',align:'center',width:100},
                    {key:'bin_id',title:'下架托盘',align:'center',width:100},
                    {key:'bin_id_to',title:'单号',align:'center',width:100},
                    {key:'cus_code',title:'货主',align:'center',width:100},
                    {key:'zhong_wen_qch',title:'货主名称',align:'center',width:100},
                    {key:'goods_code',title:'商品',align:'center',width:100},
                    {key:'shp_ming_cheng',title:'商品编码',align:'center',width:100},
                    {key:'goods_pro_data',title:'生产日期',align:'center',width:100},
                    {key:'base_unit',title:'单位',align:'center',width:100},
                    {key:'goods_qua',title:'下架数量',align:'center',width:100},
                    {key:'goods_quaok',title:'复核数量',align:'center',width:100},
                ];
            },

            //获取列表数据
            getList(){
                DownAbnormalApi.getList(this.requestParameters).then(res =>{
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
                DownAbnormalApi.queryList(this.queryForm).then(res =>{
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
