<template>
    <div>
        <Form :label-width="100">
            <Row style="margin-top: 15px">
                <Col span='4'>
                    <FormItem label="到货通知单:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="客户订单号:">
                        <Select  style="width:200px">
                            <Option value="i1" key="1">1</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品编码:">
                        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="商品名称:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="托盘:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <FormItem label="储位:">
                        <Input type="text"></Input>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="货主:">
                        <Select  style="width:200px">
                            <Option value="i1" key="1">1</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span='5'>
                    <FormItem label="是否已上架:">
                        <Select  style="width:200px">
                            <Option value="i1" key="1">1</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span='4'>
                    <Button type="info">
                        <Icon type="md-search" />
                        查询
                    </Button>
                    &nbsp;
                    <Button type="info">
                    <Icon type="md-sync" />
                    重置
                </Button>
                </Col>
            </Row>
        </Form>
        <Table :columns="receiptLevelColumns" :data="receiptLevelData"  highlight-row  @on-current-change="changeTableData">
            <template slot='header'>
                &nbsp; <Button type="success" @click="receiptLevelWindow(null)"><Icon type="md-add" />新增</Button>
                &nbsp;<Button type="info" @click="receiptLevelWindow(1)"><Icon type="ios-search-outline" />查看</Button>
                &nbsp;<Button @click="receiptLevelImport" type="info"><Icon type="md-arrow-down" />导入</Button>
                &nbsp;<Button @click="receiptLevelExport" type="info"><Icon type="ios-cloud-upload-outline" />导出</Button>
                &nbsp;<Button @click="receiptLevelTemplateDownload" type="info"><Icon type="ios-cloud-download-outline" />模板下载</Button>
            </template>
        </Table>
        <receiptLevel ref="level"></receiptLevel>

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
        <div style="margin-left:40%" >
            <Page :total="this.requestParameters.total" :page-size="this.requestParameters.size" :current.sync="current" @on-change="subPageChange"  @on-page-size-change="subPageSizeChange"/>
        </div>
    </div>
</template>
<script>
    export default {
        components:{
            receiptLevel:()=>import('@/views/IncomingGoodsManagement/model/receiptLevelModel.vue')
        },
        data(){
            return{
                //表头
                receiptLevelColumns:this.receiptLevelColumnss(),
                receiptLevelData:[],
                show:{},
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
            //点击确认删除后执行的方法
            del(){

            },
            //选中某行要执行的方法
            changeTableData(data){
                this.show=data
            },
            //查询新增修改方法
            receiptLevelWindow(data){
                if(data==1){
                    console.log(this.show.createName)
                    if(this.show.createName!=null){
                        this.$refs.level.status=1
                        this.$refs.level.receiptLevelModel=this.show;
                        this.$refs.level.modal1=true;
                        this.$refs.level.disableds=true;
                    }else{
                        this.$Message.warning('请选中一行进行查看');
                    }

                }else if(data!=null){
                    this.$refs.level.status=2
                    this.$refs.level.receiptLevelModel=data;
                    this.$refs.level.modal1=true;
                    this.$refs.level.disableds=false;
                }else{
                    this.$refs.level.status=3
                    this.$refs.level.receiptLevelModel={};
                    this.$refs.level.modal1=true;
                    this.$refs.level.disableds=false;
                }

            },
            //导入
            receiptLevelImport(){

            },
            //导出
            receiptLevelExport(){

            },
            //模板下载
            receiptLevelTemplateDownload(){

            },
            //获取表头数据的方法
            receiptLevelColumnss(){
                let that=this
                let newDate=[
                    {type:'index',title:'序号',align:'center'},
                    {key:'createName',title:'验收人',align:'center'},
                    {key:'createDate',title:'收货日期',align:'center'},
                    {key:'imNoticeId',title:'到货通知单 ',align:'center'},
                    {key:'imCusCode',title:'客户订单号 ',align:'center'},
                    {key:'goodsId',title:'商品编码',align:'center'},
                    {key:'goodsName',title:'商品名称',align:'center'},
                    {key:'imQuat',title:'到货数量 ',align:'center'},
                    {key:'qmOkQuat',title:'数量 ',align:'center'},
                    {key:'itemText',title:'备注',align:'center'},
                    {key:'tinId',title:'托盘',align:'center'},
                    {key:'goodsUnit',title:'单位 ',align:'center'},
                    {key:'binId',title:'储位 ',align:'center'},
                    {key:'tinTj',title:'体积  ',align:'center'},
                    {key:'tinZhl',title:'重量 ',align:'center'},
                    {key:'baseUnit',title:'基本单位 ',align:'center'},
                    {key:'baseGoodscount',title:'基本单位数量  ',align:'center'},
                    {key:'cusCode',title:'货主  ',align:'center'},
                    {key:'binSta',title:'是否已上架 ',align:'center'},
                    {key:'otp',title:'操作 ',width:'100px',align:'center',render(h,pamase){
                            return h('span',[
                                h('Button',{props:{type:'primary',ghost:true,icon:'ios-color-wand'},style:{marginRight: '10px'},on:{
                                        click:()=>{
                                            that.receiptLevelWindow(pamase.row)
                                        }}},'修改'),
                                h('Button',{props:{type:'error',ghost:true,icon:'ios-trash'},on:{click:()=>{
                                            that.receiptLevelRemove(pamase.row);
                                        }}},'删除')
                            ],'');
                        }}
                ]
                return newDate
            },
            receiptLevelRemove(){
                this.modal2=true
            }
        },
        created() {
            for(let i=0;i<3;i++){
                this.receiptLevelData.push({
                    'createName':'郭雪柯',
                    'createDate':new Date(),
                    'imNoticeId':1231,
                    'imCusCode':12312,
                    'goodsId':'12312',
                    'goodsName':'辣条',
                    'imQuat':12,
                    "qmOkQuat":12,
                    "itemText":"sdsds",
                    "tinId":123,
                    "goodsUnit":'陈醋',
                    "binId":"1",
                    "tinTj":13,
                    "tinZhl":12,
                    "baseUnit":"123",
                    "baseGoodscount":'123',
                    "cusCode":"沟够",
                    'binSta':2,
                })
            }
        }
    }
</script>