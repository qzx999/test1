import axios from '@/libs/api.request.js'

export const Generatelist = data =>{
  return axios.request({
      method:'post',
      url:'GenerateInventoryTransfer/GenerateFindAll',
      data:data
    })
};
export const GenerateInquire = data =>{
    return axios.request({
        method:'post',
        url:'GenerateInventoryTransfer/GenerateInquire',
        data:data
    })
};