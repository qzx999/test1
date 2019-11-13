import axios from '@/libs/api.request.js'

//获取月台管理的表格数据接口
export const ManagementsList = data => {
    return axios.request({
        method:'post',
        url:'/Platform/ManagementsList',
        data:data
    });
};

//月台管理添加表格数据和修改表格数据判断

export const ManagementsUpdateAndInsert = data => {

    return data.id ? ManagementsUpdate(data) : ManagementsInsert(data);
};

//月台管理修改
export const ManagementsUpdate = data => {

    return axios.request({
        method:'put',
        url:'/platform/ManagementsUpdate',
        data:data
    });
};
//月台管理添加
export const ManagementsInsert = data => {
    return axios.request({
        method:'post',
        url:'/platform/ManagementsInsert',
        data:data
    });
};

//月台管理删除
export const ManagementsRemove = data => {
    return axios.request({
        method:'delete',
        url:'/platform/ManagementsRemove',
        data:data
    });
}

//月台管理模板下载
export const ManagementTemplateDownload = data => {
    return axios.request({
        method:'get',
        url:'/platform/ManagementTemplateDownload',
        data:data
    });
}

//月台管理导出
export const ManagementExport = data => {
    return axios.request({
        method:'get',
        url:'/platform/ManagementExport',
        data:data
    });
}



