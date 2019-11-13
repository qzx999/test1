<template>
    <div class="otherOutLibrary">
        <Divider orientation="left">
            <span>其它出库</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="5">
                        <span>出货单号：</span>
                        <Input type="text" v-model="queryForm.omNoticeId" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>收货人：</span>
                        <Input type="text" v-model="queryForm.delvMember" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>收货人电话：</span>
                        <Input type="text" v-model="queryForm.delvMobile" style="width: 140px"/>
                    </Col>

                    <Col span="5">
                        <span>发货运单号：</span>
                        <Input type="text" v-model="queryForm.reCarno" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>运输公司：</span>
                        <Select v-model="queryForm.reMember" style="width: 140px">
                            <Option value=""></Option>
                        </Select>
                    </Col>
                </Row>
            </FormItem>

            <FormItem>
                <Row>
                    <Col span="5">
                        <span>状态：</span>
                        <Input type="text" v-model="queryForm.omSta" style="width: 140px"/>
                    </Col>
                    <Col span="5">
                        <span>要求交货时间：</span>
                        <DatePicker type="daterange" v-model="queryForm.delvData" placement="bottom-end" style="width: 175px"></DatePicker>
                    </Col>
                </Row>
            </FormItem>
        </Form>

        <Row>
            <Col span="20">
                <Button @click="infoOperating(null)">录入</Button>
                <Button @click="exportInfo">导出</Button>
                <Button @click="templateDownload">模板下载</Button>
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
    import * as otherOutLibraryApi from '@/api/outGoods/otherOutLibraryApi.js';
    export default {
        name: "otherOutLibrary",
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
                    {key:'createName',title:'创建人名称',align:'center'},
                    {key:'createDate',title:'创建日期',align:'center'},
                    {key:'omNoticeId',title:'出货单号',align:'center'},
                    {key:'cusCode',title:'客户',align:'center'},
                    {key:'delvData',title:'要求交货时间',align:'center'},
                    {key:'delvMember',title:'收货人',align:'center'},
                    {key:'delvMobile',title:'收货人电话',align:'center'},
                    {key:'delvAddr',title:'收货人地址',align:'center'},
                    {key:'reMember',title:'运输公司',align:'center'},
                    {key:'reCarno',title:'发货运单号',align:'center'},
                    {key:'omBeizhu',title:'备注',align:'center'},
                    {key:'omSta',title:'状态',align:'center'},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn'}
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

            //模板下载
            templateDownload(){
                alert('模板下载');
            },

            //获取列表数据
            getList(){
                otherOutLibraryApi.getList(this.requestParameters).then(res =>{
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
                        otherOutLibraryApi.deleteById(id).then(res =>{
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

            //条件查询
            query(){
                otherOutLibraryApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },

            //操作……-修改--录入
            infoOperating(){

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
