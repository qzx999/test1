<template>
    <div>
        <Modal   v-model="modal1"  :title="status==1 ? `查看` : status==2 ? `修改`:`添加`">
            <Form :model="receiptManageModelData" :label-width="120" style="margin-right: 50px" :rules="ruleValidate" ref="formValidate">
                <FormItem label="单号" prop="wmNoticeId">
                    <Input type="text" v-model="receiptManageModelData.wmNoticeId" :disabled="disableds"></Input>
                </FormItem>
                <FormItem label="回单时间" prop="hdData">
                    <DatePicker type="date" v-model="receiptManageModelData.hdData" placeholder="Select date" style="width: 200px" :disabled="disableds"></DatePicker>
                </FormItem>
                <FormItem label="备注" prop="beizhu">
                    <Input type="text" v-model="receiptManageModelData.beizhu" :disabled="disableds"></Input>
                </FormItem>
            </Form>
            <template slot="footer">
                <Button v-if="status!=1" type="info" @click="ManagementUpdateAndInsert('formValidate')">
                    提交
                </Button>
                <Button type="info" @click="fanhui"  v-if="status==1">
                    返回
                </Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "receiptManage",
        data(){
            return{
                receiptManageModelData:{},
                modal1:false,
                status:'',
                ruleValidate: {
                    wmNoticeId: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    hdData: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    beizhu: [{ required: true, message: '不能为空', trigger: 'blur' }],
                },
                disableds:false
            }
        },
        methods:{
            fanhui(){
                this.modal1=false;
            }
        }
    }
</script>

<style scoped>

</style>
