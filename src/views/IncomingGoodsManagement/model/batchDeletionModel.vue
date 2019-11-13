<template>
    <div>
        <Modal v-model="modal1" title="收货登记">
            <Form :label-width="120"  :model="batchDeletionModel">
                        <FormItem label="到货通知单:" style="width: 80%">
                            <Input type="text" v-model="batchDeletionModel.imNoticeId"> </Input>
                        </FormItem>
                        <FormItem label="商品编码:" style="width: 80%">
                            <Input type="text" v-model="batchDeletionModel.goodsCode"></Input>
                        </FormItem>
                        <FormItem label="数量:" style="width: 80%">
                            <Input type="text" v-model="batchDeletionModel.goodsCount"></Input>
                        </FormItem>
                        <FormItem label="生产日期:" style="width: 80%">
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem label="收货温度（°C）:" style="width: 80%">
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem label="托盘：" style="width: 80%">
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem label="储位：" style="width: 80%">
                            <Input type="text"></Input>
                        </FormItem>
                        <FormItem label="批次：" style="width: 80%">
                            <DatePicker type="date"  v-model="batchDeletionModel.createDate" placeholder="Select date" style="width: 200px"></DatePicker>
                        </FormItem>
                        <FormItem label="备注：" style="width: 80%">
                            <RadioGroup>
                                <Radio label="apple">
                                    <Icon type="ios-thumbs-up" />
                                    <span>良品</span>
                                </Radio>
                                <Radio label="android">
                                    <Icon type="ios-thumbs-down" />
                                    <span>不良品</span>
                                </Radio>
                            </RadioGroup>
                        </FormItem>
            </Form>
            <template slot="footer" >
                <Button type="info" style="margin-right:40%;width: 23%" @click="acceptance('formValidate')">
                    验收
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
                batchDeletionModel:{}
            }
        },
        methods:{
            acceptance(){

            }
        }
    }
</script>
