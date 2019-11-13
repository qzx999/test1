import axios from '@/libs/api.request.js'
export const CountList = data =>{
    return axios.request({
        method:'post',
        url:'CountDifference/CountFindAll',
        data:data
    })
}