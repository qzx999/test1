<template>
    <div>
        <Divider orientation="left">
            <span>订单类型</span>
        </Divider>
        <Row>
            <Col :span="12">
                <Button @click="OrdertypeTian(1)" type="info" icon="md-create">查看</Button>
                <Button type="error" icon="md-create">批量删除</Button>
                <Button type="success" icon="md-create">Excel数据导入</Button>
                <Button type="warning" icon="ios-folder-outline">Excel数据导出</Button>
            </Col>
        </Row>
        <Table :columns="OrdertypeColumns" :data="OrdertypeData">
            <template slot="btn" slot-scope="scope">
                <Button @click="OrdertypeTian(null)" ghost  type="success" icon="ios-add" >录入</Button>
                <Button @click="OrdertypeTian(scope.row)" ghost type="primary" icon="md-create">编辑</Button>
                <Button @click="OrdertypeShanChu(scope.row)" ghost type="error" icon="md-create">删除</Button>
            </template>>
        </Table>
        <OrdertypeAddFindAll ref="OrdertypeRef"></OrdertypeAddFindAll>
    </div>
</template>

<script>
    import * as standardApi from '@/api/WarehouseConfiguration/Ordertype.js'
    export default {
        name: "Ordertype",
        data(){
            return{
                OrdertypeColumns:this.OrdertypeColumnsFindAll(),
                OrdertypeData:[],
                Ordertyperequest:{
                    page:1,
                    size:5,
                    total:0,
                },
            }
        },
        methods:{
            OrdertypeShanChu(data){  //删除
                this.$Modal.confirm({
                    title:'友情提示',
                    content:`确认删除吗`,
                    onOk:()=>{
                        standardApi.OrdertypeShanChu1(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.OrdertypeTestData();
                        })
                    },
                    onCancel:()=>{
                        this.OrdertypeTestData();
                    }
                })
            },
            OrdertypeTian(data){
                if(data==null){
                    this.$refs['OrdertypeRef'].OrdertypeAddData={};
                    this.$refs['OrdertypeRef'].OrdertypeAddFindAll1={};
                }else{
                    this.$refs['OrdertypeRef'].OrdertypeAddData=data;
                    this.$refs['OrdertypeRef'].OrdertypeAddFindAll1={};
                }
            },
            OrdertypeTestData(){  //查看信息
                standardApi.OrdertypeList(this.Ordertyperequest).then(res=>{
                    this.OrdertypeData = res.data.data.rows;
                    this.Ordertyperequest.total = res.data.data.total;
                })
            },
            OrdertypeColumnsFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center',width:50},
                    {title:'订单类型代码',key:'order_type_code',align:'center'},
                    {title:'订单类型名称',key:'order_type_name',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn',slot:'btn'},
                ]
                return arr;
            }
        },
        created(){
            this.OrdertypeTestData();
        },
        components:{
            OrdertypeAddFindAll:()=>import('@/views/WarehouseConfiguration/OrdertypeAdd/OrdertypeAddFindAll.vue'),
        },
    }
</script>

<style scoped>

</style>