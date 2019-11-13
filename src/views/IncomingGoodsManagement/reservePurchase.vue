<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="进货通知单号:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="客户编码:">
                        <Select  style="width:200px">
                            <Option value="i1" key="1">1</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span='4'>
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
                    <FormItem label="运输号码:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="运输公司:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="订单类型:">
                        <Select  style="width:200px">
                            <Option value="i1" key="1">1</Option>
                        </Select>
                    </FormItem>
                </Col>
               <!-- <Col span='4'>
                    <FormItem label="月台:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>-->
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
        <Table :columns="reservePurchaseColumns" :data="reservePurchaseData"  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp; <Button type="success" @click="reservePurchaseWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button type="info" @click="reservePurchaseWindow(1)"><Icon type="ios-search-outline" />查看</Button>
                &nbsp;<Button @click="reservePurchaseImport" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="reservePurchaseTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
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
                <Button type="error"  @click="del">确认删除</Button> <Button @click="cancel">取消</Button>
            </div>
        </Modal>
        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                //预约进货表头
                reservePurchaseColumns:this.reservePurchaseColumnss(),
                reservePurchaseData:[],
                //选中行的数据
                show:{},
                //删除提示框的状态
                modal2:false,
                modal_loading:false,
                requestParameters:{
                    page:1,
                    size:5,
                    total:0,
                },
                current:1,
            }
        },
        methods:{
            cancel(){
                this.modal2=false
            },
            //预约进货分页
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
            //点击确认删除时执行的方法
            del(){

            },
            //选中表格某一行执行的方法
            changeTableData(){

            },
            //预约进货导入
            reservePurchaseImport(){

            },
            //预约进货模板下载
            reservePurchaseTemplateDownload(){

            },
            //新增修改查看的对话框
            reservePurchaseWindow(data){

            },
            //动态获取表格数据的方法
            reservePurchaseList(){

            },
            reservePurchaseColumnss(){
                let that=this
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {type:'selection',align:'center'},
                    {key:'createName',title:'创建人名称',align:'center'},
                    {key:'createDate',title:'创建日期',align:'center'},
                    {key:'noticeId',title:'进货通知单号',align:'center'},
                    {key:'cusCode',title:'客户编码',align:'center'},
                    {key:'imData',title:'预计到货时间',align:'center'},
                    {key:'imCusCode',title:'客户订单号',align:'center'},
                    {key:'imCarNo',title:'运输号码',align:'center'},
                    {key:'imCarDri',title:'运输公司',align:'center'},
                    {key:'orderTypeCode',title:'订单类型',align:'center'},
                    {key:'imBeizhu',title:'备注',align:'center'},
                    {key:'imSta',title:'单据状态',align:'center'},
                    {key:'otp',title:'操作',align:'center',width:'200px',render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.reservePurchaseWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.reservePurchaseRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }},
                ]
                return newDate
            },
            //查看修改和新增的对话框
            reservePurchaseWindow(){

            },
            //点击删除时执行的方法
            reservePurchaseRemove(){
                this.modal2=true
            }

        },
        created() {
            this.reservePurchaseData.push({
                "createName":'郭傲然',
                "createDate":new Date(),
                "noticeId":'ds000',
                "cusCode":1231,
                "imData":new Date(),
                "imCusCode":222,
                "imCarNo":12312,
                "imCarDri":"陈村分店",
                "orderTypeCode":"高级订单",
                "imBeizhu":"12312",
                "imSta":"已完成"
            })
        }
    }
</script>