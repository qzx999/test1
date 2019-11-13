import axios from '@/libs/api.request.js'

//获取列表接口
export const vp_warningAll1 = data =>{ //查询
    return axios.request({
        url:'vp_warning/vp_warningAll1',
        method:'post',
        data:data
    });
};