import axios from '@/libs/api.request.js'

//获取列表接口
export const ReturnReservationFindCha = data =>{ //查询
    return axios.request({
        url:'ReturnReservation/ReturnReservationFindCha',
        method:'post',
        data:data
    });
};
// 模糊查询
export const ReturnReservationMoHuCha = data =>{ //模糊查询
    return axios.request({
        url:'ReturnReservation/ReturnReservationMoHuCha',
        method:'post',
        data:data
    });
};
export const ReturnAdd1=data=>{  //添加
    return axios.request({
        url:'ReturnReservation/ReturnAdd1',
        method:'post',
        data:data
    })
}
export const ReturnUpdate=data=>{  //修改
    return axios.request({
        url:'ReturnReservation/ReturnUpdate',
        method:'put',
        data:data
    })
}