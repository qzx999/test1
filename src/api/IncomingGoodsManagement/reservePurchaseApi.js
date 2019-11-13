import axios from '@/libs/api.request.js'

//预约进货获取列表数据接口
export const getReservePurchaseList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getReservePurchaseList',
        data:data
    });
};

export const ReserveUpdateAndInsert = data => {
    return data.id ? reserveUpdate(data) : reserveInsert(data);
};

//预约进货修改
export const reserveUpdate = data => {
    return axios.request({
        method:'put',
        url:'/purchase/reserveUpdate',
        data:data
    });
};

//预约进货添加
export const reserveInsert = data => {
    return axios.request({
        method:'post',
        url:'/purchase/reserveInsert',
        data:data
    });
};

//预约进货删除
export const reserveRemove = data => {
    return axios.request({
        method:'delete',
        url:'/purchase/reserveRemove',
        data:data
    });
};

//预约进货导出
export const reserveExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/reserveExport',
        data:data
    });
};

//预约进货下载模板
export const reserveTemplateDownload = data => {
    return axios.request({
        method:'get',
        url:'/purchase/reserveTemplateDownload',
        data:data
    });
};