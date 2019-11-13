<template>
    <div>
        <Modal v-model="ReturnGoodsDaoRuDao" :title="ReturnGoodsDaoRuData.id?`修改`:'导入'" :closable="false" :width="500" :mask-closable="true">
            <Form :model="ReturnGoodsDaoRuData">
                <FormItem label="选择文件">
                    <Upload>
                        <Button type="success">导入</Button>
                    </Upload>
                </FormItem>
            </Form>
               <Button slot="footer">开始上传</Button>
               <Button slot="footer" @click="quxiao">取消上传</Button>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "ReturnGoodsDaoRu",
        data(){
            return{
                ReturnGoodsDaoRuDao:false,
                ReturnGoodsDaoRuData:{}
            }
        },
        methods:{
            quxiao(){
                this.ReturnGoodsDaoRuDao=false;
            }
        }
    }
</script>

<style scoped>

</style>