import axios from '@/libs/api.request.js'

export const GoodsList = data =>{
    return axios.request({
        method:'post',
        url:'goodsStock/GoodsFindAll',
        data:data
    })
};
export const GoodsInquire = data =>{
  return axios.request({
      method:'post',
      url:'goodsStock/GoodsInquire',
      data:data
  })
};