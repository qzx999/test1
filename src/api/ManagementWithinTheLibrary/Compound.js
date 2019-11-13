import axios from '@/libs/api.request.js'

export const CompoundList = data =>{
    return axios.request({
        method:'post',
        url:'Compound/CompoundFindAll',
        data:data
    })
}