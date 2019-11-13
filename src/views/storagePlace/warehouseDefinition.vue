<template>
    <div class="warehouseDefinition">
        <Divider orientation="left">
            <span>仓库定义</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>

                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="17">
                <Button @click="infoOperating(null)">录入</Button>
                <Button @click="batchOut">批量删除</Button>
                <Button @click="">Excel数据导入</Button>
                <Button @click="">Excel导出</Button>
            </Col>
            <Col span="7" align="right">
                <Input v-model="queryForm.type" style="width: 350px">
                    <Select v-model="searchType" slot="prepend" style="width: 80px" size="small">
                        <Option value="1">仓库代码</Option>
                        <Option value="2">仓库名称</Option>
                    </Select>
                    <Button slot="append" icon="ios-search" size="small" @click="query"></Button>
                </Input>
            </Col>
        </Row>
        <Table :columns="myColumns" :data="myData" :loading="loading" :border="true" @on-selection-change="getOutList" height="480">
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

        <WarehouseDefinition_info_operating ref="warehouseDefinition_info_operating"></WarehouseDefinition_info_operating>
    </div>
</template>

<script>
    import * as warehouseDefinitionApi from '@/api/storagePlace/warehouseDefinitionApi.js';
    export default {
        name: "warehouseDefinition",

        components:{
            WarehouseDefinition_info_operating : () => import('@/views/storagePlace/components/warehouseDefinition_info_operating.vue'),
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
                queryData:{},
                searchType:'1',

                outList:[],
            }
        },

        methods:{
            //初始化表头
            initMyColumns(){
                return[
                    {type:'index',title:' ',align:'center',width:'50px'},
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {key:'store_code',title:'仓库代码',align:'center'},
                    {key:'store_name',title:'仓库名称',align:'center'},
                    {key:'store_text',title:'仓库属性',align:'center'},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn'}
                ];
            },

            //获取列表数据
            getList(){
                warehouseDefinitionApi.getList(this.requestParameters).then(res =>{
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
            query() {
                let searchType = this.searchType;
                if(searchType == '1') {//仓库代码
                    this.queryData.store_code = this.queryForm.type;
                }else if(searchType == '2'){//仓库名称
                    this.queryData.store_name = this.queryForm.type;
                }
                warehouseDefinitionApi.queryList(this.queryData).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                    this.queryData = {};//重置存储查询数据的对象
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
            importInfo(){alert('导入');},

            //导出
            exportInfo(){alert('导出');},

            //操作……-修改--录入
            infoOperating(data) {
                let warehouseDefinition_info_operating = this.$refs['warehouseDefinition_info_operating'];
                if(data != null) {//修改
                    warehouseDefinition_info_operating.formData = data;
                }else{//录入
                    warehouseDefinition_info_operating.formData = {};
                }
                warehouseDefinition_info_operating.modalIsOpen = true;
            },

            //删除
            out(data){
                let id = data.id;
                this.$Modal.confirm({
                    title:'删除提示：',
                    content:`确定要删除吗？`,
                    onOk:() =>{
                        warehouseDefinitionApi.deleteById(id).then(res =>{
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

            //获取多选的内容
            getOutList(selection){
                this.outList=[];
                selection.forEach(item =>{
                    this.outList.push(item.id);
                });
            },

            //批量删除
            batchOut(){
                if(this.outList.length < 2) {
                    this.$Message.info('请选择两条以上数据进行批量删除');
                    return false;
                };

                this.$Modal.confirm({
                    title:'删除提示：',
                    content:`确定要批量删除吗？`,
                    onOk:() =>{
                        warehouseDefinitionApi.batchDeleteById(this.outList).then(res =>{
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

            //查看
            showInfo(data){
                let warehouseDefinition_info_operating = this.$refs['warehouseDefinition_info_operating'];
                warehouseDefinition_info_operating.isDisable = true;
                warehouseDefinition_info_operating.formData = data;
                warehouseDefinition_info_operating.modalIsOpen = true;
            },

        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
