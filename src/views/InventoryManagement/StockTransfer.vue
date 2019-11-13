<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    商品编码: <Input type="text" style="width: 150px" v-model="stockrequestparmas.CommodityCode"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width: 150px" v-model="stockrequestparmas.productName"/>
                </Col>
                <Col :span="6">
                    客户编码: <Input type="text" style="width: 150px" v-model="stockrequestparmas.CustomerNode"/>
                </Col>
                <Col :span="6">
                    客户名称:<Input type="text" style="width: 150px" v-model="stockrequestparmas.ClientName"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    源托盘: <Input type="text" style="width: 150px;margin-left: 4%"/>
                </Col>
                <Col :span="6">
                    到托盘: <Input type="text" style="width: 150px;margin-left: 4%"/>
                </Col>
                <Col :span="6">
                    源储位: <Input type="text" style="width: 150px;margin-left: 5%"/>
                </Col>
                <Col :span="6">
                    到储位: <Input type="text" style="width: 150px;margin-left: 4%"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    状态: <Input type="text" style="width: 150px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    执行状态: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    转移客户: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    转移客户名称: <Input type="text" style="width: 150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px">选择批量更改</Button>
                <Button style="margin-left: 2px">批量保存</Button>
                <Button style="margin-left: 2px" icon="ios-undo">取消批量更改</Button>
                <Button style="margin-left: 2px" icon="ios-redo">批量确定转移</Button>
                <Button style="margin-left: 2px" icon="md-close">批量删除</Button>
                <Button style="margin-left: 2px" icon="md-search">查看</Button>
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button style="margin-left: 25%" icon="md-search" @click="getTestDate">查询</Button>
                <Button style="margin-left: 5px" icon="md-refresh" @click="StockReset">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="scolumns" :data="sdata" ></Table>
        </Card>
    </div>
</template>

<script>
    import * as StockApi from '@/api/InventoryManagement/StockTransfer.js'
    export default {
        name: "StockTransfer",
        data(){
            return {
                scolumns:this.stcolumns(),
                sdata:[],
                stockrequestparmas:{
                    page:1,
                    size:10,
                    total:0,
                    CommodityCode:'',
                    productName:'',
                    CustomerNode:'',
                    ClientName:''
                }
            }
        },
        methods:{
            stcolumns(){
                let sarr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'序号',type:'index',align:'center'},
                    {title:'创建人名称',key:'CreatorName',align:'center'},
                    {title:'创建日期',key:'CreationDate',align:'center'},
                    {title:'更新人名称',key:'UpdaterName',align:'center'},
                    {title:'更新日期',key:'Updated',align:'center'},
                    {title:'商品编码',key:'CommodityCode',align:'center'},
                    {title:'商品名称',key:'productName',align:'center'},
                    {title:'数量',key:'Quantity',align:'center'},
                    {title:'基本单位数量',key:'NumberOfBasicUnits',align:'center'},
                    {title:'生产日期',key:'ProductionDate',align:'center'},
                    {title:'单位',key:'unit',align:'center'},
                    {title:'客户编码',key:'CustomerNode',align:'center'},
                    {title:'客户名称',key:'ClientName',align:'center'},
                    {title:'操作',key:'opt',align:'center',render(h,params){
                        return h('span',[
                            h('Button',{props:{type:'success'}},'编辑')
                        ],'')
                        }}
                ];
                return sarr;
            },
            getTestDate(){
                let local = localStorage.getItem("stockdate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    StockApi.stocklist(this.stockrequestparmas).then(res=>{
                        localStorage.setItem("stockdate",JSON.stringify(res.data.data.rows));
                        this.sdata = res.data.data.rows;
                    })
                }else if(this.stockrequestparmas.CommodityCode !='' || this.stockrequestparmas.productName !='' || this.stockrequestparmas.CustomerNode !='' || this.stockrequestparmas.ClientName !=''){
                    StockApi.StockInquire(this.stockrequestparmas).then(res=>{
                        this.sdata = res.data.data.rows;
                    })
                }
                else{
                    this.sdata = list;
                }
            },
            StockReset(){
                this.stockrequestparmas = {page:1,size:10,total:0,CommodityCode:'',productName:'',CustomerNode:'',ClientName:''};
                this.getTestDate()
            }
        },
        created() {
            this.getTestDate()
        }
    }
</script>

<style scoped>

</style>