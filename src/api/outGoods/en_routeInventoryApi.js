import axios from '@/libs/api.request.js'
//在途存车-获取列表
export const getEnRouteInventoryList = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/getEnRouteInventoryList',
        data:data
    });
};


//导出
export const enRouteInventoryExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/enRouteInventoryExport',
        data:data
    });
};
