import axios from '@/libs/api.request.js'

export const outsourcingLoadingList = data =>{
    return axios.request({
        method:'post',
        url:'outsourcingLoading/outsourcingLoadingFindAll',
        data:data
    })
};
export const outsourcingLoadingInquire = data =>{
    return axios.request({
        method:'post',
        url:'outsourcingLoading/outsourcingLoadingInquire',
        data:data
    })
};