import axios from '@/libs/api.request.js'

//获取列表接口
export const billingInventoryAll = data =>{ //查询
    return axios.request({
        url:'billingInventory/billingInventoryAll',
        method:'post',
        data:data
    });
};