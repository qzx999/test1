import axios from '@/libs/api.request.js'

//获取列表接口
export const OrdertypeList = data =>{ //查询
    return axios.request({
        url:'Ordertype/OrdertypeList',
        method:'post',
        data:data
    });
};
export const OrdertypeAddFindAdd=data=>{  //添加
    return axios.request({
        url:'Ordertype/OrdertypeAddFindAdd',
        method:'post',
        data:data
    })
}
export const OrdertypeAddXgai=data=>{  //修改
    return axios.request({
        url:'Ordertype/OrdertypeAddXgai',
        method:'put',
        data:data
    })
}
export const OrdertypeShanChu1 =data=>{  //删除
    return axios.request({
        url:'Ordertype/OrdertypeShanChu1',
        method:'delete',
        data:data
    })
}