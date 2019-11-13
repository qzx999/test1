import axios from '@/libs/api.request.js'

//获取列表接口
export const en_routeInventoryAll = data =>{ //查询
    return axios.request({
        url:'en_routeInventory/en_routeInventoryAll',
        method:'post',
        data:data
    });
};