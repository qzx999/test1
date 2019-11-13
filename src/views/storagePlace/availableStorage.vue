<template>
    <div class="availableStorage">
        <Divider orientation="left">
            <span>可用储位</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem label="">
                <Row>
                    <Col span="4">
                        <span class="title">仓库：</span>
                        <Input type="text" v-model="queryForm.zhongWenQch" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">储位类型：</span>
                        <Input type="text" v-model="queryForm.zhuJiMa" style="width: 100px"/>
                    </Col>
                    <Col span="4">
                        <span class="title">储位：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 100px"/>
                    </Col>

                    <Col span="4">
                        <span class="title">所属客户：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 100px"/>
                    </Col>

                    <Col span="4">
                        <span class="title">上架次序：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 100px"/>
                    </Col>

                    <Col span="4">
                        <span class="title">高度CM：</span>
                        <Input type="text" v-model="queryForm.keHuBianMa" style="width: 100px"/>
                    </Col>
                </Row>
            </FormItem>
        </Form>
        <Row>
            <Col span="20">
                <Button @click="">导出excel</Button>
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

            <template slot="footer">
                <Page :current="requestParameters.page" :page-size="requestParameters.size" :total="requestParameters.total" :show-total="true"
                      :show-sizer="true"    @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
            </template>
        </Table>

    </div>
</template>

<script>
    import * as availableStorageApi from '@/api/storagePlace/availableStorageApi.js';
    export default {
        name: "availableStorage",

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
                    {key:'bin_store',title:'仓库',align:'center'},
                    {key:'ku_wei_shu_xing',title:'储位类型',align:'center'},
                    {key:'binid',title:'储位',align:'center'},
                    {key:'suo_shu_ke_hu',title:'所属客户',align:'center'},
                    {key:'zui_da_ti_ji',title:'最大体积',align:'center'},
                    {key:'shang_jia_ci_xu',title:'上架次序',align:'center'},
                    {key:'chang',title:'长度CM',align:'center'},
                    {key:'kuan',title:'宽度CM',align:'center'},
                    {key:'gao',title:'高度CM',align:'center'},
                    {key:'zui_da_tuo_pan',title:'最大托盘',align:'center'},
                ];
            },

            //获取列表数据
            getList(){
                availableStorageApi.getList(this.requestParameters).then(res =>{
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

            //条件查询
            query(){
                availableStorageApi.queryList(this.queryForm).then(res =>{
                    if(res.data.code == 200) {
                        this.myData =res.data.data.rows;
                        this.requestParameters.total = res.data.data.total;
                        this.loading = false;
                    }else{
                        this.$Message.error(res.data.msg);
                    }
                });
            },
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>
