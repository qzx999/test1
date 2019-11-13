import axios from '@/libs/api.request.js'
export const DynaList = data =>{
    return axios.request({
        method:'post',
        url:'DynamicInventory/DynaFindAll',
        data:data
    })
}