import axios from '@/libs/api.request.js'

export const ReceiptList = data =>{
    return axios.request({
        method:'post',
        url:'receiptList/ReceiptFindAll',
        data:data
    })
};
export const ReceiptInquire = data =>{
    return axios.request({
        method:'post',
        url:'receiptList/ReceiptInquire',
        data:data
    })
};