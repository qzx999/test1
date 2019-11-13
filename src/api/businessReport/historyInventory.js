import axios from '@/libs/api.request.js'

//获取列表接口
export const historyInventoryAll = data =>{ //查询
    return axios.request({
        url:'historyInventory/historyInventoryAll',
        method:'post',
        data:data
    });
};