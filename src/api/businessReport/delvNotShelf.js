import axios from '@/libs/api.request.js'

//获取列表接口
export const delvNotShelfAll = data =>{ //查询
    return axios.request({
        url:'delvNotShelf/delvNotShelfAll',
        method:'post',
        data:data
    });
};