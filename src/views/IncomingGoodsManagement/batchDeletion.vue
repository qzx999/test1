<template>
    <div>
        <Form :label-width="100">
            <Form :label-width="100" >
                <Row style="margin-top: 15px">
                    <Col span='4'>
                        <FormItem label="到货通知单:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span='4'>
                        <FormItem label="客户订单号:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span='4'>
                        <FormItem label="备注:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span='4'>
                        <FormItem label="商品编码:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span='4'>
                        <FormItem label="商品名称:">
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
        </Form>
        <Table :columns="batchDeletionColumns" :data="batchDeletionData"  highlight-row  @on-current-change="changeTableData">
        </Table>
        <batch-deletion ref="batch"></batch-deletion>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                batchDeletionColumns:this.batchDeletionColumnss(),
                batchDeletionData:[],

            }
        },
        components:{
            batchDeletion:()=>import('@/views/IncomingGoodsManagement/model/batchDeletionModel.vue')
        },
        methods:{
            changeTableData(){

            },
            batchDeletionColumnss(){
                let that=this
                let newDate=[
                    {type:"index",title:'序号',align:"center"},
                    {type:"selection",width:'35px',align:"center"},
                    {key:'createName',title:'创建人名称',align:'center'},
                    {key:'createDate',title:'创建日期',align:'center'},
                    {key:'imNoticeId',title:'到货通知单',align:'center'},
                    {key:'imCusCode',title:'客户订单号',align:'center'},
                    {key:'imBeizhu',title:'备注',align:'center'},
                    {key:'goodsCode',title:'商品编号',align:'center'},
                    {key:'goodsName',title:'商品名称',align:'center'},
                    {key:'goodsCount',title:'预约数量',align:'center'},
                    {key:'goodsQmCount',title:'已登记数量',align:'center'},
                    {key:'goodsUnit',title:'单位',align:'center'},
                    {key:'otp',title:'操作',align:'center',render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.batchDeletionWindow(pamase.row)
                                        }}},'验收')
                            ],'');

                        }},
                ]
                return newDate
            },
            //验收
            batchDeletionWindow(data){
                this.$refs.batch.modal1=true;
                this.$refs.batch.batchDeletionModel=data;
            },
            //加载表格数据
            getbatchDeletionList(){
                for(let i=0;i<3;i++){
                    this.batchDeletionData.push({
                    'createName':"傲然",
                    'createDate':new Date(),
                    'imNoticeId':1231,
                    'imCusCode':'asdas',
                    'imBeizhu':"hahah",
                    'goodsCode':"A3333",
                    'goodsName':"辣条",
                    'goodsCount':12,
                    'goodsQmCount':12,
                    'goodsUnit':"chen",

                    })
                }
            }

        },
        created() {
            this.getbatchDeletionList()
        }
    }
</script>