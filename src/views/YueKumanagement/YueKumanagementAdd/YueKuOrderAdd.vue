<template>
    <div>
        <Modal v-model="orderaddValue" :title="iviewYou==1?`查看`:iviewYou==2?`修改`:`添加`" fullscreen>
            <Row>
                <Col style="background-color: darkgray">
                    <h2 style="color: crimson;margin-left: 5px">预约通知</h2>
                </Col>
            </Row>
           <Card dis-hover>
               <Form ref="rulesValue" :model="orderaddDate" :rules="rulesDate">
                   <Row>
                       <Col :span="5">
                           <FormItem label="客户编码" >
                               <Select style="width: 150px" :disabled="disableds" v-model="orderaddDate.CustomerCode">
                                   <Option value="22">22</Option>
                                   <Option value="23">23</Option>
                                   <Option value="24">24</Option>
                                   <Option value="25">25</Option>
                               </Select>
                           </FormItem>
                       </Col>
                       <Col :span="5">
                           <FormItem label="预计到货时间" >
                               <DatePicker style="width: 150px" :disabled="disableds"  v-model="orderaddDate.ExpectedArrivalTime"></DatePicker>
                           </FormItem>
                       </Col>
                       <Col :span="5">
                           <FormItem label="客户订单号" prop="CustomerOrderNumber">
                                <Input type="text" :disabled="disableds" style="width: 150px" v-model="orderaddDate.CustomerOrderNumber"/>
                           </FormItem>
                       </Col>
                       <Col :span="5">
                           <FormItem label="运输号码">
                               <Input type="text" :disabled="disableds" style="width: 150px"/>
                           </FormItem>
                       </Col>
                       <Col :span="4">
                           <FormItem label="运输公司">
                               <Input type="text" :disabled="disableds" style="width: 150px"/>
                           </FormItem>
                       </Col>
                   </Row>
                   <Row>
                       <Col :span="5">
                           <FormItem label="订单类型">
                               <Select style="width: 150px" :disabled="disableds"  v-model="orderaddDate.OrderType">
                                   <Option :value="0">线上订单</Option>
                                   <Option :value="1">线下订单</Option>
                               </Select>
                           </FormItem>
                       </Col>
                       <Col :span="9">
                           <FormItem label="备注">
                                <Input type="text" :disabled="disableds" style="width: 200px" v-model="orderaddDate.Remarks"/>
                           </FormItem>
                       </Col>
                       <Col :span="8">
                           <FormItem label="附件">
                               <Button type="success" :disabled="disableds">选择文件</Button>
                           </FormItem>
                       </Col>
                   </Row>
               </Form>
           </Card>
            <Row style="margin-top: 10px">
                <Col style="background-color: darkgray">
                    <h2 style="color: crimson;margin-left: 5px">进货通知明细</h2>
                </Col>
            </Row>
            <Row>
                <Col style="background-color: dimgrey">
                   <Button ghost @Click="TianJia">添加</Button><Button style="margin-left: 5px" ghost>合计</Button>
                </Col>
            </Row>
            <Card dis-hover>

            </Card>
            <template slot="footer">
                <Button @click="YueKuSubmit">提交</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import * as YueKuApi from '@/api/YueKuManagement/YueKuOrder.js'
    export default {
        name: "YueKuOrderAadd",
        data(){
            return {
                orderaddValue:false,
                orderaddDate:{},
                rulesDate:{
                    CustomerOrderNumber:[
                        {required:true,message:'请输入客户订单号',trigger:'blur'}
                    ]
                },
                iviewYou:'',
                disableds:false
            }
        },
        methods:{
            TianJia(){
               alert(1)
            },
            YueKuSubmit(){
                this.$refs['rulesValue'].validate(vaild=>{
                    if(vaild){
                        YueKuApi.YueKuseveOrupdate(this.orderaddDate).then(res=>{
                            if(res.data.code == 2000){
                                this.$Message.success(res.data.msg)
                            }else{
                                this.$Message.error(res.data.msg)
                            }
                            this.orderaddValue = false;
                            this.getTestDate()
                        })
                    }else{
                        return false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>