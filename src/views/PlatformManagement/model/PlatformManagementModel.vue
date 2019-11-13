<template>
    <div>
        <Modal   v-model="modal1"  :title="status==1 ? `查看` : status==2 ? `修改`:`添加`">
            <Form :model="PlatformManagementModel" :label-width="120" style="margin-right: 50px" :rules="ruleValidate" ref="formValidate">
                <FormItem label="车牌" prop="carno">
                    <Input type="text" v-model="PlatformManagementModel.carno" :disabled="disableds"></Input>
                </FormItem>
                <FormItem label="月台编号" prop="platId">
                    <Input type="text" v-model="PlatformManagementModel.platId" :disabled="disableds"></Input>
                </FormItem>
                <FormItem label="单据编号" prop="docId">
                    <Input type="text" v-model="PlatformManagementModel.docId" :disabled="disableds"></Input>
                </FormItem>
                <FormItem label="进入时间" prop="inData">
                    <DatePicker type="date" v-model="PlatformManagementModel.inData" placeholder="Select date" style="width: 200px" :disabled="disableds"></DatePicker>
                    <!--<Input type="text" ></Input>-->
                </FormItem>
                <FormItem label="驶出时间" prop="outData">
                    <DatePicker type="date" v-model="PlatformManagementModel.outData" placeholder="Select date" style="width: 200px" :disabled="disableds"></DatePicker>
                    <!--<Input type="text" v-model="PlatformManagementModel.outData"></Input>-->
                </FormItem>
                <FormItem label="计划进入时间" prop="planIndata">
                    <DatePicker type="date" v-model="PlatformManagementModel.planIndata" placeholder="Select date" style="width: 200px" :disabled="disableds"></DatePicker>
                    <!--<Input type="text" v-model="PlatformManagementModel.planIndata"></Input>-->
                </FormItem>
                <FormItem label="计划驶出时间" prop="planOutdata">
                    <DatePicker type="date" v-model="PlatformManagementModel.planOutdata" placeholder="Select date" style="width: 200px" :disabled="disableds"></DatePicker>
                    <!--<Input type="text" v-model="PlatformManagementModel.planOutdata"></Input>-->
                </FormItem>
                <FormItem label="月台状态" prop="platSta">
                    <Input type="text" v-model="PlatformManagementModel.platSta" :disabled="disableds"></Input>
                </FormItem>
                <FormItem label="备注" prop="platBeizhu">
                    <Input type="text" v-model="PlatformManagementModel.platBeizhu" :disabled="disableds"></Input>
                </FormItem>
            </Form>
            <template slot="footer">
                <Button type="info" @click="ManagementUpdateAndInsert('formValidate')">
                    提交
                </Button>
            </template>
        </Modal>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                modal1:false,
                PlatformManagementModel:{},
                ruleValidate: {
                    carno: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    platId: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    docId: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    inData: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    outData: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    planIndata: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    planOutdata: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    platSta: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    platBeizhu: [{ required: true, message: '不能为空', trigger: 'blur' }],
                },
                status:'',
                disableds:false
            }
        },
        methods:{
            ManagementUpdateAndInsert(name){
                this.$refs[name].validate((valid) => {
                    if (valid==false) {
                        this.$Message.error('提交失败');
                    } else {
                        /* Api.classNameInsertAndUpdate(this.datas).then(res=>{
                             if(res.data.code == 2000){
                                 this.$Message.success(res.data.msg);

                             }else{
                                 this.$Message.error(res.data.msg);
                             }
                             this.drawerValue = false;
                             this.$parent.getUser();
                         })*/
                    }
                })
            }
        }
    }
</script>