<template>
  <div>
      <Card dis-hover>
          <Row>
            <Col :span="6">
             通知单号: <Input type="text" style="width: 130px" v-model="yuekurequestparms.NoticeNumber"/>
            </Col>
            <Col :span="6">
              预计到货时间: <DatePicker style="width: 200px" split-panels type="daterange"/>
            </Col>
            <Col :span="6">
              客户订单号: <Input type="text" style="width: 150px" v-model="yuekurequestparms.CustomerOrderNumber"/>
            </Col>
              <Col :span="4">
                  司机: <Input type="text" style="width: 130px;margin-left: 13%" v-model="yuekurequestparms.driver"/>
              </Col>
          </Row>
        <Row style="margin-top: 10px">
          <Col :span="6">
            司机电话: <Input type="text" style="width: 130px" v-model="yuekurequestparms.DriverPhone"/>
          </Col>
          <Col :span="6">
            订单类型: <Select style="width: 200px;margin-left: 10%" >
                          <Option :value="0">线上订单</Option>
              <Option :value="1">线下订单</Option>
                      </Select>
          </Col>
          <Col :span="6">
            月台: <Select style="width: 150px;margin-left: 13%">
                    <Option :value="0">月台1</Option>
              <Option :value="1">月台2</Option>
                  </Select>
          </Col>
          <Col :span="6">
            单据状态: <Input type="text" style="width: 130px"/>
          </Col>
        </Row>
        <Row style="margin-top:5px">
            <Button type="success" style="margin-left: 2px" icon="md-add" @click="yuekuLuRu(null)">录入</Button>
            <Button style="margin-left: 2px" icon="md-search" @click="yuekuLuRu(1)">查看</Button>
            <Button style="margin-left: 2px" icon="md-cloud-download">导入</Button>
            <Button style="margin-left: 2px" icon="md-cloud-upload">导出</Button>
            <Button style="margin-left: 2px" icon="md-download">模板下载</Button>
            <Button icon="md-search" @click="getTestDate" style="margin-left: 49%">查询</Button>
            <Button icon="md-refresh" @click="Reset" style="margin-left: 5px">重置</Button>
        </Row>
      </Card>
      <Card dis-hover>
        <Table :columns="yuekucolmuns" :data="yuekudata" :highlight-row="true" @on-current-change="ViewDate"></Table>
      </Card>
    <YueKuOrderAdd ref="yuekuadd"></YueKuOrderAdd>
  </div>
</template>
<script>
    import * as YueKuApi from '@/api/YueKuManagement/YueKuOrder.js'
  export default {
    name: 'YueKuOrder',
    components:{
      YueKuOrderAdd:()=>import('@/views/YueKumanagement/YueKumanagementAdd/YueKuOrderAdd.vue')
    },
    data(){
      return {
          yuekucolmuns:this.colmunsdata(),
          yuekudata:[],
          yuekurequestparms:{
              page:1,
              size:10,
              total:0,
            NoticeNumber:'',
            CustomerOrderNumber:'',
            driver:'',
            DriverPhone:''
          },
          View:{}
      }
    },
    methods:{
        ViewDate(data){
            this.View = data;
        },
      yuekuLuRu(data){
        if(data==1){
           if(this.View.id!=null){
               this.$refs['yuekuadd'].iviewYou=1;
               this.$refs['yuekuadd'].orderaddDate =this.View;
               this.$refs['yuekuadd'].orderaddValue = true;
               this.$refs['yuekuadd'].disableds=true;
               this.$refs['yuekuadd'].YueKuSubmit=""
           }else{
               this.$Message.success('请选择一行查看的信息')
           }
        }else if(data != null){ //如果数据不等于空,就走修改
            this.$refs['yuekuadd'].iviewYou=2;
            this.$refs['yuekuadd'].orderaddDate = data;
            this.$refs['yuekuadd'].orderaddValue = true;
            this.$refs['yuekuadd'].disableds=false

        }else{   //添加
            this.$refs['yuekuadd'].iviewYou=3;
            this.$refs['yuekuadd'].orderaddDate = {};
            this.$refs['yuekuadd'].orderaddValue = true;
            this.$refs['yuekuadd'].disableds=false
        }
      },

      colmunsdata(){
          let that = this;
        let arr = [
          {title:'',type:'selection',align:'center'},
          {title:'序号',type:'index',align:'center'},
          {title:'创建人名称',key:'CreatorName',align:'center'},
          {title:'创建时间',key:'CreationTime',align:'center'},
          {title:'通知单号',key:'NoticeNumber',align:'center'},
          {title:'客户编码',key:'CustomerCode',align:'center'},
          {title:'预计到货时间',key:'ExpectedArrivalTime',align:'center'},
          {title:'客户订单号',key:'CustomerOrderNumber',align:'center'},
          {title:'车号',key:'CarNumber',align:'center'},
          {title:'司机',key:'driver',align:'center'},
          {title:'司机电话',key:'DriverPhone',align:'center'},
          {title:'订单类型',key:'OrderType',align:'center',render(h,params){
            return h('span',{},params.row.OrderType == 0 ? '线上订单' : '线下订单')
            }},
          {title:'月台',key:'Platform',align:'center'},
          {title:'备注',key:'Remarks',align:'center'},
          {title:'操作',key:'opt',align:'center',width:'180px',render(h,params){
              return h('span',[
                  h('Button',{props:{type:'success'},style:{marginRight:'5px'},on:{
                      click:()=>{
                            that.yuekuLuRu(params.row)
                      }
                      }},'编辑'),
                  h('Button',{props:{type:'error'}},'删除')
              ],'')
              }}
        ];
        return arr;
      },
        getTestDate(){
            let local = localStorage.getItem("yuekudate");
            let list = JSON.parse(local);
            if(list == null || list.length == 0){
                YueKuApi.orderlist(this.yuekurequestparms).then(res=>{
                    localStorage.setItem("yuekudate",JSON.stringify(res.data.data.rows));
                    this.yuekudata = res.data.data.rows;
                })
            }else if(this.yuekurequestparms.DriverPhone !='' || this.yuekurequestparms.NoticeNumber != '' || this.yuekurequestparms.CustomerOrderNumber !='' || this.yuekurequestparms.driver !=''){
              YueKuApi.Inquire(this.yuekurequestparms).then(res=>{
                this.yuekudata = res.data.data.rows;
              })
            }else{
              this.yuekudata = list;
            }
        },
      Reset(){
        this.yuekurequestparms = { page:1,size:10,total:0,NoticeNumber:'',CustomerOrderNumber:'',driver:'',DriverPhone:''};
        this.getTestDate()
      }
    },
      created() {
        this.getTestDate();
      }
  }
</script>