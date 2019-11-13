import axios from '@/libs/api.request.js'

//获取批量收货列表数据接口
export const getBatchList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getBatchList',
        data:data
    });
};

//批量收货验收接口
export const batchAcceptance = data => {
    return axios.request({
        method:'post',
        url:'/purchase/batchAcceptance',
        data:data
    });
};
