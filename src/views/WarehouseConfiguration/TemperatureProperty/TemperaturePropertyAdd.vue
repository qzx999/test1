<template>
    <div>
        <Modal v-model="TemperaturePropertyAdd" :title="Temove==1?`查看`:Temove==2?`修改`:`温度类型`">
            <Form :model="TemperaturePropertyAddData" :rules="Temperaturn" style="text-align: center">
                <FormItem label="温层代码" prop="deg_type_code">
                    <Input  type="text" v-model="TemperaturePropertyAddData.deg_type_code"  style="width: 194px"/>
                </FormItem>
                <FormItem label="温层名称" prop="deg_type_name">
                    <Input  type="text" v-model="TemperaturePropertyAddData.deg_type_name"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="OrdertypeAddFindAllTiJiao">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "TemperaturePropertyAdd",
        data(){
            return{
                TemperaturePropertyAdd:false,
                TemperaturePropertyAddData:{},
                Temperaturn:{
                    deg_type_code:[
                        {required:true,message:'温层名称不能为空',trigger:'blur'},
                    ],
                    deg_type_name:[
                        {required:true,message:'温层名称不能为空',trigger:'blur'},
                    ],
                },
                Temove:''
            }
        }
    }
</script>

<style scoped>

</style>