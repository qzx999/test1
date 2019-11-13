import axios from '@/libs/api.request.js'

//获取列表
export const getList = data => {
    return axios.request({
        method:'post',
        url:'taskConfirm/getList',
        data:data
    });
};

//条件查询
export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'taskConfirm/queryList',
        data:data
    });
};

//删除
export const deleteById = data =>{
    return axios.request({
        url:'taskConfirm/deleteById',
        method:'delete',
        data:data
    });
};

//添加
export const add = data =>{
    return axios.request({
        url:'taskConfirm/add',
        method:'post',
        data:data
    });
};

//修改接口
export const update = data =>{
    return axios.request({
        url:'taskConfirm/update',
        method:'put',
        data:data
    });
};

//判断是添加还是修改
export const addOrUpdate = data =>{
    return data.id ? update(data) : add(data);
};


