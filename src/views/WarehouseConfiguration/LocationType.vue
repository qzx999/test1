<template>
   <div>
       <Divider orientation="left">
           <span>库位类型</span>
       </Divider>
     <div>
         <Row>
             <Col :span="12">
                 <Button @click="LocationTypeTian(1)" type="info" icon="md-create">查看</Button>
                 <Button type="error" icon="md-create" @click="ProductTableDelete1(shanOP)">批量删除</Button>
                 <Button type="success" icon="md-create" @click="ProductDao(null)">Excel数据导入</Button>
                 <Button type="warning" icon="ios-folder-outline">Excel数据导出</Button>
             </Col>
         </Row>
     </div>
       <Table :columns="LocationTypeColumns"  :data="LocationTypeDataXiao" highlight-row  @on-current-change="LocationTypeTable"  @on-select="TableShanChu">
           <template slot="btn" slot-scope="scope">
               <Button @click="LocationTypeTian(null)" ghost  type="success" icon="ios-add" >录入</Button>
               <Button @click="LocationTypeTian(scope.row)" ghost type="primary" icon="md-create">编辑</Button>
               <Button @click="LocationTypeShanChu(scope.row)" ghost type="error" icon="md-create">删除</Button>
           </template>>
       </Table>
       <LocationTypeFindAll ref="LocationTypeFindAllref"></LocationTypeFindAll>
   </div>
</template>

<script>
    import * as standardApi from '@/api/LocationType/LocationTypeAdd.js'
    export default {
        name: "LocationType",
        data(){
            return{
                LocationTypeColumns:this.LocationTypeFindAll(),
                LocationTypeDataXiao:[],
                LocationTyperequest:{
                    page:1,
                    size:5,
                    total:0,
                },
                tianXiao:{},
                shanOP:null
            }
        },
        methods:{
            LocationTypeTable(data){
                this.tianXiao=data
            },
            TableShanChu(data){
                this.shanOP=data;
            },
            ProductTableDelete1(data){
                if(data==null){
                    this.$Message.error('请选中要删除的');
                    return false;
                }else{
                    this.LocationTypeShanChu(this.shanOP);
                }
            },
            LocationTypeFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center',width:50},
                    {title:'单位代码',key:'goods_type_code',align:'center'},
                    {title:'单位名称',key:'goods_type_name',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn'},
                ]
                return arr;
            },
            LocationTypeTian(data){
                if(data==1){  //如果等于1的时候走查看
                    if(this.tianXiao.goods_type_code!=null){
                        this.$refs['LocationTypeFindAllref'].statusq=1
                        this.$refs['LocationTypeFindAllref'].LocationTypeFindAllData=this.tianXiao;
                        this.$refs['LocationTypeFindAllref'].LocationTypeFindAll1=true;
                    }else{
                        this.$Message.error('请选中一行进行查看');
                    }
                }else if(data!=null){
                    this.$refs['LocationTypeFindAllref'].statusq=2
                    this.$refs['LocationTypeFindAllref'].LocationTypeFindAllData=data;
                    this.$refs['LocationTypeFindAllref'].LocationTypeFindAll1=true;
                }else{
                    this.$refs['LocationTypeFindAllref'].statusq=3
                    this.$refs['LocationTypeFindAllref'].LocationTypeFindAllData={};
                    this.$refs['LocationTypeFindAllref'].LocationTypeFindAll1=true;
                }
            },
            Cha1(){
                standardApi.ChaKang(this.LocationTyperequest).then(res=>{
                    this.LocationTypeDataXiao = res.data.data.rows;
                    this.LocationTypeDataXiao.total = res.data.data.total;
                })
            },
            LocationTypeShanChu(data){
                this.$Modal.confirm({
                    title:'友情提示',
                    content:`确认删除吗`,
                    onOk:()=>{
                        standardApi.LocationTypeShan(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.Cha1();
                        })
                    },
                    onCancel:()=>{
                        this.Cha1();
                    }
                })
            },
        },
        created(){
            this.Cha1();
        },
        components:{
            LocationTypeFindAll:()=>import('@/views/WarehouseConfiguration/LocationTypeAdd/LocationTypeFindAll.vue'),
        },
    }
</script>

<style scoped>

</style>