<template>
    <div>
        <Modal v-model="ProductFindAllWemJian1">
            <Form :mode="ProductFindAllJianData">
                <FormItem label="产品属性Excel数据导入">
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
        name: "ProductFindAllWemJian",
        data(){
            return{
                ProductFindAllWemJian1:false,
                ProductFindAllJianData:{}
            }
        },
        methods:{
            quxiao1(){
                this.ProductFindAllWemJian1=false;
            }
        }
    }
</script>

<style scoped>

</style>