<template>
    <div>
        <Card dis-hover>
            <Row>
                <Col :span="6">
                    创建人登录名: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    创建日期: <DatePicker style="width: 200px" split-panels type="daterange"></DatePicker>
                </Col>
                <Col :span="6">
                    商品编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    商品名称:  <Input type="text" style="width:150px"/>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Col :span="6">
                    原始单据编码: <Input type="text" style="width:150px"/>
                </Col>
                <Col :span="6">
                    库位编码: <Input type="text" style="width:200px"/>
                </Col>
                <Col :span="6">
                    托盘码: <Input type="text" style="width:150px;margin-left: 5%"/>
                </Col>
                <Col :span="6">
                    货主: <Select style="width: 150px;margin-left: 9%"></Select>
                </Col>
            </Row>
            <Row style="margin-top: 5px">
                <Button style="margin-left: 2px" icon="md-add">录入</Button>
                <Button style="margin-left: 2px" icon="md-search">查看</Button>
                <Button style="margin-left: 2px" icon="md-cloud-download">导入库存</Button>
                <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
                <Button style="margin-left: 2px" icon="md-download">模板下载</Button>
                <Button style="margin-left: 2px">选择修改</Button>
                <Button style="margin-left: 2px">修改保存</Button>
                <Button style="margin-left: 2px">取消修改</Button>
                <Button icon="md-search" style="margin-left: 10%">查询</Button>
                <Button icon="md-refresh" style="margin-left: 5px">重置</Button>
            </Row>
        </Card>
        <Card dis-hover>
            <Table :columns="columns" :data="shedata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as ShelApi from '@/api/ManagementWithinTheLibrary/ShelfAdjustment.js'
    export default {
        name: "ShelfAdjustment",
        data(){
            return {
                columns:this.shecolumns(),
                shedata:[],
                sheresquestparams:{
                    page:1,
                    size:10,
                    total:0
                }
            }
        },
        methods:{
            shecolumns(){
                let shearr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'创建日期',key:'createDate',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'商品名称',key:'goodsName',align:'center'},
                    {title:'数量',key:'goodsQua',align:'center'},
                    {title:'原始单据编码',key:'orderId',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'库位编码',key:'kuWeiBianMa',align:'center'},
                    {title:'托盘码',key:'binId',align:'center'},
                    {title:'货主',key:'cusCode',align:'center'},
                    {title:'基本单位',key:'baseUnit',align:'center'},
                    {title:'基本单位数量',key:'baseGoodscount',align:'center'},
                    {title:'操作',key:'opt',align:'center',render(h,params){
                        return h('span',[
                            h('Button',{props:{type:'success'}},'编辑')
                        ],'')
                        }}
                ];
                return shearr;
            },
            ShelTeseDate(){
                ShelApi.Shellist(this.sheresquestparams).then(res=>{
                    this.shedata = res.data.data.rows;
                    this.sheresquestparams.total = res.data.data.total;
                })
            }
        },
        created() {
            this.ShelTeseDate()
        }
    }
</script>

<style scoped>

</style>