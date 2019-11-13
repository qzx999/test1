import axios from '@/libs/api.request.js'

//获取列表接口
export const CustomerReturnsFindAll = data =>{ //查询
    return axios.request({
        url:'ReturnsManagement/CustomerReturnsFindAll',
        method:'post',
        data:data
    });
};
//模糊查询
export const CustomerReturnsMoHu = data =>{ //查询
    return axios.request({
        url:'ReturnsManagement/CustomerReturnsMoHu',
        method:'post',
        data:data
    });
};
export const CustomerAddData=data=>{  //添加
    return axios.request({
        url:'ReturnsManagement/CustomerAddData',
        method:'post',
        data:data
    })
}
