<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    商品编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    客户商品编码: <Input type="text" style="width:170px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width:185px"/>
                </Col>
                <Col :span="6">
                    客户编码: <Input type="text" style="width:150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    客户名称: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    生产日期: <DatePicker style="width: 200px"></DatePicker>
                </Col>
                <Col :span="6">
                    到期日: <DatePicker style="width: 200px"></DatePicker>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="12">
                    剩余比例: <Input type="text" style="width:150px"/>~<Input type="text" style="width:150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 60%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="valdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as ValidityApi from '@/api/EarlyWarningManagement/ValidityWarning.js'
    export default {
        name: "ValidityWarning",
        data(){
            return {
                columns:this.valcolumns(),
                valdata:[],
                valresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            valcolumns(){
                let valarr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'库存类型',key:'kuctype',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'客户商品编码',key:'shpBianmakh',align:'center'},
                    {title:'商品名称',key:'shpMingCheng',align:'center'},
                    {title:'基本数量',key:'baseGoodscount',align:'center'},
                    {title:'基本单位',key:'baseUnit',align:'center'},
                    {title:'客户编码',key:'cusCode',align:'center'},
                    {title:'客户名称',key:'zhongWenQch',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'保质期天',key:'bzhiQi',align:'center'},
                    {title:'到期日',key:'dqr',align:'center'},
                    {title:'剩余天数',key:'resDate',align:'center'},
                    {title:'剩余比例',key:'guoqiBili',align:'center'}
                ];
                return valarr;
            },
            ValidityTestDate(){
                ValidityApi.ValidityList(this.valresquestparams).then(res=>{
                    this.valdata = res.data.data.rows;
                    this.valresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.ValidityTestDate()
        }
    }
</script>

<style scoped>

</style>