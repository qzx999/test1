import axios from '@/libs/api.request.js'

export const Touchlist = data =>{
    return axios.request({
        method:'post',
        url:'TouchPlate/TouchFindAll',
        data:data
    })
};