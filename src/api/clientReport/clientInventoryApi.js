import axios from '@/libs/api.request.js'

export const getList = data => {
    return axios.request({
        method:'post',
        url:'/clientInventory/getList',
        data:data
    });
};

export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'/clientInventory/queryList',
        data:data
    });
};

