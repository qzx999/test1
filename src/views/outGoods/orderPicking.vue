<template>
    <div>
        <Divider orientation="left">
            <span>下架商品明细</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem>
                <Row>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>原始单据编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.omNoticeId" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>商品编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.goodsId" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>商品名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.goodsName" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>客户订单号：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.imCusCode" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>备注：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.omBeizhu" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>源托盘码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.tuoPan" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>库位编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocusCode" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>货主：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.suoShuKeHu" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>目标托盘：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.delvMobile" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="">导出</Button>
              <!--  <Button @click="">选择批量更改</Button>
                <Button @click="">批量保存</Button>
                <Button @click="">取消批量更改</Button>-->
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
                <Button type="info" ghost icon="md-cut" size="small" @click="infoOperating(scope.row)">编辑</Button>
                <Button type="error" ghost icon="md-trash" size="small" @click="out(scope.row)">删除</Button>
            </template>

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>
        <OrderPickingInfoOperating ref="orderPickingInfoOperating"></OrderPickingInfoOperating>
    </div>
</template>

<script>
    import * as orderPickingApi from '@/api/outGoods/orderPickingApi.js';
    export default {
        name: "orderPicking",
        components:{
            OrderPickingInfoOperating : () => import('@/views/outGoods/model/orderPicking_info_operating.vue'),
        },
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
                    {type:'index',title:' ',align:'center',width:50},
                    {key:'createDate',title:'创建日期',align:'center',width:100},
                    {key:'orderId',title:'原始单据编码',align:'center',width:100},
                    {key:'goodsId',title:'商品编码',align:'center',width:100},
                    {key:'goodsName',title:'商品名称',align:'center',width:100},
                    {key:'imCusCode',title:'客户订单号',align:'center',width:100},
                    {key:'omBeizhu',title:'备注',align:'center',width:100},
                    {key:'goodsQua',title:'数量',align:'center',width:100},
                    {key:'goodsQuaok',title:'复核数量',align:'center',width:100},
                    {key:'baseGoodscount',title:'基本单位',align:'center',width:100},
                    {key:'goodsUnit',title:'单位',align:'center',width:100},
                    {key:'goodsProData',title:'生产日期',align:'center',width:100},
                    {key:'binIdFrom',title:'源托盘码',align:'center',width:100},
                    {key:'kuWeiBianMa',title:'库位编码',align:'center',width:100},
                    {key:'cusCode',title:'货主',align:'center',width:100},
                    {key:'opt',title:'操作',align:'center',width:220,slot:'btn',fixed: 'right'}
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

            //获取列表数据
            getList(){
                orderPickingApi.getList(this.requestParameters).then(res =>{
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
                orderPickingApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //删除
            out(data){
                let id = data.id;
                this.$Modal.confirm({
                    title:'删除提示：',
                    content:`确定要删除吗？`,
                    onOk:() =>{
                        orderPickingApi.deleteById(id).then(res =>{
                            if(res.data.code == 200) {
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.getList();
                        });
                    }
                });
            },

            //操作……-修改--录入
            infoOperating(data) {
                let orderPickingInfoOperating = this.$refs['orderPickingInfoOperating'];
                if(data != null) {//修改
                    orderPickingInfoOperating.formData = data;
                }else{//录入
                    orderPickingInfoOperating.formData = {};
                }
                orderPickingInfoOperating.modalIsOpen = true;
            },

            //查看
            showInfo(){

            },
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
