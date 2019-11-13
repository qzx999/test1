<template>
    <div>
        <Modal v-model="OrdertypeAddFindAll1" :title="OrdertypeAddData.id?`查看`:`修改`">
            <Form :model="OrdertypeAddData" ref="OrdertypeRef" :rules="OrdertypeData1" style="text-align: center">
                <FormItem label="订单类型代码" prop="order_type_code">
                    <Input  type="text" v-model="OrdertypeAddData.order_type_code"  style="width: 194px"/>
                </FormItem>
                <FormItem label="订单类型名称" prop="order_type_name">
                    <Input  type="text" v-model="OrdertypeAddData.order_type_name"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="OrdertypeAddFindAllTiJiao">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/LocationType/LocationTypeAdd.js'
    export default {
        name: "OrdertypeAddFindAll",
        data(){
            return{
                OrdertypeAddFindAll1:false,
                OrdertypeAddData:{},
                OrdertypeData1:{
                    order_type_code:[
                        {required:true,message:'订单类型代码不能为空',trigger:'blur'},
                    ],
                    order_type_name:[
                        {required:true,message:'订单类型名称不能为空',trigger:'blur'},
                    ],
                },
            }
        },
        methods:{
            OrdertypeAddUpdate(data){  //修改
                this.$refs['OrdertypeRef'].validate(valid => {
                    if(valid){
                        standardApi.OrdertypeAddXgai(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.OrdertypeAddFindAll1=false;
                            this.$parent.OrdertypeTestData();
                        })
                    }
                })
            },
            OrdertypeAddFindAllAdd(data){  //添加
                this.$refs['OrdertypeRef'].validate(valid => {
                    if(valid){
                        standardApi.OrdertypeAddFindAdd(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.OrdertypeAddFindAll1=false;
                            this.$parent.OrdertypeTestData();
                        })
                    }
                })
            },
            OrdertypeAddFindAllTiJiao(){
                this.OrdertypeAddData.id?this.OrdertypeAddUpdate(this.OrdertypeAddData):this.OrdertypeAddFindAllAdd(this.OrdertypeAddData)
            }
        }
    }
</script>

<style scoped>

</style>