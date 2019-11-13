import axios from '@/libs/api.request.js'

//获取月台定义的表格数据接口
export const DefinitionList = data => {

    return axios.request({
        method:'post',
        url:'/platform/DefinitionList',
        data:data
    });
};

//月台定义添加表格数据和修改表格数据判断

export const DefinitionUpdateAndInsert = data => {

    return data.id ? DefinitionUpdate(data) : DefinitionInsert(data);
};

//月台定义修改
export const DefinitionUpdate = data => {

    return axios.request({
        method:'put',
        url:'/platform/DefinitionUpdate',
        data:data
    });
};
//月台定义添加
export const DefinitionInsert = data => {
    return axios.request({
        method:'post',
        url:'/platform/DefinitionInsert',
        data:data
    });
};

//月台定义删除
export const DefinitionRemove = data => {
    return axios.request({
        method:'delete',
        url:'/platform/DefinitionRemove',
        data:data
    });
}




