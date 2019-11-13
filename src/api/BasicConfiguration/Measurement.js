import axios from '@/libs/api.request.js'

//获取列表接口
export const MeasurementAll = data =>{ //查询
    return axios.request({
        url:'Measurement/MeasurementAll',
        method:'post',
        data:data
    });
};
export const MeasurementMoHu = data =>{ //模糊查询
    return axios.request({
        url:'Measurement/MeasurementMoHu',
        method:'post',
        data:data
    });
};
export const ReturnAdd1=data=>{  //添加
    return axios.request({
        url:'Measurement/ReturnAdd1',
        method:'post',
        data:data
    })
}
export const ReturnUpdate=data=>{  //修改
    return axios.request({
        url:'Measurement/ReturnUpdate',
        method:'put',
        data:data
    })
}
export const ShanChu =data=>{  //删除
    return axios.request({
        url:'Measurement/ShanChu',
        method:'delete',
        data:data
    })
}