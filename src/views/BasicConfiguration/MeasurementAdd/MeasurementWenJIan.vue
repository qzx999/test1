<template>
    <Modal v-model="MeasurementWenJIan" :title="MeasurementWenJIanData.id?`修改`:'导入'" :closable="false" :width="500" :mask-closable="true">
        <Form :model="MeasurementWenJIanData">
            <FormItem label="选择文件">
                <Upload>
                    <Button type="success">导入</Button>
                </Upload>
            </FormItem>
        </Form>
        <Button slot="footer">开始上传</Button>
        <Button slot="footer" @click="WenJian">取消上传</Button>
    </Modal>
</template>

<script>
    export default {
        name: "MeasurementWenJIan",
        data(){
            return{
                MeasurementWenJIan:false,
                MeasurementWenJIanData:{}
            }
        },
        methods:{
            WenJian(){
                this.MeasurementWenJIan=false;
            }
        }
    }
</script>

<style scoped>

</style>