<template>
    <div>
        <Divider orientation="left">
            <span>温度类型</span>
        </Divider>
        <div>
            <Row>
                <Col :span="12">
                    <Button @click="TemperaturePropertyTian(1)" type="info" icon="md-create">查看</Button>
                    <Button type="error" icon="md-create" @click="TemperaturePropertyDelete(shan)">批量删除</Button>
                    <Button type="success" icon="md-create" @click="ProductDao(null)">Excel数据导入</Button>
                    <Button type="warning" icon="ios-folder-outline">Excel数据导出</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="TemperatureProperty"  :data="TemperaturePropertyeData" highlight-row  @on-current-change="TemperaturePropertyTable" @on-select="TeShanChu">
            <template slot="btn" slot-scope="scope">
                <Button @click="TemperaturePropertyTian(null)" ghost  type="success" icon="ios-add" >录入</Button>
                <Button @click="TemperaturePropertyTian(scope.row)" ghost type="primary" icon="md-create">编辑</Button>
                <Button @click="TemperaturePropertyChu(scope.row)" ghost type="error" icon="md-create">删除</Button>
            </template>>
        </Table>
        <TemperaturePropertyAdd ref="Property1"></TemperaturePropertyAdd>
    </div>
</template>

<script>
    import * as standardApi from '@/api/TemperatureProperty/TemperatureProperty1.js'
    export default {
        name: "TemperatureProperty",
        data(){
          return{
              TemperatureProperty:this.TemperatureFindAll(),
              TemperaturePropertyeData:[],
              TemperaturePropertyrequest:{
                  page:1,
                  size:5,
                  total:0,
              },
              shanLi:{},
              shan:null
          }
        },
        methods:{
            TeShanChu(data){
               this.shan=data;
            },
            TemperaturePropertyTable(data){  //选一行
                this.shanLi=data;
            },
            TemperaturePropertyDelete(data){
                if(data==null){
                    this.$Message.error('请选中删除一行删除')
                    return false;
                }else{
                    this.TemperaturePropertyChu(this.shan);
                }
            },
            TemperaturePropertyTian(data){
                if(data==1){
                    if(this.shanLi.goods_type_code!=null){
                        this.$refs['Property1'].Temove=1
                        this.$refs['Property1'].TemperaturePropertyAddData=this.shanLi;
                        this.$refs['Property1'].TemperaturePropertyAdd=true;
                    }else{
                        this.$Message.error('请选中一行进行查看');
                    }
                }else if(data!=null){
                    this.$refs['Property1'].Temove=2
                    this.$refs['Property1'].TemperaturePropertyAddData=data;
                    this.$refs['Property1'].TemperaturePropertyAdd={};
                }else{
                    this.$refs['Property1'].Temove=3
                    this.$refs['Property1'].TemperaturePropertyAddData={};
                    this.$refs['Property1'].TemperaturePropertyAdd={};
                }
            },
            TemperaturePropertyChu(data){
                this.$Modal.confirm({
                    title:'友情提示',
                    content:`确认删除吗`,
                    onOk:()=>{
                        standardApi.TemperaturePropertyShanChu1(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.TemperatureTestData();
                        })
                    },
                    onCancel:()=>{
                        this.TemperatureTestData();
                    }
                })
            },
            TemperatureTestData(){  //查看信息
                standardApi.TemperaturePropertyFindAll(this.TemperaturePropertyrequest).then(res=>{
                    this.TemperaturePropertyeData = res.data.data.rows;
                    this.TemperaturePropertyrequest.total = res.data.data.total;
                })
            },
            TemperatureFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center',width:50},
                    {title:'温层代码',key:'deg_type_code',align:'center'},
                    {title:'温层名称',key:'deg_type_name',align:'center'},
                    {title:'操作 ',key:'opt',align:'center',slot:'btn',slot:'btn'},
                ]
                return arr;
            }
        },
        created(){
            this.TemperatureTestData();
        },
        components:{
            TemperaturePropertyAdd:()=>import('@/views/WarehouseConfiguration/TemperatureProperty/TemperaturePropertyAdd.vue'),
        },

    }
</script>

<style scoped>

</style>