<template>
    <div class="storageDefinition">
        <Divider orientation="left">
            <span>储位定义</span>
        </Divider>

        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span class="title">仓库：</span>
                        <Select v-model="queryForm.binStore" style="width: 100px">
                            <Option value="1">111</Option>
                            <Option value="2">222</Option>
                        </Select>
                    </Col>
                    <Col span="4">
                        <span class="title">库位编码：</span>
                        <Input type="text" v-model="queryForm.zhongWenQch" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">库位条码：</span>
                        <Input type="text" v-model="queryForm.kuWeiBianMa" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">库位类型：</span>
                        <Select v-model="queryForm.kuWeiLeiXing" style="width: 100px">
                            <Option value="1">111</Option>
                            <Option value="2">222</Option>
                        </Select>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="infoOperating(null)">录入</Button>
                <Button @click="batchDisable">批量停用</Button>
                <Button @click="importInfo">导入</Button>
                <Button @click="exportInfo">导出</Button>
                <Button @click="templateDownload">模板下载</Button>
            </Col>
            <Col span="4">
                <Button @click="query">查询</Button>
                <Button @click="Reset">重置</Button>
            </Col>
        </Row>
        <Table :columns="myColumns" :data="myData" :loading="loading" :border="true" @on-selection-change="getSelectList" height="480">
            <template slot="loading">
                <h3 style="color: #000">数据正在加载中...</h3>
            </template>
            <template slot="btn" slot-scope="scope">
                <Button type="success" ghost icon="ios-eye" size="small" @click="showInfo(scope.row)">查看</Button>
                <Button type="info" ghost icon="md-cut" size="small" @click="infoOperating(scope.row)">编辑</Button>
            </template>

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>
    </div>
</template>

<script>
    import * as storageDefinitionApi from '@/api/storagePlace/storageDefinitionApi.js';
    export default {
        name: "storageDefinition",
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
                queryData:{},
                searchType:'1',
                disableList:[],
            }
        },
        methods:{
            //初始化表头
            initMyColumns(){
                return[
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {type: 'selection', width: 50, align: 'center'},
                    {key:'binStore',title:'仓库',align:'center',width:100},
                    {key:'kuWeiBianMa',title:'库位编码',align:'center',width:100},
                    {key:'kuWeiTiaoMa',title:'库位条码',align:'center',width:100},
                    {key:'kuWeiLeiXing',title:'库位类型',align:'center',width:100},
                    {key:'kuWeiShuXing',title:'库位属性',align:'center',width:100},
                    {key:'chpShuXing',title:'产品属性',align:'center',width:100},
                    {key:'shangJiaCiXu',title:'上架次序',align:'center',width:100},
                    {key:'quHuoCiXu',title:'取货次序',align:'center',width:100},
                    {key:'suoShuKeHu',title:'所属客户',align:'center',width:100},
                    {key:'zuiDaTiJi',title:'最大体积',align:'center',width:100},
                    {key:'zuiDaZhongLiang',title:'最大重量',align:'center',width:100},
                    {key:'zuiDaTuoPan',title:'最大托盘',align:'center',width:100},
                    {key:'chang',title:'长度',align:'center',width:100},
                    {key:'kuan',title:'宽度',align:'center',width:100},
                    {key:'gao',title:'高度',align:'center',width:100},
                    {key:'tingYong',title:'停用',align:'center',width:100},
                    {key:'mingXi',title:'备注',align:'center',width:100},
                    {key:'mingXi1',title:'备注1',align:'center',width:100},
                    {key:'mingXi2',title:'备注2',align:'center',width:100},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn',fixed:"right"}
                ];
            },

            //获取列表数据
            getList(){
                storageDefinitionApi.getList(this.requestParameters).then(res =>{
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
                storageDefinitionApi.queryList(this.queryForm).then(res =>{
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

            //获取多选的内容
            getSelectList(selection){
                this.disableList=[];
                selection.forEach(item =>{
                    this.disableList.push(item.id);
                });
            },

            //批量停用
            batchDisable(){
                if(this.disableList.length < 2) {
                    this.$Message.info('请选择两条以上数据进行批量删除');
                    return false;
                };
                this.$Modal.confirm({
                    title:'停用提示：',
                    content:`确定要批量停用吗？`,
                    onOk:() =>{
                        storageDefinitionApi.batchDisableById(this.disableList).then(res =>{
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
            infoOperating(){
                alert('编辑/录入');
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
