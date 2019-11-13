import axios from '@/libs/api.request.js'
//验收明细-获取列表
export const getAcceptanceDetailList = data =>{
    return axios.request({
        method:'post',
        url:'businessReport/getAcceptanceDetailList',
        data:data
    });
};


//验收明细--导出
export const acceptanceDetaiExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/acceptanceDetaiExport',
        data:data
    });
};
