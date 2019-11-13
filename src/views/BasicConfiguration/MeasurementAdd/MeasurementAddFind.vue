<template>
    <div>
        <Modal v-model="MeasurementAddFind" :title="status==1?`查看`:status==2?`修改`:`添加`" :closable="false" :width="500" :mask-closable="true">
            <Form :model="MeasData" ref="Measuref" :rules="ruleValirulesData" style="text-align: center">
                <FormItem label="单位代码" prop="unit_code">
                    <Input :disabled="disableds" type="text" v-model="MeasData.unit_code"  style="width: 194px" />
                </FormItem>
                <FormItem label="单位名称" prop="unit_zh_name">
                    <Input :disabled="disableds" type="text" v-model="MeasData.unit_zh_name"  style="width: 194px"/>
                </FormItem>
                <FormItem label="英文名称" prop="unit_en_name">
                    <Input :disabled="disableds" type="text" v-model="MeasData.unit_en_name"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="MeasurementUpdate">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/BasicConfiguration/Measurement.js'
    export default {
        name: "MeasurementAddFind",
        data(){
            return{
                MeasurementAddFind:false,
                MeasData:{},
                ruleValirulesData:{
                    unit_code:[
                        {required:true,message:'单位代码不能为空',trigger:'blur'},
                    ],
                    unit_zh_name:[
                        {required:true,message:'单位名称不能为空',trigger:'blur'},
                    ],
                    unit_en_name:[
                        {required:true,message:'英文名称不能为空',trigger:'blur'},
                    ]
                },
                status:'',
                disableds:false,
            }
        },
        methods:{
            MeasDataXgai1(data){  //修改
                this.$refs['Measuref'].validate(valid => {
                    if(valid){
                        standardApi.ReturnUpdate(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.MeasurementAddFind=false;
                            this.$parent.MeasurementFind();
                        })
                    }
                })
            },
            MeasDataAdd1(data){  //添加
                this.$refs['Measuref'].validate(valid => {
                    if(valid){
                        standardApi.ReturnAdd1(data).then(res=>{
                            if(res.data.code==2000){
                                this.$Message.success(res.data.msg);
                            }else{
                                this.$Message.error(res.data.msg);
                            }
                            this.MeasurementAddFind=false;
                            this.$parent.MeasurementFind();
                        })
                    }
                })
            },
            MeasurementUpdate(){
                this.MeasData.id?this.MeasDataXgai1(this.MeasData):this.MeasDataAdd1(this.MeasData)
            }
        }
    }
</script>

<style scoped>

</style>