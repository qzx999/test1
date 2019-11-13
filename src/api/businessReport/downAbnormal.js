import axios from '@/libs/api.request.js'

//获取列表接口
export const downAbnormalAll = data =>{ //查询
    return axios.request({
        url:'downAbnormal/downAbnormalAll',
        method:'post',
        data:data
    });
};