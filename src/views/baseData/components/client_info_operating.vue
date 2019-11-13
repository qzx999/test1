<template>
    <div class="client_info_operating">
        <Modal v-model='modalIsOpen' :scrollable="true" :title='formData.id ? `编辑` : `录入`' :width="800" :mask-closable="false">
           <div>
               <Scroll>
                   <Form :model="formData"  >
                       <FormItem>
                           <Row>
                               <Col span="12">
                                   <Row>
                                       <Col span="5">
                                           <span>企业属性：</span>
                                       </Col>
                                       <Col span="12">
                                           <Select v-model="formData.xingYeFenLei" >
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
                                       <Col span="5">
                                           <span>客户属性：</span>
                                       </Col>
                                       <Col span="12">
                                           <Select v-model="formData.keHuShuXing" >
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
                                           <Select v-model="formData.keHuZhuangTai" >
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
                                   <Input type="text" v-model="formData.zhongWenQch"/>
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
                                           <Input type="text" v-model="formData.zhuJiMa"/>
                                       </Col>
                                   </Row>
                               </Col>
                               <Col span="12">
                                   <Row>
                                       <Col span="6">
                                           <span>营业执照：</span>
                                       </Col>
                                       <Col span="12">
                                           <Input type="text" v-model="formData.yingYeZhiZhao"/>
                                       </Col>
                                   </Row>
                               </Col>
                           </Row>
                       </FormItem>

                       <FormItem>
                           <Row>
                               <Col span="2"><span>地  址：</span></Col>
                               <Col span="19">
                                   <Input type="text" v-model="formData.diZhi"/>
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
                                           <Input type="text" v-model="formData.zhuLianXiRen"/>
                                       </Col>
                                   </Row>
                               </Col>
                               <Col span="12">
                                   <Row>
                                       <Col span="6">
                                           <span>电  话：</span>
                                       </Col>
                                       <Col span="12">
                                           <Input type="text" v-model="formData.dianHua"/>
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
                                           <Input type="text" v-model="formData.shouJi"/>
                                       </Col>
                                   </Row>
                               </Col>
                               <Col span="12">
                                   <Row>
                                       <Col span="6">
                                           <span>Email地址：</span>
                                       </Col>
                                       <Col span="12">
                                           <Input type="text" v-model="formData.emaildiZhi"/>
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
                                           <Input type="text" v-model="formData.zhuLianXiRen1"/>
                                       </Col>
                                   </Row>
                               </Col>
                               <Col span="12">
                                   <Row>
                                       <Col span="6">
                                           <span>电  话1：</span>
                                       </Col>
                                       <Col span="12">
                                           <Input type="text" v-model="formData.dianHua1"/>
                                       </Col>
                                   </Row>
                               </Col>
                           </Row>
                       </FormItem>

                       <FormItem>
                           <Row>
                               <Col span="2"><span>备  注：</span></Col>
                               <Col span="19">
                                   <Input type="textarea" v-model="formData.beiZhu"/>
                               </Col>
                           </Row>
                       </FormItem>

                       <FormItem>
                           <Row>
                               <Col span="2"><span>附件：</span></Col>
                               <Col span="19">
                                   <template>
                                       <Upload action="">
                                           <Button icon="ios-cloud-upload-outline">选择文件</Button>
                                       </Upload>
                                   </template>
                               </Col>
                           </Row>
                       </FormItem>
                   </Form>
               </Scroll>

           </div>


            <template slot="footer">
                <Button @click="submitFormData">提交</Button>
                <Button @click="close">关闭</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import * as clientApi from '@/api/baseData/clientApi.js';
    export default {
        name: "client_info_operating",
        data() {
            return{
                selectVal:[{id:'1',name:'花花'},{id:'2',name:'嘎嘎'}],
                modalIsOpen:false,
                formData:{},
            }
        },
        methods:{
            submitFormData(){
                clientApi.addOrUpdate(this.formData).then(res => {
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
                this.formData = {};//重置数据
            },
        }
    }
</script>

<style scoped>

</style>
