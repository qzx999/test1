<template>
    <div class="warehouseDefinition_info_operating">
        <Modal v-model='modalIsOpen' :title='isDisable ? `查看` : formData.id ? `审核` : `录入`' :width="600" :mask-closable="false">
            <Scroll>
                <Form :model="formData">
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>仓库代码：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.store_code" :disabled="isDisable"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>仓库名称：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.store_name" :disabled="isDisable"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>仓库属性：</span>
                                    </Col>
                                    <Col span="12">
                                        <Select v-model="formData.store_text" :disabled="isDisable">
                                            <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </Scroll>

            <template slot="footer">
                <Button @click="submitFormData" v-if="!isDisable">提交</Button>
                <Button @click="close">关闭</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import * as warehouseDefinitionApi from '@/api/storagePlace/warehouseDefinitionApi.js';
    export default {
        name: "warehouseDefinition_info_operating",
        data() {
            return{
                selectVal:[{id:'1',name:'花花'},{id:'2',name:'嘎嘎'}],
                modalIsOpen:false,
                formData:{},
                isDisable:false,
            }
        },

        methods:{
            //提交表单
            submitFormData(){
                warehouseDefinitionApi.addOrUpdate(this.formData).then(res =>{
                    if(res.data.code == 200) {
                        this.$Message.success(res.data.msg);
                    }else {
                        this.$Message.error(res.data.msg);
                    }
                    this.$parent.getList();
                    this.modalIsOpen = false;
                });
            },

            //关闭窗口
            close(){
                this.modalIsOpen = false;
                this.isDisable = false;
                this.formData = {};//重置数据
            },
        },
        watch:{
            modalIsOpen(val){
                if(val == false){
                    this.isDisable = false;
                }
            }
        },
    }
</script>

<style scoped>

</style>
