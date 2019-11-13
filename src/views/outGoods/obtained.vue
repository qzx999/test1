<template>
    <div>
        <Divider orientation="left">
            <span>下架任务</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem>
                <Row>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>出库通知单：</span></Col>
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
                            <Col span="8" align="right"><span>托盘：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.tuoPan" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>仓位：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocusCode" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>下架状态：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.suoShuKeHu" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
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

                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>波次号：</span></Col>
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
                <Button @click="">批量下架</Button>
                <Button @click="">选择批量更改</Button>
                <Button @click="">批量保存</Button>
                <Button @click="">取消批量更改</Button>
                <Button @click="">导出</Button>
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
    </div>
</template>

<script>
    import * as obtainedApi from '@/api/outGoods/obtainedApi.js';
    export default {
        name: "obtained",
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
                    {key:'updateName',title:'更新人',align:'center',width:100},
                    {key:'updateDate',title:'更新时间',align:'center',width:100},
                    {key:'omNoticeId',title:'出库通知单',align:'center',width:100},
                    {key:'goodsId',title:'商品编码',align:'center',width:100},
                    {key:'goodsName',title:'商品名称',align:'center',width:100},
                    {key:'imCusCode',title:'客户订单号',align:'center',width:100},
                    {key:'omBeizhu',title:'备注',align:'center',width:100},
                    {key:'qmOkQuat',title:'数量',align:'center',width:100},
                    {key:'goodsUnit',title:'单位',align:'center',width:100},
                    {key:'baseGoodscount',title:'基本单位数量',align:'center',width:100},
                    {key:'baseUnit',title:'基本单位',align:'center',width:100},
                    {key:'itemText',title:'备注',align:'center',width:100},
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
                obtainedApi.getList(this.requestParameters).then(res =>{
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
                obtainedApi.queryList(this.queryForm).then(res =>{
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
                        obtainedApi.deleteById(id).then(res =>{
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

            showInfo(){},
            infoOperating(){},
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
