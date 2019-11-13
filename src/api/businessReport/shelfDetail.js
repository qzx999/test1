import axios from '@/libs/api.request.js'

//获取列表接口
export const shelfDetailAll1 = data =>{ //查询
    return axios.request({
        url:'shelfDetail/shelfDetailAll1',
        method:'post',
        data:data
    });
};
export const shelfDetailMoHu = data =>{ //模糊查询
    return axios.request({
        url:'shelfDetail/shelfDetailMoHu',
        method:'post',
        data:data
    });
};