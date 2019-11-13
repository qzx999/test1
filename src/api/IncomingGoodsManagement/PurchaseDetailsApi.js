//进货明细获取列表数据的接口
export const getPurchaseList = data => {
    return axios.request({
        method:'post',
        url:'/purchase/getPurchaseList',
        data:data
    });
};

//进货明细获取导出
export const purchaseExport = data => {
    return axios.request({
        method:'get',
        url:'/purchase/purchaseExport',
        data:data
    });
}

