import axios from '@/libs/api.request.js'

//收货登记获取列表数据接口
export const getOtherStorageList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getOtherStorageList',
        data:data
    });
};

///收货登记导出

export const receiptExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/receiptExport',
        data:data
    });
};

///收货登记导入
export const receipImport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/receipImport',
        data:data
    });
};


//收货登记下载模板
export const receipTemplateDownload = data => {
    return axios.request({
        method:'get',
        url:'/purchase/receipTemplateDownload',
        data:data
    });
};

//收货登记验收接口
export const receipAcceptance = data => {
    return axios.request({
        method:'post',
        url:'/purchase/receipAcceptance',
        data:data
    });
};
