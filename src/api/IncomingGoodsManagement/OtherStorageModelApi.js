import axios from '@/libs/api.request.js'

//其它入库获取列表数据接口
export const getOtherStorageList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getOtherStorageList',
        data:data
    });
};

export const otherUpdateAndInsert = data => {
    return data.id ? otherUpdate(data) : otherInsert(data);
};

//其它入库的修改接口
export const otherUpdate = data => {
    return axios.request({
        method:'put',
        url:'/purchase/otherUpdate',
        data:data
    });
};
//其它入库的添加接口
export const otherInsert = data => {
    return axios.request({
        method:'post',
        url:'/purchase/otherInsert',
        data:data
    });
};

//其它入库删除接口
export const otherRemove = data => {
    return axios.request({
        method:'delete',
        url:'/purchase/otherRemove',
        data:data
    });
};

//其它入库导出
export const OtherStorageExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/OtherStorageExport',
        data:data
    });
};




//其它入库导入
export const OtherStorageImport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/OtherStorageImport',
        data:data
    });
};


//其它入库下载
export const OtherStorageTemplateDownload = data => {
    return axios.request({
        method:'get',
        url:'/purchase/OtherStorageTemplateDownload',
        data:data
    });
};



