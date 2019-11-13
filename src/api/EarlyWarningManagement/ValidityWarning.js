import axios from '@/libs/api.request.js'

export const ValidityList = data =>{
    return axios.request({
        method:'post',
        url:'ValidityWarning/ValidityFindAll',
        data:data
    })
}