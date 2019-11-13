import axios from '@/libs/api.request.js'
//在途存车-获取列表
export const getEnterOutReportList = data =>{
    return axios.request({
        method:'post',
        url:'businessReport/getEnterOutReportList',
        data:data
    });
};


//导出
export const enterOutReportExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/enterOutReportExport',
        data:data
    });
};
