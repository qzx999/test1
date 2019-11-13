<template>
    <div>
       <Card dis-hover>
           <Row>
               <Col :span="6">
                   移动日期:<DatePicker style="width: 200px" split-panels type="daterange"></DatePicker>
               </Col>
               <Col :span="6">
                   库存类型: <Input type="text" style="width: 150px" v-model="Generaterequestparmas.kuctype"/>
               </Col>
               <Col :span="6">
                   储位: <Input type="text" style="width: 150px;margin-left: 9%"/>
               </Col>
               <Col :span="6">
                   托盘: <Input type="text" style="width: 200px;margin-left: 8%"/>
               </Col>
           </Row>
           <Row style="margin-top: 5px">
               <Col :span="6">
                   货主: <Input type="text" style="width: 200px;margin-left: 8%"/>
               </Col>
               <Col :span="6">
                   货主名称: <Input type="text" style="width: 150px"/>
               </Col>
               <Col :span="6">
                   商品编码: <Input type="text" style="width: 150px"/>
               </Col>
               <Col :span="6">
                   生产日期:<DatePicker style="width: 200px" split-panels type="daterange"></DatePicker>
               </Col>
           </Row>
           <Row style="margin-top: 5px">
               <Button>批量生成托盘转移任务</Button>
               <Button style="margin-left: 5px">立即批量转移</Button>
               <Button style="margin-left: 5px " icon="md-cloud-download">导入</Button>
               <Button style="margin-left: 5px" icon="md-download">模板下载</Button>
               <Button icon="md-search" @click="GenTestData" style="margin-left: 45%">查询</Button>
               <Button icon="md-refresh" @click="GenReset" style="margin-left: 5px">重置</Button>
           </Row>
       </Card>
        <Card dis-hover>
            <Table :columns="Gcolmuns" :data="Gdata"></Table>
        </Card>
    </div>
</template>

<script>
    import * as GenerateApi from '@/api/InventoryManagement/GenerateInventoryTransfer.js'
    export default {
        name: "GenerateInventoryTransfer",
        data(){
            return {
                Gcolmuns:this.Generatecolumns(),
                Gdata:[],
                Generaterequestparmas:{
                    page:1,
                    size:10,
                    total:0,
                    kuctype:''
                }
            }
        },
        methods:{
            Generatecolumns(){
                let Garr = [
                    {title:'',type:'selection',align:'center'},
                    {title:'移动日期',key:'lastMove',align:'center'},
                    {title:'库存类型',key:'kuctype',align:'center'},
                    {title:'储位',key:'kuWeiBianMa',align:'center'},
                    {title:'托盘',key:'binId',align:'center'},
                    {title:'货主',key:'cusCode',align:'center'},
                    {title:'货主名称',key:'zhongWenQch',align:'center'},
                    {title:'商品编码',key:'goodsId',align:'center'},
                    {title:'商品数量',key:'goodsQua',align:'center'},
                    {title:'商品名称',key:'shpMingCheng',align:'center'},
                    {title:'生产日期',key:'goodsProData',align:'center'},
                    {title:'保质期',key:'bzhiQi',align:'center'},
                    {title:'单位',key:'goodsUnit',align:'center'},
                    {title:'状态',key:'moveSta',align:'center'},
                    {title:'操作',key:'opt',align:'center'}
                ];
                return Garr;
            },
            GenTestData(){
                let local = localStorage.getItem("generatedate");
                let list = JSON.parse(local);
                if(list == null || list.length == 0){
                    GenerateApi.Generatelist(this.Generaterequestparmas).then(res=>{
                        localStorage.setItem("generatedate",JSON.stringify(res.data.data.rows));
                        this.Gdata = res.data.data.rows;
                    })
                }else if(this.Generaterequestparmas.kuctype !=''){
                    GenerateApi.GenerateInquire(this.Generaterequestparmas).then(res=>{
                        this.Gdata = res.data.data.rows;
                    })
                }else {
                    this.Gdata = list;
                }
            },
            GenReset(){
                this.Generaterequestparmas = {page:1,size:10,total:0,kuctype:''};
                this.GenTestData()
            }
        },
        created() {
            this.GenTestData()
        }
    }
</script>

<style scoped>

</style>