import axios from '@/libs/api.request.js'

//回单管理-获取列表条件查询

export const geteceiptManageList = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/geteceiptManageList',
        data:data
    });
};
//回单管理-导入
export const receiptManageImport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/receiptManageImport',
        data:data
    });
};
//回单管理-导出
export const receiptManageExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/receiptManageExport',
        data:data
    });
};
//回单管理-下载模板
export const receiptManageTemplateDownload = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/receiptManageTemplateDownload',
        data:data
    });
};


//回单管理-新增-修改判断
export const receiptManageUpdateAndInsert = data => {
    return data.id ? receiptManageUpdate(data) : receiptManageInsert(data);
};

//修改
export const receiptManageUpdate = data =>{
    return axios.request({
        method:'put',
        url:'outGoods/receiptManageUpdate',
        data:data
    });
};

//新增
export const receiptManageInsert = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/receiptManageInsert',
        data:data
    });
};















