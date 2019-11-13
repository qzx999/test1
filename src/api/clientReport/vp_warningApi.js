import axios from '@/libs/api.request.js'

export const getList = data => {
    return axios.request({
        method:'post',
        url:'/vp_warning/getList',
        data:data
    });
};

export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'/vp_warning/queryList',
        data:data
    });
};
