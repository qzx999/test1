import axios from '@/libs/api.request.js'

export const CompreList = data =>{
    return axios.request({
        method:'post',
        url:'ComprehensiveInventory/ComperFindAll',
        data:data
    })
}