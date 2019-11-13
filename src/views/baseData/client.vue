<template>
    <div class="client">
        <Divider orientation="left">
            <span>客户</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span>中文全称：</span>
                        <Input type="text" v-model="queryForm.zhongWenQch" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>合同号：</span>
                        <Input type="text" v-model="queryForm.zhuJiMa" style="width: 140px"/>
                    </Col>
                    <Col span="4">
                        <span>客户编码：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 140px"/>
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

        <ClientInfo0perating ref="clientInfo0perating"></ClientInfo0perating>
        <ClientInfoShow ref="clientInfoShow"></ClientInfoShow>
    </div>
</template>

<script>
    import * as clientApi from '@/api/baseData/clientApi.js';
    export default {
        name: "client",
        components:{
            ClientInfo0perating : () => import('@/views/baseData/components/client_info_operating.vue'),
            ClientInfoShow : () => import('@/views/baseData/components/client_info_show.vue'),
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
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {key:'zhongWenQch',title:'中文全称',align:'center',width:100},
                    {key:'zhuJiMa',title:'合同号',align:'center',width:100},
                    {key:'keHuBianMa',title:'客户编码',align:'center',width:100},
                    {key:'xingYeFenLei',title:'企业属性',align:'center',width:100},
                    {key:'diZhi',title:'地址',align:'center',width:100},
                    {key:'zhuLianXiRen',title:'负责人',align:'center',width:100},
                    {key:'dianHua',title:'电话',align:'center',width:100},
                    {key:'shouJi',title:'手机',align:'center',width:100},
                    {key:'zhuLianXiRen1',title:'联系人1',align:'center',width:100},
                    {key:'dianHua1',title:'电话1',align:'center',width:100},
                    {key:'emaildiZhi',title:'Email地址',align:'center',width:100},
                    {key:'beiZhu',title:'备注',align:'center',width:100},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn'}
                ];
            },

            //获取列表数据
            getList(){
                clientApi.getList(this.requestParameters).then(res =>{
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
                clientApi.queryList(this.queryForm).then(res =>{
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
                        clientApi.deleteById(id).then(res =>{
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
                let clientInfo0perating = this.$refs['clientInfo0perating'];
                if(data != null) {//修改
                    clientInfo0perating.formData = data;
                }else{//录入
                    clientInfo0perating.formData = {};
                }
                clientInfo0perating.modalIsOpen = true;
            },

            //查看
            showInfo(data){
                let clientInfoShow = this.$refs['clientInfoShow'];
                clientInfoShow.formData = data;
                clientInfoShow.modalIsOpen = true;
            }
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
