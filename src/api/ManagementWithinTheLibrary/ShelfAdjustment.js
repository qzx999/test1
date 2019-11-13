import axios from '@/libs/api.request.js'

export const Shellist = data =>{
    return axios.request({
        method:'post',
        url:'ShelfAdjustment/ShelFindAll',
        data:data
    })
};