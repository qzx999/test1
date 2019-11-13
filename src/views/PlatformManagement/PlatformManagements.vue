<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="车号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="单据编号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    &nbsp;
                    <Button type="info">
                        <Icon type="md-search" />
                        查询
                    </Button>
                    &nbsp; <Button type="info">
                    <Icon type="md-sync" />
                    重置
                </Button>
                </Col>
            </Row>
        </Form>
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
        <Table :columns="PlatformManagementsColumns" :data="PlatformManagementsData" highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp; <Button type="success" @click="PlatformManagementWindow(null)"> <Icon type="md-add" />新增</Button>
                <!--&nbsp; <Button type="error" @click="ManagementDatchDeletion">批量删除</Button>-->
                <!--&nbsp;<Button @click="ManagementImport" type="info">导入</Button>-->
                &nbsp;<Button @click="ManagementExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="PlatformManagementWindow(1)" type="info"><Icon type="ios-search-outline" />查看</Button>
                &nbsp;<Button @click="ManagementTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>
        </Table>
        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
        <platform-management-model ref="plan"></platform-management-model>
    </div>
</template>
<script>
    export default {
        components:{
            PlatformManagementModel:()=>import("@/views/PlatformManagement/model/PlatformManagementModel")
        },
        data(){
            return{
                //月台管理表头
                PlatformManagementsColumns:this.PlatformManagementsColumnss(),
                //月台管理表格数据
                PlatformManagementsData:[],
                //月台管理的分页
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
                //月台管理查看时的数据
                show:{},
                //月台管理点击删除时弹框的状态
                modal2: false,
                modal_loading: false,
            }
        },
        methods:{
            //月台管理点击删除后执行的方法
            del(){

            },
            //月台管理选中表格某一行时执行的方法
            changeTableData(data){
                this.show=data
            },
            ManagementDatchDeletion(){

            },
           /* ManagementImport(){

            },*/
           //月台管理导出方法
            ManagementExport(){

            },
            //月台管理模板下载
            ManagementTemplateDownload(){

            },
            //新增，修改，查看弹框
            PlatformManagementWindow(data){
                if(data==1){
                    console.log(this.show.carno)
                    if(this.show.carno!=null){
                        this.$refs.plan.status=1
                        this.$refs.plan.PlatformManagementModel=this.show;
                        this.$refs.plan.modal1=true;
                        this.$refs.plan.disableds=true;
                    }else{
                        this.$Message.warning('请选中一行进行查看');
                    }

                }else if(data!=null){
                    this.$refs.plan.status=2
                    this.$refs.plan.PlatformManagementModel=data;
                    this.$refs.plan.modal1=true;
                    this.$refs.plan.disableds=false;
                }else{
                    this.$refs.plan.status=3
                    this.$refs.plan.PlatformManagementModel={};
                    this.$refs.plan.modal1=true;
                    this.$refs.plan.disableds=false;
                }
            },
            //月台管理数据分页
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
            //加载表头数据
            PlatformManagementsColumnss(){
                let that=this
                let newData=[
                    {type:'index',title:'序号',alert:'center'},
                    {key:'carno',title:'车号',alert:'center'},
                    {key:'docId',title:'单据编号',alert:'center'},
                    {key:'platId',title:'月台编号',alert:'center'},
                    {key:'inData',title:'进入时间',alert:'center'},
                    {key:'outData',title:'驶出时间',alert:'center'},
                    {key:'platSta',title:'月台状态',alert:'center'},
                    {key:'platBeizhu',title:'备注',alert:'center'},
                    {key:'planIndata',title:'计划进入时间',alert:'center'},
                    {key:'planOutdata',title:'计划驶出时间 ',alert:'center'},
                    {key:'otp',title:'操作 ',alert:'center',width:'200px', render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'md-create'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.PlatformManagementWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.PlatformManagementRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }}
                ]
                return newData;
            },
            //月台管理删除数据事件
            PlatformManagementRemove(){
                this.modal2= true
            }
        },
        created() {
            for(let i=0;i<5;i++){
                this.PlatformManagementsData.push({
                    "carno":'A6666',
                    "docId":"123",
                    "platId":"123",
                    "inData": new Date(),
                    "outData":new Date(),
                    "platSta":1,
                    "platBeizhu":'1212',
                    "planIndata":new Date(),
                    "planOutdata":new Date(),

                })
            }
        }
    }
</script>