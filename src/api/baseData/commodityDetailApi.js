import axios from '@/libs/api.request.js'

//获取收货未上架列表
export const getList = data => {
    return axios.request({
        method:'post',
        url:'/commodityDetail/getList',
        data:data
    });
};

export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'/commodityDetail/queryList',
        data:data
    });
};
