<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="月台代码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="月台名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    &nbsp;
                    <Button type="info">
                        <Icon type="md-search" /> 查询
                    </Button>
                    &nbsp; <Button type="info">
                    <Icon type="md-sync" />
                    重置
                </Button>
                </Col>
            </Row>
        </Form>
        <Table :columns="PlatformDefinitionColumns" :data="PlatformDefinitionData">
            <template slot='header'>
                &nbsp; <Button type="success" @click="PlatformDefinitionWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp; <Button type="error" @click="batchDeletion"><Icon type="ios-checkbox-outline" />批量删除</Button>
                &nbsp;<Button @click="Import" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="Export" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="TemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>
        </Table>

        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
        <platform-definition-model ref="fin"></platform-definition-model>
        <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除 提示</span>
            </p>
            <div style="text-align:center">
                <p>删除信息后数据将会消失</p>
                <p>是否确定删除该条信息?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del">确认删除</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        components:{
            PlatformDefinitionModel:()=>import('@/views/PlatformManagement/model/PlatformDefinitionModel.vue')
        },
        data(){
            return{
                //月台定义的表头
                PlatformDefinitionColumns:this.PlatformDefinitionColumnss(),
                //月台定义分页的数据
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
                //月台定义表格数据的存放
                PlatformDefinitionData:[],
                //点击删除时候的提示框状态
                modal2:false,
                modal_loading:false
            }
        },
        methods:{
            //月台定义批量删除
            batchDeletion(){

            },
            //月台定义模板下载
            TemplateDownload(){

            },
            //月台定义导出
            Export(){

            },
            //月台定义导入
            Import(){

            },

            //月台定义点击删除时要执行的方法
            del(){

            },
            //月台定义分页
            subPageChange(page){
                this.requestParameters.page = page;
                this.getData(this.requestParameters);
            },
            subPageSizeChange(size){
                this.requestParameters.size = size;
                if(this.requestParameters.page == 1){
                    this.getData(this.requestParameters);
                }
            },
            //月台定义点击修改和增加时弹出的对话框并传入参数
            PlatformDefinitionWindow(data){
                if(data!=null){
                    this.$refs.fin.PlatformDefinitionModel=data
                    this.$refs.fin.modal1=true
                }else{
                    this.$refs.fin.PlatformDefinitionModel={}
                    this.$refs.fin.modal1=true
                }
            },
            //月台定义表头的数据
            PlatformDefinitionColumnss(){
                let that=this
                let newDate=[
                    {type:'selection',align:'center',width:'35px'},
                    {type:'index',title:'序号',align:'center'},
                    {key:'platformCode',title:'月台代码',align:'center'},
                    {key:'platformName',title:'月台名称',align:'center'},
                    {key:'opt',title:'操作',align:'center',render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.PlatformDefinitionWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.PlatformDefinitionRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }}
                ]
                return newDate
            },

            //点击删除时弹出删除提示
            PlatformDefinitionRemove(){
                this.modal2=true
            },
            //动态获取表格数据的方法
            getDefinitionList(){

            }

        },
        created() {
            //调用获取表格数据的接口方法页面加载时显示数据这里是模拟数据
            for (let i=0;i<5;i++){
                this.PlatformDefinitionData.push({
                    "id":i,
                    "platformCode":123,
                    "platformName":"郭旭"
                })
            }

        }

    }
</script>