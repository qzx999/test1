import axios from '@/libs/api.request.js'
//获取列表接口
export const ChaKang = data =>{ //查询
    return axios.request({
        url:'LocationType/ChaKang',
        method:'post',
        data:data
    });
};
export const LocationTypeFindAllTianJia=data=>{  //添加
    return axios.request({
        url:'LocationType/LocationTypeFindAllTianJia',
        method:'post',
        data:data
    })
}
export const LocationTypeFindAllXgai=data=>{  //修改
    return axios.request({
        url:'LocationType/LocationTypeFindAllXgai',
        method:'put',
        data:data
    })
}

export const LocationTypeShan=data=>{  //删除
    return axios.request({
        url:'LocationType/LocationTypeShan',
        method:'delete',
        data:data
    })
}