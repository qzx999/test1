<template>
    <div>
        <Divider orientation="left">
            <span>出库通知</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem>
                <Row>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>状态：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.omSta" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>打印状态：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.printStatus" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>出货单号：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.omNoticeId" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>货主：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.cusCode" style="width: 140px"/>
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

                </Row>
                <Row>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>备注：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.omBeizhu" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>三方客户编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocusCode" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>三方客户：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ocusName" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>收货人：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.delvMember" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>


                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>收货人电话：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.delvMobile" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>

                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>运输公司：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.reMember" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>发货运单号：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.reCarno" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>要求交货时间：</span></Col>
                            <Col span="10">
                                <DatePicker type="daterange" placement="bottom-end" v-model="queryForm.delvData" style="width: 175px"></DatePicker>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FormItem>
        </Form>

        <Row>
            <Col span="20">
                <Button @click="infoOperating(null)">录入</Button>
                <Button @click="importInfo">导入</Button>
                <Button @click="exportInfo">导出</Button>
                <Button @click="templateDownload">模板下载</Button>
                <Button @click="importInfo">导入2</Button>
                <Button @click="templateDownload">模板2下载</Button>
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
    import * as outLibraryNoticeApi from '@/api/outGoods/outLibraryNoticeApi.js';
    export default {
        name: "outLibraryNotice",
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
                    {key:'omSta',title:'状态',align:'center',width:100},
                    {key:'printStatus',title:'打印状态',align:'center',width:100},
                    {key:'createName',title:'创建人名称',align:'center',width:100},
                    {key:'createDate',title:'创建日期',align:'center',width:100},
                    {key:'omNoticeId',title:'出货单号',align:'center',width:100},
                    {key:'cusCode',title:'货主',align:'center',width:100},
                    {key:'imCusCode',title:'客户订单号',align:'center',width:100},
                    {key:'omBeizhu',title:'备注',align:'center',width:100},
                    {key:'ocusCode',title:'三方客户编码',align:'center',width:110},
                    {key:'ocusName',title:'三方客户',align:'center',width:100},
                    {key:'delvData',title:'要求交货时间',align:'center',width:100},
                    {key:'delvMember',title:'收货人',align:'center',width:100},
                    {key:'delvMobile',title:'收货人电话',align:'center',width:100},
                    {key:'delvAddr',title:'收货人地址',align:'center',width:100},
                    {key:'reMember',title:'运输公司',align:'center',width:100},
                    {key:'reCarno',title:'发货运单号',align:'center',width:100},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn',fixed:"right"}
                ];
            },

            //获取列表数据
            getList(){
                outLibraryNoticeApi.getList(this.requestParameters).then(res =>{
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
                outLibraryNoticeApi.queryList(this.queryForm).then(res =>{
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

            //导入
            importInfo(){
                alert('导入');
            },

            //导出
            exportInfo(){
                alert('导出');
            },

            //模板下载
            templateDownload(){
                alert('模板下载');
            },

            //删除
            out(data){
                let id = data.id;
                this.$Modal.confirm({
                    title:'删除提示：',
                    content:`确定要删除吗？`,
                    onOk:() =>{
                        outLibraryNoticeApi.deleteById(id).then(res =>{
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
                alert('录入/编辑');
            },

            //查看
            showInfo(data){
              alert('查看');
            },
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
