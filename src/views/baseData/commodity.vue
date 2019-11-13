<template>
    <div class="commodity">
        <Divider orientation="left">
            <span>商品信息</span>
        </Divider>
        <Form :model="queryForm" ref="myForm" style="margin: 10px">
            <FormItem>
                <Row>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>所属客户：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.suoShuKeHu" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>商品名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.shpMingCheng" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"> <span>英文名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.ywMingCheng" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>日文名称：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.rwMingCheng" style="width: 140px"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col span="4">
                        <Row>
                            <Col span="8" align="right"><span>商品编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.shpBianMa" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>客户商品编码：</span></Col>
                            <Col span="10">
                                <Input type="text" v-model="queryForm.shpBianMakh" style="width: 140px"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>产品属性：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.chpShuXing" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="5">
                        <Row>
                            <Col span="8" align="right"><span>停用：</span></Col>
                            <Col span="10">
                                <Select v-model="queryForm.ty" style="width:140px">
                                    <Option value="" ></Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </FormItem>
        </Form>

        <Row>
            <Col span="20">
                <Button @click="infoOperating(null)">录入</Button>
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
        <Table :columns="myColumns" :data="myData" :loading="loading" :border="true" height="480">
            <template slot="loading">
                <h3 style="color: #000">数据正在加载中...</h3>
            </template>

            <template slot="btn" slot-scope="scope">
                <Button type="success" ghost icon="ios-eye" size="small" @click="showInfo">查看</Button>
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
    import * as commodityApi from '@/api/baseData/commodityApi.js';
    export default {
        name: "commodity",
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
                    {type:'index',title:' ',align:'center',width:50,},
                    {key:'suoShuKeHu',title:'所属客户',align:'center',width:100},
                    {key:'shpMingCheng',title:'商品名称',align:'center',width:100},
                    {key:'ywMingCheng',title:'英文名称',align:'center',width:100},
                    {key:'rwMingCheng',title:'日文名称',align:'center',width:100},
                    {key:'shpBianMa',title:'商品编码',align:'center',width:100},
                    {key:'shpBianMakh',title:'客户商品编码',align:'center',width:150},
                    {key:'shpGuiGe',title:'商品规格',align:'center',width:100},
                    {key:'chpShuXing',title:'产品属性',align:'center',width:100},
                    {key:'cfWenCeng',title:'存放温层',align:'center',width:100},
                    {key:'chlKongZhi',title:'拆零控制',align:'center',width:100},
                    {key:'mpDanCeng',title:'码盘单层数量',align:'center',width:100},
                    {key:'opt',title:'操作',align:'center',width:'220px',slot:'btn',fixed: 'right'}
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
                commodityApi.getList(this.requestParameters).then(res =>{
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
                commodityApi.queryList(this.queryForm).then(res =>{
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
                        commodityApi.deleteById(id).then(res =>{
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

            infoOperating(){},

            showInfo(){},
        },
        created() {
            this.getList();
        }

    }
</script>

<style scoped>

</style>
