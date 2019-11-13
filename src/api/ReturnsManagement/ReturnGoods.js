import axios from '@/libs/api.request.js'

//获取列表接口
export const ReturnGoodsFindAll = data =>{ //查询
    return axios.request({
        url:'ReturnGoods/ReturnGoodsFindAll',
        method:'post',
        data:data
    });
};
//模糊查询
export const ReturnGoodsMoHu = data =>{ //模糊查询
    return axios.request({
        url:'ReturnGoods/ReturnGoodsMoHu',
        method:'post',
        data:data
    });
};
export const ReturnGoodsXgaiData=data=>{  //修改
    return axios.request({
        url:'ReturnGoods/ReturnGoodsXgaiData',
        method:'put',
        data:data
    });
}
export const ReturnGoodsTian=data=>{  //添加
    return axios.request({
        url:'ReturnGoods/ReturnGoodsTian',
        method:'post',
        data:data
    })
}