import axios from '@/libs/api.request.js'

//获取列表数据
export const getList = data => {
    return axios.request({
        method:'post',
        url:'/DownAbnormal/getList',
        data:data
    });
};

//条件查询
export const queryList = data => {
    return axios.request({
        method:'post',
        url:'/DownAbnormal/queryList',
        data:data
    });
};
