<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="备注:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="货主:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="回单时间:">
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
        <Table :columns="receiptManageColumns" :data="receiptManageData" highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp;<Button type="success" @click="receiptManageWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button @click="receiptManageImport" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="receiptManageExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="receiptManageTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>
        </Table>
        <receiptManageModel ref="receipt"></receiptManageModel>
    </div>
</template>

<script>
    export default {
        name: "receiptManage",
        components:{
            receiptManageModel:()=>import("@/views/outGoods/model/receiptManageModel.vue")
        },
        data(){
            return{
                receiptManageColumns:this.receiptManageColumnss(),
                receiptManageData:[],
                show:{}
            }
        },
        methods:{
            //导入
            receiptManageImport(){

            },
            //导出
            receiptManageExport(){

            },
            changeTableData(data){
                this.show=data
            },
            //模板下载
            receiptManageTemplateDownload(){

            },
            //修改查看增加
            receiptManageWindow(data,shu){
                console.log(data)
                if(shu==1){
                        this.$refs.receipt.status=1
                        this.$refs.receipt.receiptManageModelData=data
                        this.$refs.receipt.modal1=true;
                        this.$refs.receipt.disableds=true;


                }else if(data!=null){
                    this.$refs.receipt.status=2
                    this.$refs.receipt.receiptManageModelData=data;
                    this.$refs.receipt.modal1=true;
                    this.$refs.receipt.disableds=false;
                }else{
                    this.$refs.receipt.status=3
                    this.$refs.receipt.receiptManageModelData={};
                    this.$refs.receipt.modal1=true;
                    this.$refs.receipt.disableds=false;
                }
            },
            //删除
            receiptManageRemove(){
                    this.$Modal.confirm({
                        title: '删除提示',
                        content: '确认要删除嘛？',
                        onOk: () => {
                            this.$Message.info('删除成功');
                        },
                        onCancel: () => {
                            this.$Message.info('删除失败');
                        }
                    });
            },
            receiptManageColumnss(){
                let that=this
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'createName',title:'创建人名称',align:'center'},
                    {key:'createDate',title:'创建日期',align:'center'},
                    {key:'wmNoticeId',title:'单号',align:'center'},
                    {key:'beizhu',title:'备注',align:'center'},
                    {key:'cusCode',title:'货主',align:'center'},
                    {key:'hdData',title:'回单时间',align:'center'},
                    {key:'otp',title:'操作',align:'center',width:'300px', render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.receiptManageWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},style:{marginRight: '10px'},on:{click:()=>{
                                            that.receiptManageWindow(pamase.row,1);
                                        }}},'查看'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.receiptManageRemove(pamase.row);
                                        }}},'删除')
                            ],'');

                        }},
                ]
                return newDate
            }
        },
        created() {
            for(let i=0;i<3;i++){
                this.receiptManageData.push({
                    'createName':"郭雪柯",
                    'createDate':new Date(),
                    'wmNoticeId':"12312",
                    'beizhu':"娃娃福娃的",
                    'cusCode':"laownag",
                    'hdData':new Date(),



                })
            }
        }
    }
</script>

<style scoped>

</style>
