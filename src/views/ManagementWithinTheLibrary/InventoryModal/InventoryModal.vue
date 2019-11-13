<template>
    <div>
        <Modal v-model="InvenModalValue" title="编辑" >
            <Row>
                <Col style="background-color: darkgray">
                    <h2 style="color: crimson;margin-left: 5px">库存盘点</h2>
                </Col>
            </Row>
            <Form :model="InvenFormDate" :label-width="80">
                <FormItem label="储位">
                    <Input type="text" v-model="InvenFormDate.binId"/>
                </FormItem>
                <FormItem label="托盘编码">
                    <Input type="text" v-model="InvenFormDate.tinId"/>
                </FormItem>
                <FormItem label="商品编码">
                    <Input type="text" v-model="InvenFormDate.goodsId"/>
                </FormItem>
                <FormItem label="商品名称">
                    <Input type="text" v-model="InvenFormDate.goodsName"/>
                </FormItem>
                <FormItem label="数量">
                    <Input type="text" v-model="InvenFormDate.goodsQua"/>
                </FormItem>
                <FormItem label="单位">
                    <Input type="text" v-model="InvenFormDate.goodsUnit"/>
                </FormItem>
                <FormItem label="生产日期">
                    <DatePicker style="width: 150px" v-model="InvenFormDate.goodsProData"></DatePicker>
                </FormItem>
                <FormItem label="批次">
                    <Input type="text" v-model="InvenFormDate.goodsBatch"/>
                </FormItem>
                <FormItem label="盘点数量">
                    <Input type="text" v-model="InvenFormDate.sttQua"/>
                </FormItem>
                <FormItem label="客户名称">
                    <Input type="text" v-model="InvenFormDate.cusName"/>
                </FormItem>
                <FormItem label="客户">
                    <Input type="text" v-model="InvenFormDate.cusCode"/>
                </FormItem>
                <FormItem label="盘点状态">
                    <Input type="text" v-model="InvenFormDate.sttSta"/>
                </FormItem>
                <FormItem label="盘点类型">
                    <Input type="text" v-model="InvenFormDate.sttSta"/>
                </FormItem>
            </Form>
            <template slot="footer">
                <Button type="info" @click="InvenQueDing">确定</Button>
            </template>
        </Modal>
    </div>
</template>
<script>
    import * as InventoryApi from '@/api/ManagementWithinTheLibrary/Inventory.js'
    export default {
        name: "InventoryModal",
        data(){
            return {
                InvenModalValue:false,
                InvenFormDate:{}
            }
        },
        methods:{
            InvenQueDing(){
                InventoryApi.Iupdate(this.InvenFormDate).then(res=>{
                    if(res.data.code == 2000){
                        this.$Message.success(res.data.msg);
                    }else{
                        this.$Message.error(res.data.msg)
                    }
                    this.InvenModalValue = false;
                    this.$parent.InvenGetTestData();
                })
            }
        }
    }
</script>

<style scoped>

</style>