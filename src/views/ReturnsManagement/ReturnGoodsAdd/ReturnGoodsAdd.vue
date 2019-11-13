<template>
    <div>
        <Modal v-model="ReturnGoodsAdd" :title="Kan==1?`查看`:Kan==2?`编辑`:`录入`" :closable="false" :width="500" :mask-closable="true">
            <Form  :model="ReturnData" :label-width="70" style="text-align: center" ref="ReturnGoodsAddDaata" :rules="RruleValiData">
                <FormItem label="客户编码" prop="cusCode" label-width="90"> <!--label标签文本-->
                    <Input :disabled="disableds" type="text" v-model="ReturnData.cusCode" placeholder="请输入客户编码"  style="width: 194px"/>
                </FormItem>
                <FormItem label="预计到货时间" prop="imData" label-width="90">
                    <DatePicker :disabled="disableds" type="datetime" v-model="ReturnData.imData"></DatePicker>
                </FormItem>
                <FormItem label="客户订单号" prop="imCusCode" label-width="90">
                    <Input  :disabled="disableds"type="text" v-model="ReturnData.imCusCode" style="width: 194px"/>
                </FormItem>
                <FormItem label="运输号码" prop="imCarMobile" label-width="90">
                    <Input  :disabled="disableds" type="text" v-model="ReturnData.imCarMobile"  style="width: 194px"/>
                </FormItem>
                <FormItem label="运输公司" prop="imCarDri" label-width="90">
                    <Input :disabled="disableds"  type="text" v-model="ReturnData.imCarDri" style="width: 194px"/>
                </FormItem>
                <FormItem label="订单类型" prop="orderTypeCode" label-width="90">
                    <Input :disabled="disableds" type="text" v-model="ReturnData.orderTypeCode" style="width: 194px"/>
                </FormItem>
                <FormItem label="备注" prop="imBeizhu" label-width="90">
                    <Input :disabled="disableds"  type="text" v-model="ReturnData.imBeizhu" style="width:194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center " >
                <Button @click="ReturnGoodsAddUpdate">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/ReturnGoods.js'
    export default {
        name: "ReturnGoodsAdd",
        data(){
            return{
                ReturnGoodsAdd:false,
                ReturnData:{},
                RruleValiData:{
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
                },
                Kan:'',
                disableds:false
            }
        },
        methods:{
            ReturnGoodsXgai(data){  //修改
                this.$refs['ReturnGoodsAddDaata'].validate(valid => {
                    if(valid){
                        standardApi.ReturnGoodsXgaiData(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.ReturnGoodsAdd=false;
                            this.$parent.ReturnGoodsFindAdll();
                        })
                    }
                })

            },
            ReturnGoodAdd(data){   //添加
                this.$refs['ReturnGoodsAddDaata'].validate(valid => {
                    if(valid){
                        standardApi.ReturnGoodsTian(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.ReturnGoodsAdd=false;
                            this.$parent.ReturnGoodsFindAdll();
                        })
                    }
                })
            },
            ReturnGoodsAddUpdate(){
                this.ReturnData.id?this.ReturnGoodsXgai(this.ReturnData):this.ReturnGoodAdd(this.ReturnData)
            }
        }
    }
</script>

<style scoped>

</style>