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
                <Col span='5'>
                    <FormItem label="计划进行时间:">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
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
        <Table :columns="PlatformPlanColumns" :data="PlatformPlanData" highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp;<Button type="success" @click="PlatformPlanWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button type="info" @click="PlatformPlanWindow(1)"><Icon type="ios-search-outline" />查看</Button>
            </template>
        </Table>
        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
        <platform-plan-model ref="plan"></platform-plan-model>
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
            PlatformPlanModel:()=>import('@/views/PlatformManagement/model/PlatformPlanModel')
         },
        data(){
            return{
                //月台计划的表头
                PlatformPlanColumns:this.PlatformPlanColumnss(),
                //月台计划存存放的数据
                PlatformPlanData:[],
                //月台计划的分页
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
                //月台计划查看
                show:{},
                //月台计划点击删除时提示框的状态
                modal2:false,
                modal_loading:false
            }
        },
        methods:{
            //月台计划选中某一行时执行对方法
            changeTableData(data){
                this.show=data
                /*console.log(data)*/
            },
            //月台计划查看和修改增加的对话框
            PlatformPlanWindow(data){
                if(data==1){
                    console.log(this.show.carno)
                    if(this.show.carno!=null){
                        this.$refs.plan.status=1
                        this.$refs.plan.PlatformPlanModel=this.show;
                        this.$refs.plan.modal1=true;
                        this.$refs.plan.disableds=true;
                    }else{
                        this.$Message.warning('请选中一行进行查看');
                    }

                }else if(data!=null){
                    this.$refs.plan.status=2
                    this.$refs.plan.PlatformPlanModel=data;
                    this.$refs.plan.modal1=true;
                    this.$refs.plan.disableds=false;
                }else{
                    this.$refs.plan.status=3
                    this.$refs.plan.PlatformPlanModel={};
                    this.$refs.plan.modal1=true;
                    this.$refs.plan.disableds=false;
                }

            },
            //月台计划表头数据的获取方法
            PlatformPlanColumnss(){
                let that=this
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'carno',title:'车号',align:'center'},
                    {key:'docId',title:'单位编号',align:'center'},
                    {key:'platId',title:'月台编号',align:'center'},
                    {key:'inData',title:'进入时间',align:'center'},
                    {key:'outData',title:'驶出时间',align:'center'},
                    {key:'platSta',title:'月台状态',align:'center'},
                    {key:'platBeizhu',title:'备注',align:'center'},
                    {key:'planIndata',title:'计划进入时间 ',align:'center'},
                    {key:'planOutdata',title:'计划驶出时间',align:'center'},
                    {key:'opt',title:'操作',align:'center',width:'200px', render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.PlatformPlanWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.PlatformPlanRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }}
                ]
                return newDate
            },
            //月台计划分页
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
            //月台计划删除
            PlatformPlanRemove(){
                this.modal2=true
            },
            //月台计划点击确认删除后执行的方法
            del(){

            }

        },
        created() {
            for (let i=0;i<5;i++){
                this.PlatformPlanData.push({
                    "carno":123,
                    "docId":"郭旭",
                    "platId":"12",
                    "inData":new Date(),
                    "outData":new Date(),
                    "platSta":1,
                    "platBeizhu":'真好',
                    "planIndata": new Date(),
                    "planOutdata":new Date()
                })
            }
        }
    }
</script>