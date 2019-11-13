<template>
    <div>
        <Modal v-model="ReturnReservationAddUpdaate" :title="ReturnReservationAddData.id?`修改`:`导入`" :closable="false" :width="500" :mask-closable="true">
            <Form :model="ReturnReservationAddData" ref="Return" :rules="rulesData2">
                <FormItem label="验收人" prop="createName" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.createName" placeholder="请输入验收人"  style="width: 194px"/>
                </FormItem>
                <FormItem label="收货时间" prop="createDate" label-width="90">
                    <DatePicker type="datetime" v-model="ReturnReservationAddData.createDate"></DatePicker>
                </FormItem>
                <FormItem label="通知单" prop="imNoticeId" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.imNoticeId" placeholder="请输入通知单"  style="width: 194px"/>
                </FormItem>
                <FormItem label="商品名称" prop="goodsName" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.goodsName" placeholder="请输入商品名称"  style="width: 194px"/>
                </FormItem>
                <FormItem label="到货数量" prop="imQuat" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.imQuat" placeholder="请输入到货数量"  style="width: 194px"/>
                </FormItem>
                <FormItem label="生产日期" prop="proData" label-width="90">
                    <DatePicker type="datetime" v-model="ReturnReservationAddData.proData"></DatePicker>
                </FormItem>
                <FormItem label="单位" prop="goodsUnit" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.goodsUnit" placeholder="请输入单位"  style="width: 194px"/>
                </FormItem>
                <FormItem label="货主" prop="cusCode" label-width="90">
                    <Input  type="text" v-model="ReturnReservationAddData.cusCode" placeholder="请输入货主"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="ReturnReservationAdd">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/ReturnsManagement/ReturnReservation.js'
    export default {
        name: "ReturnReservationAddUpdaate",
        data(){
            return{
                ReturnReservationAddUpdaate:false,
                ReturnReservationAddData:{},
                rulesData2:{
                    createName:[
                        {required:true,message:'验收人不能为空',trigger:'blur'},
                    ],
                    imNoticeId:[
                        {required:true,message:'通知单不能为空',trigger:'blur'},
                    ],
                    goodsName:[
                        {required:true,message:'商品名称不能为空',trigger:'blur'},
                    ],
                    imQuat:[
                        {required:true,message:'到货数量不能为空',trigger:'blur'},
                    ],
                    goodsUnit:[
                        {required:true,message:'单位不能为空',trigger:'blur'},
                    ],
                    cusCode:[
                        {required:true,message:'货主不能为空',trigger:'blur'},
                    ],
                }
            }
        },
        methods:{
            ReturnReservaTian(data){  //添加
                this.$refs['Return'].validate(valid => {
                    if(valid){
                        standardApi.ReturnAdd1(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.ReturnReservationAddUpdaate=false;
                            this.$parent.ReturnReservationFind();
                        })
                    }
                })

            },
            ReturnReservatXgai(data){  //修改
                this.$refs['Return'].validate(valid => {
                    if(valid){
                        standardApi.ReturnUpdate(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.ReturnReservationAddUpdaate=false;
                            this.$parent.ReturnReservationFind();
                        })
                    }
                })

            },
            ReturnReservationAdd(){
                this.ReturnReservationAddData.id?this.ReturnReservatXgai(this.ReturnReservationAddData):this.ReturnReservaTian(this.ReturnReservationAddData)
            }
        }
    }
</script>

<style scoped>

</style>