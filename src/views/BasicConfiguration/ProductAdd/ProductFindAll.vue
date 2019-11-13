<template>
    <div>
        <Modal v-model="ProductFindXiao" :title="Product==1?`查看`:Product==2?`修改`:`添加`">
            <Form :model="ProductData" ref="Measuref1" :rules="ruleValirulesData" style="text-align: center">
                <FormItem label="单位代码" prop="goods_type_code">
                    <Input  :disabled="disableds" type="text" v-model="ProductData.goods_type_code"  style="width: 194px"/>
                </FormItem>
                <FormItem label="单位名称" prop="goods_type_name">
                    <Input  :disabled="disableds" type="text" v-model="ProductData.goods_type_name"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="Productupdate">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/BasicConfiguration/Product.js'
    export default {
        name: "ProductFindAll",
        data(){
            return{
                ProductFindXiao:false,
                ProductData:{},
                ruleValirulesData:{
                    goods_type_code:[
                        {required:true,message:'单位代码不能为空',trigger:'blur'},
                    ],
                    goods_type_name:[
                        {required:true,message:'单位名称不能为空',trigger:'blur'},
                    ],
                },
                Product:'',
                disableds:false
            }
        },
        methods:{
            ProductUpdate(data){  //修改
                this.$refs['Measuref1'].validate(valid => {
                    if(valid){
                        standardApi.ProductXgai(data).then(res=>{
                             if(res.data.code==2000){
                                 this.$Message.success(res.data.msg);
                             }else{
                                 this.$Message.error(res.data.msg);
                             }
                            this.ProductFindXiao=false;
                            this.$parent.MeasurementFind();
                        })
                    }
                })

            },
            ProductDataFind(data){  //添加
                this.$refs['Measuref1'].validate(valid => {
                    if(valid){
                        standardApi.ProductAdd(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.ProductFindXiao=false;
                            this.$parent.getTestData();
                        })
                    }
                })

            },
            Productupdate(){
                this.ProductData.id?this.ProductUpdate(this.ProductData):this.ProductDataFind(this.ProductData)
            }
        },

    }
</script>

<style scoped>

</style>