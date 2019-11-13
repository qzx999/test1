<template>
    <div class="client_info_show">
        <Modal v-model='modalIsOpen' title='查看' :width="800" :mask-closable="false">
            <Scroll>
                <Form :model="formData">
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="5">
                                        <span>企业属性：</span>
                                    </Col>
                                    <Col span="12">
                                        <Select v-model="formData.xingYeFenLei" disabled>
                                            <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="5">
                                        <span>客户编码：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.keHuBianMa" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>


                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="5">
                                        <span>客户属性：</span>
                                    </Col>
                                    <Col span="12">
                                        <Select v-model="formData.keHuShuXing" disabled>
                                            <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>出库计费方式：</span>
                                    </Col>
                                    <Col span="11">
                                        <Select v-model="formData.keHuZhuangTai" disabled>
                                            <Option v-for = "item in selectVal" :value="item.id">{{item.name}}</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="2"><span>中文全称：</span></Col>
                            <Col span="19">
                                <Input type="text" v-model="formData.zhongWenQch" disabled/>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>合同号：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.zhuJiMa" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>营业执照：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.yingYeZhiZhao" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="2"><span>地  址：</span></Col>
                            <Col span="19">
                                <Input type="text" v-model="formData.diZhi" disabled/>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>负责人：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.zhuLianXiRen" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>电  话：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.dianHua" disabled/>
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
                                        <Input type="text" v-model="formData.shouJi" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>Email地址：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.emaildiZhi" disabled/>
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
                                        <span>联系人1：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.zhuLianXiRen1" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <Row>
                                    <Col span="6">
                                        <span>电  话1：</span>
                                    </Col>
                                    <Col span="12">
                                        <Input type="text" v-model="formData.dianHua1" disabled/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="2"><span>备  注：</span></Col>
                            <Col span="19">
                                <Input type="textarea" v-model="formData.beiZhu" disabled/>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem>
                        <Row>
                            <Col span="2"><span>附件：</span></Col>
                            <Col span="19">
                                <template>
                                    <!-- <Upload action="">
                                         <Button icon="ios-cloud-upload-outline">选择文件</Button>
                                     </Upload>-->
                                </template>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </Scroll>

            <template slot="footer">
                <Button @click="close">关闭</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "client_info_show",
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
