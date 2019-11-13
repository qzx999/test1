import Mock from 'mockjs';
var list = [];

export const OutOfList = options =>{
    const Random = Mock.Random;
    list = [];
     let OutArr = [];
     for(let i = 0;i<10;i++){
         OutArr.push(`测试${i}`)
     };
     for(let i= 0;i<5;i++){
         list.push({
            'id':Random.increment(1),
             'createDate':Random.pick(OutArr),
             'orderId':Random.pick(OutArr),
             'goodsId':Random.pick(OutArr),
             'goodsName':Random.pick(OutArr),
             'imCusCode':Random.pick(OutArr),
             'omBeizhu':Random.pick(OutArr),
             'goodsQua':Random.pick(OutArr),
             'goodsQuaok':Random.pick(OutArr),
             'baseGoodscount':Random.pick(OutArr),
             'goodsUnit':Random.pick(OutArr),
             'goodsProData':Random.pick(OutArr),
             'binIdFrom':Random.pick(OutArr),
             'kuWeiBianMa':Random.pick(OutArr),
             'cusCode':Random.pick(OutArr)
         })
     };
    let response = {
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response);
}