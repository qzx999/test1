<template>
    <div class="thirdPartyClient">
        <Divider orientation="left">
            <span>第三方客户</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span class="title">所属客户：</span>
                        <Input type="text" v-model="queryForm.zhongWenQch" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">中文全称：</span>
                        <Input type="text" v-model="queryForm.zhuJiMa" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">客户编码：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 100px"/>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="infoOperating(null)">录入</Button>
                <Button @click="">批量删除</Button>
                <Button @click="">导入</Button>
                <Button @click="">第三方系统导入</Button>
                <Button @click="">导出</Button>
                <Button @click="">模板下载</Button>
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

            <template slot="btn" slot-scope="scope">
                <Button type="success" ghost icon="ios-eye" size="small" @click="showInfo(true,scope.row)">查看</Button>
                <Button type="info" ghost icon="md-cut" size="small" @click="infoOperating(scope.row)">审核</Button>
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
    import * as thirdPartyClientApi from '@/api/baseData/thirdPartyClientApi.js';
    export default {
        name: "thirdPartyClient",
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
                    {key:'suoShuKeHu',title:'所属客户',align:'center'},
                    {key:'zhongWenQch',title:'中文全称',align:'center'},
                    {key:'zhuJiMa',title:'助记码',align:'center'},
                    {key:'keHuJianCheng',title:'客户简称',align:'center'},
                    {key:'keHuBianMa',title:'客户编码',align:'center'},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn'},
                ];
            },

            //获取列表数据
            getList(){
                thirdPartyClientApi.getList(this.requestParameters).then(res =>{
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
                thirdPartyClientApi.queryList(this.queryForm).then(res =>{
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
                        thirdPartyClientApi.deleteById(id).then(res =>{
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
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
