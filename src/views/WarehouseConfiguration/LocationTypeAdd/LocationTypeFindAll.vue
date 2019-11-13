<template>
    <div>
        <Modal v-model="LocationTypeFindAll1" :title="statusq==1?`查看`:statusq==2?`修改`:`添加`">
            <Form :model="LocationTypeFindAllData" ref="Lref" :rules="LocationTypeFindAllData1" style="text-align: center">
                <FormItem label="单位代码" prop="goods_type_code">
                    <Input  type="text" v-model="LocationTypeFindAllData.goods_type_code"  style="width: 194px"/>
                </FormItem>
                <FormItem label="单位名称" prop="goods_type_name">
                    <Input  type="text" v-model="LocationTypeFindAllData.goods_type_name"  style="width: 194px"/>
                </FormItem>
            </Form>
            <div slot="footer" style="text-align: center">
                <Button @click="LocationTiJiao">提交</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as standardApi from '@/api/LocationType/LocationTypeAdd.js'
    export default {
        name: "LocationTypeFindAll",
        data(){
            return{
                LocationTypeFindAll1:false,
                LocationTypeFindAllData:{},
                LocationTypeFindAllData1:{
                    goods_type_code:[
                        {required:true,message:'单位代码不能为空',trigger:'blur'},
                    ],
                    goods_type_name:[
                        {required:true,message:'单位名称不能为空',trigger:'blur'},
                    ],
                },
                statusq:''
            }
        },
        methods:{
            LocationXgai(){  //修改

            },
            Locationadd(){  //添加

            },
            LocationTiJiao(){
                this.LocationTypeFindAllData.id?this.LocationXgai(this.LocationTypeFindAllData):this.Locationadd(this.LocationTypeFindAllData)
            }
        }
    }
</script>

<style scoped>

</style>