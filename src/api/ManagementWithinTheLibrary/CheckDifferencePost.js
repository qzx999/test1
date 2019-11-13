import axios from '@/libs/api.request.js'

export const CheckList = data =>{
    return axios.request({
        method:'post',
        url:'CheckDifferencePost/CheckFindAll',
        data:data
    })
}