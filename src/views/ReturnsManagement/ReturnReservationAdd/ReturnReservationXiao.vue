<template>
    <div>
        <Modal v-model="ReturnReservationXiao" :title="ReturnReservationXiaoData.id?`修改`:'导入'" :closable="false" :width="500" :mask-closable="true">
            <Form :model="ReturnReservationXiaoData">
                <FormItem label="选择文件">
                    <Upload>
                        <Button type="success">导入</Button>
                    </Upload>
                </FormItem>
            </Form>
            <Button slot="footer">开始上传</Button>
            <Button slot="footer" @click="quxiao1">取消上传</Button>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "ReturnReservationXiao",
        data(){
           return{
               ReturnReservationXiao:false,
               ReturnReservationXiaoData:{}
           }
        },
        methods:{
            quxiao1(){
               this.ReturnReservationXiao=false;
            }
        }
    }
</script>

<style scoped>

</style>