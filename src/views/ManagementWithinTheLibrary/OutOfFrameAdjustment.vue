<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    原始单据编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    商品编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    商品名称: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    客户订单号: <Input type="text" style="width:150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    备注:  <Input type="text" style="width:150px;margin-left: 18%"/>
                </Col>
                <Col :span="6">
                    源托盘码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    库位编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    货主: <Select style="width: 150px;margin-left: 14%"></Select>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    目标托盘: <Select style="width: 150px;margin-left: 9%"></Select>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px" icon="md-refresh">查看</Button>
                <Button style="margin-left: 2px " icon="md-cloud-upload">导出</Button>
                <Button style="margin-left: 2px">选择修改</Button>
                <Button style="margin-left: 2px">修改保存</Button>
                <Button style="margin-left: 2px">取消修改</Button>
                <Button icon="md-search" style="margin-left: 50%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="outdata"></Table>
        </Card>
    </div>
</template>
<script>
    import * as OutApi from '@/api/ManagementWithinTheLibrary/OutOfFrameAdjustment.js'
    export default {
        name: "OutOfFrameAdjustment",
        data(){
            return {
                columns:this.outcolumns(),
                outdata:[],
               outresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            outcolumns(){
                let outarr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'创建日期',key:'createDate',align:'center'},
                    {title:'原始单据编码',key:'orderId',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'客户订单号',key:'imCusCode',align:'center'},
                    {title:'备注',key:'omBeizhu',align:'center'},
                    {title:'数量',key:'goodsQua',align:'center'},
                    {title:'复核数量',key:'goodsQuaok',align:'center'},
                    {title:'基本单位',key:'baseGoodscount',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'源托盘码',key:'binIdFrom',align:'center'},
                    {title:'库位编码',key:'kuWeiBianMa',align:'center'},
                    {title:'货主',key:'cusCode',align:'center'},
                ];
                return outarr;
            },
            OutOfTestDate(){
                OutApi.OutOflist(this.outresquestparams).then(res=>{
                    this.outdata = res.data.data.rows;
                    this.outresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.OutOfTestDate()
        }
    }
</script>

<style scoped>

</style>