<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    通知单号: <Input type="text" style="width: 150px" v-model="purchaserequestparams.noticeId"/>
                </Col>
                <Col :span="6">
                    客户编码: <Input type="text" style="width: 150px" v-model="purchaserequestparams.cuscode"/>
                </Col>
                <Col :span="6">
                    客 户 名 称: <Input type="text" style="width: 150px" v-model="purchaserequestparams.zhongWenQch"/>
                </Col>
                <Col :span="6">
                    通知单状态: <Input type="text" style="width: 183px" v-model="purchaserequestparams.imSta"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    商品编码: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    客户订单号: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    生产日期: <DatePicker style="width: 200px"/>
                </Col>
            </Row>
            <Row style="margin-top:5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 75%" @click="PurTestDate">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px" @click="PurchaseReset">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="pcolumns" :data="pdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as PurApi from '@/api/businessReport/purchaseNotice.js'
    export default {
        name: "purchaseNotice",
        data(){
            return {
                pcolumns:this.PurchaseColumns(),
                pdata:[],
                purchaserequestparams:{
                    page:1,
                    size:10,
                    total:0,
                    noticeId:'',
                    cuscode:'',
                    zhongWenQch:'',
                    imSta:''
                }
            }
        },
        methods:{
            PurchaseColumns(){
                let Purarr = [
                    {title:'通知单号',key:'noticeId',align:'center'},
                    {title:'客户编码',key:'cuscode',align:'center'},
                    {title:'客户名称',key:'zhongWenQch',align:'center'},
                    {title:'通知单状态',key:'imSta',align:'center'},
                    {title:'商品编码',key:'goodsCode',align:'center'},
                    {title:'商品名称',key:'shpmingcheng',align:'center'},
                    {title:'通知单数量',key:'goodscount',align:'center'},
                    {title:'验收数量',key:'goodsqmcount',align:'center'},
                    {title:'单位',key:'shldanwei',align:'center'},
                    {title:'体积CM3',key:'goodsfvol',align:'center'},
                    {title:'重量KG',key:'goodsweight',align:'center'},
                    {title:'客户订单号',key:'imcuscode',align:'center'},
                    {title:'基本单位数量',key:'basegoodscount',align:'center'},
                    {title:'基本单位',key:'baseunit',align:'center'},
                    {title:'生产日期',key:'goodsprddata',align:'center'}
                ];
                return Purarr;
            },
            PurTestDate(){
                let local = localStorage.getItem("Purdate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    PurApi.PurchaseList(this.purchaserequestparams).then(res=>{
                        localStorage.setItem("Purdate",JSON.stringify(res.data.data.rows));
                        this.pdata = res.data.data.rows;
                    });
                }else if(this.purchaserequestparams.noticeId !='' || this.purchaserequestparams.cuscode || this.purchaserequestparams.zhongWenQch || this.purchaserequestparams.imSta){
                    PurApi.PurchaseInquire(this.purchaserequestparams).then(res=>{
                        this.pdata = res.data.data.rows;
                    })
                }else{
                    this.pdata = list;
                }
            },
            PurchaseReset(){
                this.purchaserequestparams = {page:1,size:10,total:0,noticeId:'',cuscode:'',zhongWenQch:'',imSta:''};
                this.PurTestDate()
            }
        },
        created() {
            this.PurTestDate()
        }
    }
</script>

<style scoped>

</style>
