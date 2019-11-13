import axios from '@/libs/api.request.js'

export const orderlist = data =>{
  return axios.request({
      method:'post',
      url:'YueKuManagement/OrderFindAll',
      data:data
  })
};
export const Inquire = data =>{
  return axios.request({
      method:'post',
      url:'YueKuManagement/YueKuInquire',
      data:data
  })
};
export const yuekudelete = data =>{
  return axios.request({
      method:'delete',
      url:'YueKuManagement/YueKuDelete',
      data:data
  })
};
export const update = data =>{
    return axios.request({
        method:'put',
        url:'YueKuManagement/YueKuUpdate',
        data:data
    })
};
export const seve = data =>{
    return axios.request({
        method:'post',
        url:'YueKuManagement/YueKuAdd',
        data:data
    })
};
export const YueKuseveOrupdate = data =>{
    return data.id !=null ? update(data) : seve(data)
};

