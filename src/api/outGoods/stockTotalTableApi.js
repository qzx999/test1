import axios from '@/libs/api.request.js'
//库存总表-获取列表
export const getStockTotalTableList = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/getStockTotalTableList',
        data:data
    });
};


//库存总表-导出
export const stockTotalTableExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/stockTotalTableExport',
        data:data
    });
};


