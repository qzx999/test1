<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    储位: <Input type="text" style="width:200px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    托盘: <Input type="text" style="width:200px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    商品编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width:150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    生产日期: <DatePicker style="width: 200px"></DatePicker>
                </Col>
                <Col :span="6">
                    批次: <Input type="text" style="width:200px;margin-left: 9%"/>
                </Col>
                <Col :span="6">
                    客户名称: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    客户: <Select style="width: 150px;margin-left: 9%"></Select>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    盘点状态: <Input type="text" style="width:200px"/>
                </Col>
                <Col :span="6">
                    创建日期: <DatePicker style="width: 200px" split-panels type="daterange"></DatePicker>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px" icon="md-search">查看</Button>
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button icon="md-search" style="margin-left: 60%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="checkdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as CheckApi from '@/api/ManagementWithinTheLibrary/CheckDifferencePost.js'
    export default {
        name: "CheckDifferencePost",
        data(){
            return {
                columns:this.checkcolumns(),
                checkdata:[],
                checkresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            checkcolumns(){
                let checkarr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'储位',key:'binId',align:'center'},
                    {title:'托盘',key:'tinId',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'数量',key:'goodsQua',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'批次',key:'goodsBatch',align:'center'},
                    {title:'盘点数量',key:'sttQua',align:'center'},
                    {title:'客户名称',key:'cusName',align:'center'},
                    {title:'客户',key:'cusCode',align:'center'},
                    {title:'盘点状态',key:'sttSta',align:'center'},
                    {title:'创建人名称',key:'createName',align:'center'},
                    {title:'创建日期',key:'createDate',align:'center'},
                    {title:'更新人名称',key:'updateName',align:'center'},
                    {title:'更新人登录名称',key:'updateBy',align:'center'},
                    {title:'更新日期',key:'updateDate',align:'center'}
                ];
                return checkarr;
            },
            CheckTestDate(){
                CheckApi.CheckList(this.checkresquestparams).then(res=>{
                    this.checkdata = res.data.data.rows;
                    this.checkresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.CheckTestDate()
        }
    }
</script>

<style scoped>

</style>