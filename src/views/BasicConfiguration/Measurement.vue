<template>
    <div>
        <Divider orientation="left">
            <span>计量单位</span>
        </Divider>
        <div>
            <Row>
                <Col :span="4">
                    <span>单位代码</span>
                    <Input type="text" v-model="MeasurementDatarequest.unit_code" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>单位名称</span>
                    <Input type="text" v-model="MeasurementDatarequest.unit_zh_name" style="width: 100px"/>
                </Col>
                <Col :span="4">
                    <span>英文名称</span>
                    <Input type="text" v-model="MeasurementDatarequest.unit_en_name" style="width: 100px"/>
                </Col>
            </Row>
            <Row>
                <Col :span="12">
                    <Button @click="MeasurementAddTian(1)" type="info" icon="md-create">查看</Button>
                    <Button type="error" icon="md-create" @click="PiLiangShanChuDelete">批量删除</Button>
                    <Button type="success" icon="md-create" @click="MeasurementDao(null)">Excel数据导入</Button>
                    <Button type="warning" icon="ios-folder-outline">Excel数据导出</Button>
                </Col>
                <Col :span="12">
                    <Button @click="MeasurementFind" icon="ios-search" style="margin-left: 400px">查询</Button>
                    <Button @click="MeasurementZhongZhi"icon="ios-search">重置</Button>
                </Col>
            </Row>
        </div>
        <Table :columns="Measurement" :data="MeasurementData" highlight-row  @on-current-change="MeasurementTable" @on-select="MeasurementShanChu1">
            <template slot="btn" slot-scope="scope">
                <Button @click="MeasurementAddTian(null)" ghost  type="success" icon="ios-add" >录入</Button>
                <Button @click="MeasurementAddTian(scope.row)" ghost type="primary" icon="md-create">编辑</Button>
                <Button @click="MeasurementShanChu(scope.row)" ghost type="error" icon="md-create">删除</Button>
            </template>
        </Table>
        <MeasurementAddFind ref="refData"></MeasurementAddFind>
        <MeasurementWenJIan ref="WenJIna"></MeasurementWenJIan>
    </div>
</template>
<script>
    import * as standardApi from '@/api/BasicConfiguration/Measurement.js'
    export default {
        name: "Measurement",
        data(){
            return{
                Measurement:this.MeasurementFindAll(),
                MeasurementData:[],
                MeasurementDatarequest:{
                    page:1,
                    size:5,
                    total:0,
                    unit_code:'',
                    unit_zh_name:'',
                    unit_en_name:''
                },
                //查看时的数据
                tian:{},
                xiao:[]
            }
        },
        methods:{
            MeasurementTable(data){  //选中一行
                 this.tian=data;
            },
            MeasurementShanChu1(selection){  //多选
                this.xiao=[];
                selection.forEach(item=>{
                    this.xiao.push(item.id);
                })
            },
            PiLiangShanChuDelete(){   //批量删除
              if(this.xiao.length<2){
                  this.$Message.error('请选中删除二删除')
                  return false;
              }else{
                  this.$Modal.confirm({   //删除时提示
                      title:'友情提示',
                      content:'确认删除吗?',
                      onOk:()=>{
                          standardApi.ShanChu(this.xiao).then(res=>{//回调函数
                              if(res.data.code==2000){      //如果等于2000 代表成功
                                  this.$Message.success(res.data.msg);
                              }else{      //或失败
                                  this.$Message.error(res.data.msg);
                              }
                              this.MeasurementFind();    //调用getTestData重新刷新页面
                          })
                      },
                      onCancel:()=>{
                          this.MeasurementFind();
                      }
                  });
              }
            },
            MeasurementAddTian(data){
                if(data==1){  //如果等于1的时候走查看
                    if(this.tian.id!=null){
                        this.$refs['refData'].status=1
                        this.$refs['refData'].MeasData=this.tian;
                        this.$refs['refData'].MeasurementAddFind=true;
                        this.$refs['refData'].disableds=true
                        this.$refs['refData'].MeasurementUpdate=''
                    }else{
                        this.$Message.error('请选中一行进行查看');
                    }
                }else if(data!=null){
                    this.$refs['refData'].status=2
                    this.$refs['refData'].MeasData=data;
                    this.$refs['refData'].MeasurementAddFind=true;
                    this.$refs['refData'].disableds=false
                }else{
                    this.$refs['refData'].status=3
                    this.$refs['refData'].MeasData={};
                    this.$refs['refData'].MeasurementAddFind=true;
                    this.$refs['refData'].disableds=false
                }
            },
            MeasurementDao(data){
               if(data==null){
                  this.$refs['WenJIna'].MeasurementWenJIan={};
                  this.$refs['WenJIna'].MeasurementWenJIanData=true;
               }
            },
            MeasurementShanChu(data){ //删除
                this.$Modal.confirm({   //删除时提示
                    title:'友情提示',
                    content:'确认删除吗?',
                    onOk:()=>{
                        standardApi.ShanChu(data).then(res=>{//回调函数
                            if(res.data.code==2000){      //如果等于2000 代表成功
                                this.$Message.success(res.data.msg);
                            }else{      //或失败
                                this.$Message.error(res.data.msg);
                            }
                            this.MeasurementFind();    //调用getTestData重新刷新页面
                        })
                    },
                    onCancel:()=>{
                        this.MeasurementFind();
                    }
                });
            },
            MeasurementFind(){  //查询
                let local=localStorage.getItem("Measurement");
                let list=JSON.parse(local);
                if(list==null ||list.length==0){
                    standardApi.MeasurementAll((this.MeasurementDatarequest)).then(res=>{//回调函数  bandard_list
                        localStorage.setItem("Measurement",JSON.stringify(res.data.data.rows));//设值
                        this.MeasurementData=res.data.data.rows;
                    })
                }else if(this.MeasurementDatarequest.unit_code!=''||this.MeasurementDatarequest.unit_zh_name!=''||this.MeasurementDatarequest.unit_en_name!=''){
                    standardApi.MeasurementMoHu(this.MeasurementDatarequest).then(res=>{
                        this.MeasurementData=res.data.data.rows;
                    });
                }else{
                    this.MeasurementData=list;
                }
            },
            MeasurementZhongZhi(){  //重置
               this.MeasurementDatarequest={
                   page:1,
                   size:5,
                   total:0,
                   unit_code:'',
                   unit_zh_name:'',
                   unit_en_name:''
               }
               this.MeasurementFind();
            },
            MeasurementFindAll(){
                let arr=[
                    {type:'selection',title:'序号',align:'center',width:50},
                    {title:'单位代码',key:'unit_code',align:'center'},
                    {title:'单位名称',key:'unit_zh_name',align:'center'},
                    {title:'英文名称',key:'unit_en_name',align:'center'},
                    {title:'操作',key:'opt',align:'center',slot:'btn',width:300},
                ]
                return arr;
            }
        },
        created(){
            this.MeasurementFind();
        },
        components:{
            MeasurementAddFind:()=>import('@/views/BasicConfiguration/MeasurementAdd/MeasurementAddFind.vue'),
            MeasurementWenJIan:()=>import('@/views/BasicConfiguration/MeasurementAdd/MeasurementWenJIan.vue')
        },
    }
</script>

<style scoped>

</style>