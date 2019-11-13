import axios from '@/libs/api.request.js'

export const OutOflist = data =>{
    return axios.request({
        method:'post',
        url:'OutOfFrameAdjustment/OutOfFindAll',
        data:data
    })
};