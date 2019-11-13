import axios from '@/libs/api.request.js'

export const stocklist = data =>{
    return axios.request({
        method:'post',
        url:'InventoryManagement/StockFindAll',
        data:data
    })
};
export const StockInquire = data =>{
    return axios.request({
        method:'post',
        url:'InventoryManagement/StockInquire',
        data:data
    })
};