<template>
    <div>
        <Modal v-model='modalIsOpen' :scrollable="true" :title='formData.id ? `编辑` : `录入`' :width="700" :mask-closable="false">
            <Scroll height="350">
                <Form :model="formData">
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>创建日期：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>商品编码：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>数量：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>确认数量：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>单位：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>基本单位数量：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>基本单位：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="7">
                                            <span>原始单据编码：</span>
                                        </Col>
                                        <Col span="12">
                                            <Input type="text" v-model="formData.keHuBianMa"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>原始单据类型：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>生产日期：</span>
                                    </Col>
                                    <Col span="12">
                                        <DatePicker type="daterange" placement="bottom-end"></DatePicker>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>源托盘码：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                    <Row>
                        <Col span="12">
                            <Row>
                                <Col span="7">
                                    <span>库位编码：</span>
                                </Col>
                                <Col span="12">
                                    <DatePicker type="daterange" placement="bottom-end"></DatePicker>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>作业类型：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>货主：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>目标托盘：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="7">
                                        <span>状态：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </Scroll>

            <template slot="footer">
                <Button @click="submitFormData">提交</Button>
                <Button @click="close">关闭</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "orderPicking_info_operating",
        data() {
            return{
                selectVal:[{id:'1',name:'花花'},{id:'2',name:'嘎嘎'}],
                modalIsOpen:false,
                formData:{},
            }
        },

        methods:{

            //关闭窗口
            close(){
                this.modalIsOpen = false;
                this.formData = {};//重置数据
            },
        },

    }
</script>

<style scoped>

</style>
