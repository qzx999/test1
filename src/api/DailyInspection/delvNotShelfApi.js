import axios from '@/libs/api.request.js'

//获取收货未上架列表数据
export const getList = data => {
    return axios.request({
        method:'post',
        url:'/delvNotShelf/getList',
        data:data
    });
};

//条件查询
export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'/delvNotShelf/queryList',
        data:data
    });
};

