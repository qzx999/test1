<template>
    <div>
        <Modal   v-model="modal1"  :title="PlatformDefinitionModel.id!=null ? `修改信息` : '增加信息'">
            <Form :model="PlatformDefinitionModel" :label-width="120" style="margin-right: 50px" :rules="ruleValidate" ref="formValidate">
                <FormItem label="月台代码" prop="platformCode">
                    <Input type="text" v-model="PlatformDefinitionModel.platformCode"></Input>
                </FormItem>
                <FormItem label="月台名称" prop="platformName">
                    <Input type="text" v-model="PlatformDefinitionModel.platformName"></Input>
                </FormItem>
            </Form>
            <template slot="footer">
                <Button type="info" @click="DefinitionUpdateAndInsert('formValidate')">
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
                //存放表单数据
                PlatformDefinitionModel:{},
                //对话框默认是否显示
                modal1: false,
                //表单校验
                ruleValidate: {
                    platformCode: [{ required: true, message: '不能为空', trigger: 'blur' }],
                    platformName: [{ required: true, message: '不能为空', trigger: 'blur' }],
                },
            }
        },
        methods:{
            //点击提交时执行的方法
            DefinitionUpdateAndInsert(name){
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