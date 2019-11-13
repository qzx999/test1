import axios from '@/libs/api.request.js'

//获取列表接口
export const ReturnsReturnsFindAll = data =>{ //查询
    return axios.request({
        url:'ReturnsMaterial/ReturnsReturnsFindAll',
        method:'post',
        data:data
    });
};
//模糊查询
export const ReturnsReturnsMoHu = data =>{ //模糊查询
    return axios.request({
        url:'ReturnsMaterial/ReturnsReturnsMoHu',
        method:'post',
        data:data
    });
};