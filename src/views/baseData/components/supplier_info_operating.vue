<template>
    <div class="supplier_info_operating">
        <Modal v-model='modalIsOpen' :title='isDisable ? `查看` : formData.id ? `审核` : `录入`' :width="800" :mask-closable="false">
            <Form :model="formData" >
                <FormItem>
                    <Row>
                        <Col span="12">
                            <Row>
                                <Col span="6">
                                    <span>企业属性：</span>
                                </Col>
                                <Col span="12">
                                    <Select v-model="formData.xingYeFenLei" :disabled="isDisable">
                                        <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="12">
                            <Row>
                                <Col span="6">
                                    <span>供应商编码：</span>
                                </Col>
                                <Col span="12">
                                    <Input type="text" v-model="formData.gysBianMa" :disabled="isDisable"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row>
                        <Col span="2"><span>中文全称：</span></Col>
                        <Col span="19">
                            <Input type="text" v-model="formData.zhongWenQch" :disabled="isDisable"/>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row>
                        <Col span="12">
                            <Row>
                                <Col span="6">
                                    <span>主联系人：</span>
                                </Col>
                                <Col span="12">
                                    <Select v-model="formData.xingYeFenLei" :disabled="isDisable">
                                        <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="12">
                            <Row>
                                <Col span="6">
                                    <span>电  话：</span>
                                </Col>
                                <Col span="12">
                                    <Input type="text" v-model="formData.keHuBianMa" :disabled="isDisable"/>
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
                                    <span>手  机：</span>
                                </Col>
                                <Col span="12">
                                    <Input type="text" v-model="formData.shouJi" :disabled="isDisable"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="12">
                            <Row>
                                <Col span="6">
                                    <span>Email地址：</span>
                                </Col>
                                <Col span="12">
                                    <Input type="text" v-model="formData.emaildiZhi" :disabled="isDisable"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row>
                        <Col span="2"><span>备  注：</span></Col>
                        <Col span="19">
                            <Input type="textarea" v-model="formData.beiZhu" :disabled="isDisable"/>
                        </Col>
                    </Row>
                </FormItem>
            </Form>

            <template slot="footer">
                <Button @click="submitFormData" v-if="!isDisable">提交</Button>
                <Button @click="close">关闭</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import * as supplierApi from '@/api/baseData/supplierApi.js';
    export default {
        name: "supplier_info_operating",
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
                supplierApi.addOrUpdate(this.formData).then(res =>{
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
