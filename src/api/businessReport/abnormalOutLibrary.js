import axios from '@/libs/api.request.js'

export const AbnorLits = data =>{
    return axios.request({
        method:'post',
        url:'abnormalOutLibrary/AbnorFindAll',
        data:data
    })
};
export const AbnorInquire = data =>{
    return axios.request({
        method:'post',
        url:'abnormalOutLibrary/AbnorInquire',
        data:data
    })
};