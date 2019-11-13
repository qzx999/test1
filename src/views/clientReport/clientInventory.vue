<template>
    <div class="clientInventory">
        <Divider orientation="left">
            <span>客户库存</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span class="title">库存类型：</span>
                        <Input type="text" v-model="queryForm.kuctype" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">商品编码：</span>
                        <Input type="text" v-model="queryForm.goodsId" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">客户商品编码：</span>
                        <Input type="text" v-model="queryForm.shpBianmakh" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">商品名称：</span>
                        <Input type="text" v-model="queryForm.shpMingCheng" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">客户：</span>
                        <Input type="text" v-model="queryForm.cusCode" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">生产日期：</span>
                        <DatePicker type="date" v-model="queryForm.goodsProData" style="width: 140px"></DatePicker>
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
    import * as clientInventoryApi from '@/api/clientReport/clientInventoryApi.js';
    export default {
        name: "clientInventory",
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
                    {key:'kuctype',title:'库存类型',align:'center',width:100},
                    {key:'goodsId',title:'商品编码',align:'center',width:100},
                    {key:'shpBianmakh',title:'客户商品编码',align:'center',width:100},
                    {key:'shpMingCheng',title:'商品名称',align:'center',width:100},
                    {key:'goodsQua',title:'数量',align:'center',width:100},
                    {key:'goodsUnit',title:'单位',align:'center',width:100},
                    {key:'baseGoodscount',title:'库存数量',align:'center',width:100},
                    {key:'zhongLiang',title:'重量KG',align:'center',width:100},
                    {key:'baseUnit',title:'库存单位',align:'center',width:100},
                    {key:'cusCode',title:'客户',align:'center',width:100},
                    {key:'zhongWenQch',title:'客户名称',align:'center',width:100},
                    {key:'goodsProData',title:'生产日期',align:'center',width:100},
                    {key:'bzhiQi',title:'保质期',align:'center',width:100},
                    {key:'dqr',title:'到期日',align:'center',width:100},
                    {key:'hiti',title:'HITI',align:'center',width:100},
                    {key:'kuWeiLeiXing',title:'库位类型',align:'center',width:100},
                ];
            },

            //获取列表数据
            getList(){
                clientInventoryApi.getList(this.requestParameters).then(res =>{
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
                clientInventoryApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //重置
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
