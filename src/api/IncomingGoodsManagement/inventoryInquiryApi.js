import axios from '@/libs/api.request.js'

//其它入库获取列表数据接口
export const getInvenList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getInvenList',
        data:data
    });
};



//其它入库导出
export const invenExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/invenExport',
        data:data
    });
};