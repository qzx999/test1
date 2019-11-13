import axios from '@/libs/api.request.js'

//获取列表
export const getList = data => {
    return axios.request({
        method:'post',
        url:'storageDefinition/getList',
        data:data
    });
};

//条件查询
export const queryList = data =>{
    return axios.request({
        method:'post',
        url:'storageDefinition/queryList',
        data:data
    });
};

//删除
export const deleteById = data =>{
    return axios.request({
        url:'storageDefinition/deleteById',
        method:'delete',
        data:data
    });
};

//批量停用
export const batchDisableById = data =>{
    return axios.request({
        url:'storageDefinition/batchDisableById',
        method:'delete',
        data:data
    });
};

//添加
export const add = data =>{
    return axios.request({
        url:'storageDefinition/add',
        method:'post',
        data:data
    });
};

//修改接口
export const update = data =>{
    return axios.request({
        url:'storageDefinition/update',
        method:'put',
        data:data
    });
};

//判断是添加还是修改
export const addOrUpdate = data =>{
    return data.id ? update(data) : add(data);
};
