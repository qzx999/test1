import axios from '@/libs/api.request.js'
//波次导出-获取列表
export const getWaveExportList = data =>{
    return axios.request({
        method:'post',
        url:'outGoods/getWaveExportList',
        data:data
    });
};


//波次导出-导出
export const aveExport = data =>{
    return axios.request({
        method:'get',
        url:'outGoods/aveExport',
        data:data
    });
};
