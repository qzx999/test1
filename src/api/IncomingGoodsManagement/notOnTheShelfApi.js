import axios from '@/libs/api.request.js'

//收货未上架库存列表数据接口
export const getOntonList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getOntonList',
        data:data
    });
};

//收货未上架库存--导出
export const OntonExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/OntonExport',
        data:data
    });
};


