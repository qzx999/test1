import axios from '@/libs/api.request.js'

export const Invenlist = data =>{
    return axios.request({
        method:'post',
        url:'ManagementWithinTheLibrary/InvenFindAll',
        data:data
    })
};
export const InvenInquire = data =>{
    return axios.request({
        method:'post',
        url:'ManagementWithinTheLibrary/InvenInquire',
        data:data
    })
};
export const Iseve = data =>{
    return axios.request({
        method:'post',
        url:'ManagementWithinTheLibrary/InvenSeve',
        data:data
    })
};
export const Iupdate = data =>{
    return axios.request({
        method:'put',
        url:'ManagementWithinTheLibrary/InvenUpdate',
        data:data
    })
};
export const IseveOrIupdate = data =>{
  return data.id != null ? Iupdate(data) : Iseve(data);
};
export const Idelete = data =>{
    return axios.request({
        method:'delete',
        url:'ManagementWithinTheLibrary/InvenDelete'
    })
};