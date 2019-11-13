<template>
   <div>
       <Divider orientation="left">
           <span>产品属性</span>
       </Divider>
       <div>
           <Row>
               <Col :span="12">
                   <Button @click="ProductcolumnsTian(1)" type="info" icon="md-create">查看</Button>
                   <Button type="error" icon="md-create" @click="ProductTableDelete">批量删除</Button>
                   <Button type="success" icon="md-create" @click="ProductDao(null)">Excel数据导入</Button>
                   <Button type="warning" icon="ios-folder-outline">Excel数据导出</Button>
               </Col>
           </Row>
       </div>
      <Table :columns="Productcolumns" :data="ProductData"  highlight-row  @on-current-change="ProductTable"  @on-select="ProductTableShanChu">
          <template slot="btn" slot-scope="scope">
              <Button @click="ProductcolumnsTian(null)" ghost  type="success" icon="ios-add" >录入</Button>
              <Button @click="ProductcolumnsTian(scope.row)" ghost type="primary" icon="md-create">编辑</Button>
              <Button @click="ProductcolumnsTianShanChu(scope.row)" ghost type="error" icon="md-create">删除</Button>
          </template>>
      </Table>
       <ProductFindAll ref="ProductXiao"></ProductFindAll>
       <ProductFindAllWemJian ref="ProductWenJian"></ProductFindAllWemJian>
   </div>
</template>

<script>
    import * as standardApi from '@/api/BasicConfiguration/Product.js'
    export default {
        name: "Product",
        data(){
            return{
                Productcolumns:this.ProductcolumnsFindAll(),
                ProductData:[],
                ProductDatarequest:{
                    page:1,
                    size:5,
                    total:0,
                },
                Pro:{},
                shan:[]
            }
        },
        methods:{
            ProductTableShanChu(selection){   //多选
                this.shan=[];  //数组
                selection.forEach(item =>{  //选中多个数据,在进行遍历
                    this.shan.push(item.id);  //获取到的数组加入到item里面
                });
            },
            ProductTableDelete(){   //批量删除
                if(this.shan.length<2){
                   this.$Message.error('请选中二条数据进行删除');
                   return false;
                }else{
                    this.$Modal.confirm({
                        title:'友情提示',
                        content:`确认删除吗`,
                        onOk:()=>{
                            standardApi.ProductShanChu(this.shan).then(res=>{
                                if(res.data.code==2000){
                                    this.$Message.success(res.data.msg);
                                }else{
                                    this.$Message.error(res.data.msg);
                                }
                                this.getTestData();
                            })
                        },
                    })
                }
            },
            ProductDao(data){   //导入
              if(data==null){
                  this.$refs['ProductWenJian'].ProductFindAllJianData={};
                  this.$refs['ProductWenJian'].ProductFindAllWemJian1=true;
              }
            },
            ProductTable(data){//点去选中一行
                this.Pro=data;
            },
            ProductcolumnsTian(data){
              if(data==1){    //查看
                  if(this.Pro.goods_type_code!=null){
                      this.$refs['ProductXiao'].Product=1
                      this.$refs['ProductXiao'].ProductData=this.Pro;
                      this.$refs['ProductXiao'].ProductFindXiao=true;
                      this.$refs['ProductXiao'].disableds=true
                      this.$refs['ProductXiao'].Productupdate=""
                  }else{
                      this.$Message.error('请选中一行进行查看');
                  }
              }else if(data!=null){   //修改
                  this.$refs['ProductXiao'].Product=2
                  this.$refs['ProductXiao'].ProductData=data;
                  this.$refs['ProductXiao'].ProductFindXiao=true;
              }else{
                  this.$refs['ProductXiao'].Product=3  //添加
                  this.$refs['ProductXiao'].ProductData={};
                  this.$refs['ProductXiao'].ProductFindXiao=true;
              }
            },
            ProductcolumnsTianShanChu(data){
               this.$Modal.confirm({
                   title:'友情提示',
                   content:`确认删除吗`,
                   onOk:()=>{
                       standardApi.ProductShanChu(data).then(res=>{
                           if(res.data.code==2000){
                               this.$Message.success(res.data.msg);
                           }else{
                               this.$Message.error(res.data.msg);
                           }
                           this.getTestData();
                       })
                   },
                   onCancel:()=>{
                       this.getTestData();
                   }
               })
            },
            getTestData(){  //查询方法
                standardApi.ProductDataList(this.ProductDatarequest).then(res=>{
                    this.ProductData = res.data.data.rows;
                    this.ProductDatarequest.total = res.data.data.total;
                })
            },
            ProductcolumnsFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center',width:50},
                    {title:'单位代码',key:'goods_type_code',align:'center'},
                    {title:'单位名称',key:'goods_type_name',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn'},
                ]
                return arr;
            }
        },
        created(){
            this.getTestData();
        },
        components:{
            ProductFindAll:()=>import('@/views/BasicConfiguration/ProductAdd/ProductFindAll.vue'),
            ProductFindAllWemJian:()=>import('@/views/BasicConfiguration/ProductAdd/ProductFindAllWemJian.vue'),
        },
    }
</script>

<style scoped>

</style>