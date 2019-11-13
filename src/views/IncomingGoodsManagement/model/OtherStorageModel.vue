<template>
    <div>
        <Modal v-model="modal1" fullscreen :title="status==1 ? `查看` : status==2 ? `修改`:`添加`">
            <Form :model="OtherStorageModel" :label-width="120">
                <Row>
                    <Col span="2">预约通知</Col>
                    <Col span="22"></Col>
                </Row>
                <Row>
                    <Col span="4">
                        <FormItem label="客户编码:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="预计到货时间:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="客户订单号:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="运输号码:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="运输公司:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                    <FormItem label="订单类型:">
                        <Input type="text"></Input>
                    </FormItem>
                   </Col>
                    <Col span="8">
                        <FormItem label="备注:">
                            <Input type="text"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="附件:">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button icon="ios-cloud-upload-outline" type="info">请选择文件 files</Button>
                            </Upload>
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span="2">进货通知明细</Col>
                    <Col span="22"></Col>
                </Row>
                <Row>
                    <Col span="24">
                        <Button type="success" @click="insertStorage">
                            添加
                        </Button>
                        &nbsp;<Button type="success">
                            合计
                        </Button>
                    </Col>
                </Row>
               <Table :columns="OtherStorageModelColumns" :data="OtherStorageModelData">

               </Table>
            </Form>
        </Modal>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                modal1:false,
                OtherStorageModel:{},
                status:'',
                OtherStorageModelColumns:this.OtherStorageModelColumnss(),
                OtherStorageModelData:[]
            }
        },
        methods: {
            //表头
            OtherStorageModelColumnss() {
                let newDate = [
                    {type: 'index', title: '序号', align: 'center'},
                    {key: 'otp', title: '操作', align: 'center' ,render(h,params){
                            return h("Checkbox", {
                                style:{
                                    display: "inline-block",
                                    "font-size": "14px"
                                },
                                props: {
                                    label: "可以",
                                },
                                on:{
                                    "on-change":(val) => {
                                       /* val=='可以'? params.row.status='1':params.row.status='0'*/
                                        console.log(val);
                                    }
                                }
                            })
                        }},
                    {
                        key: 'shangpin', title: '商品编码', align: 'center', render(h, params) {
                            return h('Input', {
                                on: {
                                    input: (val) => {
                                        t.data[params.index].estimateTime = val
                                    }
                                },
                            })

                        }
                    },
                    {
                        key: 'xx', title: '数量', align: 'center', render(h, params) {
                            return h('Input', {
                                on: {
                                    input: (val) => {
                                        t.data[params.index].estimateTime = val
                                    }
                                },
                            })

                        }
                    },
                    {
                        key: 'shohuo', title: '收货完成', align: 'center', render(h, params) {
                                return h("RadioGroup",{
                                        props: {
                                            value: params.row.status*1==1?'可以':'不可以'
                                        },
                                        on: {
                                            "on-change":(val) => {
                                                val=='可以'? params.row.status='1':params.row.status='0'
                                                console.log(val, "改变了",params.row.status);
                                            }
                                        }
                                    },
                                    [
                                        h("Radio", {
                                            style: {
                                                display: "inline-block",
                                                "font-size": "14px"
                                            },
                                            props: {
                                                label: "已完成",
                                            }
                                        }),
                                        h("Radio", {
                                            style: {
                                                display: "inline-block",
                                                "font-size": "14px"
                                            },
                                            props: {
                                                label: "未完成",
                                            }
                                        }),
                                        h("Radio", {
                                            style: {
                                                display: "inline-block",
                                                "font-size": "14px"
                                            },
                                            props: {
                                                label: "初始",
                                            }
                                        })
                                    ])
                        }
                    }
                ]
                return newDate

            },
            insertStorage() {
                this.OtherStorageModelData.push({
                    /* "shangpin":""*/

                })
            },
        }
    }
</script>