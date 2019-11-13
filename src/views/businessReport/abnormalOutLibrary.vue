<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    出库通知单: <Input type="text" style="width: 150px" v-model="abnrequestparams.omnoticeid"/>
                </Col>
                <Col :span="6">
                    客户编码: <Input type="text" style="width: 150px" v-model="abnrequestparams.cuscode"/>
                </Col>
                <Col :span="6">
                    客户名称: <Input type="text" style="width: 150px" v-model="abnrequestparams.zhongwenqch"/>
                </Col>
                <Col :span="6">
                    状态: <Input type="text" style="width: 183px" v-model="abnrequestparams.omsta"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    商 品 编 码: <Input type="text" style="width: 150px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width: 150px"/>
                </Col>
            </Row>
            <Row style="margin-top:5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 75%" @click="AbnorTestDate">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px" @click="AbnorReset">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="abncolumns" :data="abndata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as AbnorApi from '@/api/businessReport/abnormalOutLibrary.js'
    export default {
        name: "abnormalOutLibrary",
        data(){
            return {
                abncolumns:this.abnormalcolunms(),
                abndata:[],
                abnrequestparams:{
                    page:1,
                    size:10,
                    total:0,
                    omnoticeid:'',
                    cuscode:'',
                    zhongwenqch:'',
                    omsta:''
                }
            }
        },
        methods:{
            abnormalcolunms(){
                let abnarr = [
                    {title:'出库通知单',key:'omnoticeid',align:'center'},
                    {title:'客户编码',key:'cuscode',align:'center'},
                    {title:'客户名称',key:'zhongwenqch',align:'center'},
                    {title:'状态',key:'omsta',align:'center'},
                    {title:'商品编码',key:'goodsid',align:'center'},
                    {title:'商品名称',key:'shpmingcheng',align:'center'},
                    {title:'通知数量',key:'goodsqua',align:'center'},
                    {title:'任务数量',key:'goodsquaok',align:'center'},
                    {title:'单位',key:'baseunit',align:'center'}
                ];
                return abnarr;
            },
            AbnorTestDate(){
                let local = localStorage.getItem("Abnordate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    AbnorApi.AbnorLits(this.abnrequestparams).then(res=>{
                        localStorage.setItem("Abnordate",JSON.stringify(res.data.data.rows));
                        this.abndata = res.data.data.rows;
                    })
                }else if(this.abnrequestparams.omnoticeid !='' || this.abnrequestparams.cuscode || this.abnrequestparams.zhongwenqch != ''
                || this.abnrequestparams.omsta != ''){
                    AbnorApi.AbnorInquire(this.abnrequestparams).then(res=>{
                        this.abndata = res.data.data.rows;
                    })
                }else{
                    this.abndata = list;
                }
            },
            AbnorReset(){
                this.abnrequestparams = {page:1,size:10,total:0,omnoticeid:'',cuscode:'',zhongwenqch:'',omsta:''};
                this.AbnorTestDate();
            }
        },
        created() {
            this.AbnorTestDate()
        }
    }
</script>

<style scoped>

</style>
