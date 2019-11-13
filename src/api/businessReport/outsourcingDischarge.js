import axios from '@/libs/api.request.js'

export const outsourcingDischargeList = data =>{
    return axios.request({
        method:'post',
        url:'outsourcingDischarge/outsourcingDischargeFindAll',
        data:data
    })
};
export const outsourcingDischargeInquire = data =>{
    return axios.request({
        method:'post',
        url:'outsourcingDischarge/outsourcingDischargeInquire',
        data:data
    })
};