import axios from '@/libs/api.request.js'

//获取列表接口
export const TemperaturePropertyFindAll = data =>{ //查询
    return axios.request({
        url:'TemperatureProperty/TemperaturePropertyFindAll',
        method:'post',
        data:data
    });
};
export const TemperaturePropertyShanChu1=data=>{
    return axios.request({
        url:'TemperatureProperty/TemperaturePropertyShanChu1',
        method:'delete',
        data:data
    });
}