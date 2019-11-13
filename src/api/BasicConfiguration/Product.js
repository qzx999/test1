import axios from '@/libs/api.request.js'

//获取列表接口
export const ProductDataList = data =>{ //查询
    return axios.request({
        url:'Product/ProductDataList',
        method:'post',
        data:data
    });
};
export const ProductShanChu=data=>{  //删除
    return axios.request({
        url:'Product/ProductShanChu',
        method:'delete',
        data:data
    })
}
