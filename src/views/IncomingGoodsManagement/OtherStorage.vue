<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="通知单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="预计到货时间:">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="客户订单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="车号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="司机:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="司机电话:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="订单类型:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="月台:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="单据状态:">
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
        <Table :columns="OtherStorageColumns" :data="OtherStorageData"  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp; <Button type="success" @click="OtherStorageWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button type="info" @click="OtherStorageWindow(1)"><Icon type="ios-search-outline" />查看</Button>
                &nbsp;<Button @click="OtherStorageImport" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="OtherStorageExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="OtherStorageTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>
        </Table>
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
        <other-storage-model ref="stroage"></other-storage-model>
    </div>
</template>
<script>
    export default {
        components:{
            OtherStorageModel:()=>import('@/views/IncomingGoodsManagement/model/OtherStorageModel.vue')
        },
        data(){
            return{
                OtherStorageColumns:this.OtherStorageColumnss(),
                OtherStorageData:[],
                modal2:false,
                modal_loading:false,
                show:{}
            }
        },


        methods:{
            changeTableData(data){
                this.show=data
            },
            //其它入库导出
            OtherStorageExport(){

            },
            //其它入库导入
            OtherStorageImport(){

            },
            batchDeletion(){

            },
            //其它入库下载
            OtherStorageTemplateDownload(){

            },
            //点击删除后执行的方法
            del(){

            },
            OtherStorageColumnss(){
                let that=this
                let newData=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'createDate',title:'创建日期 ',align:'center'},
                    {key:'noticeId',title:'通知单号',align:'center'},
                    {key:'cusCode',title:'创建人名称',align:'center'},
                    {key:'createName',title:'客户编码',align:'center'},
                    {key:'imData',title:'预计到货时间',align:'center'},
                    {key:'imCusCode',title:'客户订单号',align:'center'},
                    {key:'imCarNo',title:'车号',align:'center'},
                    {key:'imCarDri',title:'司机',align:'center'},
                    {key:'imCarMobile',title:'司机电话',align:'center'},
                    {key:'orderTypeCode',title:'订单类型 ',align:'center'},
                    {key:'platformCode',title:'月台',align:'center'},
                    {key:'imBeizhu',title:'备注',align:'center'},
                    {key:'imSta',title:'单据状态',align:'center'},
                    {key:'opt',title:'操作',align:'center',render(h,pamase){

                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.OtherStorageWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.OtherStorageRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }},
                ]
                return newData;
            },
            //修改查看增加
            OtherStorageWindow(data){
                if(data==1){
                    console.log(this.show.cusCode)
                    if(this.show.cusCode!=null){
                        this.$refs.stroage.status=1
                        this.$refs.stroage.PlatformManagementModel=this.show;
                        this.$refs.stroage.modal1=true;
                        this.$refs.stroage.disableds=true;
                    }else{
                        this.$Message.warning('请选中一行进行查看');
                    }

                }else if(data!=null){
                    this.$refs.stroage.status=2
                    this.$refs.stroage.PlatformManagementModel=data;
                    this.$refs.stroage.modal1=true;
                    this.$refs.stroage.disableds=false;
                }else{
                    this.$refs.stroage.status=3
                    this.$refs.stroage.PlatformManagementModel={};
                    this.$refs.stroage.modal1=true;
                    this.$refs.stroage.disableds=false;
                }
            },
            //删除数据
            OtherStorageRemove(){
                this.modal2=true
            }
        },
        created() {
            this.OtherStorageData.push({
            'createDate':new Date(),
            'noticeId':'1212',
            'cusCode':"郭雪柯",
            'createName':"hahaha",
            'imData':new Date(),
            'imCusCode':"q2e",
            'imCarNo':"A666",
            'imCarDri':"dad",
            'imCarMobile':"14434343",
            'orderTypeCode':"hao",
            'platformCode':"sds",
            'imBeizhu':"sdsds",
            'imSta':1
            })
        }
    }
</script>