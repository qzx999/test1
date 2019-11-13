import axios from '@/libs/api.request.js'

//获取列表接口
export const obtainedDetailCha = data =>{ //查询
    console.log(data)
    return axios.request({
        url:'obtainedDetail/obtainedDetailCha',
        method:'post',
        data:data
    });
};