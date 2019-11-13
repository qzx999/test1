import axios from '@/libs/api.request.js'

export const PurchaseList = data =>{
    return axios.request({
        method:'post',
        url:'purchaseNotice/PurchaseFindAll',
        data:data
    })
};
export const PurchaseInquire = data =>{
    return axios.request({
        method:'post',
        url:'purchaseNotice/PurchaseInquire',
        data:data
    })
};