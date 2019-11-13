import axios from '@/libs/api.request.js'
//批量回单-获取列表
export const getBatchReceiptList = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/getBatchReceiptList',
        data:data
    });
};

