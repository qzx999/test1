<template>
    <div>
        <Modal v-model="CustomerAdd" :title="archiveData.id?`查看`:'预约通知'" :closable="false" :width="500" :mask-closable="true">
            <Form :model="archiveData" :label-width="70" style="text-align: center" ref="archiveDataFrom" :rules="ruleValiData">
                <FormItem label="客户编码" prop="cusCode" label-width="90"> <!--label标签文本-->
                    <Input  type="text" v-model="archiveData.cusCode" placeholder="请输入客户编码"  style="width: 194px"/>
                </FormItem>
                <FormItem label="预计到货时间" prop="imData" label-width="90">
                    <DatePicker type="datetime" v-model="archiveData.imData"></DatePicker>
                </FormItem>
                <FormItem label="客户订单号" prop="imCusCode" label-width="90">
                    <Input type="text" v-model="archiveData.imCusCode" style="width: 194px"/>
                </FormItem>
                <FormItem label="运输号码" prop="imCarMobile" label-width="90">
                    <Input type="text" v-model="archiveData.imCarMobile" style="width: 194px"/>
                </FormItem>
                <FormItem label="运输公司" prop="imCarDri" label-width="90">
                    <Input type="text" v-model="archiveData.imCarDri" style="width: 194px"/>
                </FormItem>
                <FormItem label="订单类型" prop="orderTypeCode" label-width="90">
                    <Input type="text" v-model="archiveData.orderTypeCode" style="width: 194px"/>
                </FormItem>
                <FormItem label="备注" prop="imBeizhu" label-width="90">
                    <Input type="text" v-model="archiveData.imBeizhu" style="width:194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="CustomerReturnsUpdate">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/CustomerReturns.js'
    export default {
        name: "CustomerReturnsAdd",
        data(){
            return{
                CustomerAdd:false,
                archiveData:{},
                ruleValiData:{
                    cusCode:[
                        {required:true,message:'客户编码不能为空',trigger:'blur'},
                     ],
                    imCusCode:[
                        {required:true,message:'客户订单号不能为空',trigger:'blur'},
                    ],
                    imCarMobile:[
                        {required:true,message:'运输号码不能为空',trigger:'blur'},
                    ],
                    imCarDri:[
                        {required:true,message:'运输公司不能为空',trigger:'blur'},
                    ],
                    orderTypeCode:[
                        {required:true,message:'订单类型不能为空',trigger:'blur'},
                    ],
                    imBeizhu:[
                        {required:true,message:'备注不能为空',trigger:'blur'},
                    ],
                }
            }
        },
        methods:{
            CustomerReturnsUpdate(data){  //添加
              this.$refs['archiveDataFrom']  .validate(valid => {
                  if(valid){
                      standardApi.CustomerAddData(data).then(res=>{
                          if(res.data.code==2000){
                              this.$Message.success(res.data.msg);
                          }else{
                              this.$Message.error(res.data.msg);
                          }
                          this.CustomerAdd=false;
                          this.$parent.CustomerReturnsFindAdll();
                      })
                  }
              })

            }
        }
    }
</script>

<style scoped>

</style>