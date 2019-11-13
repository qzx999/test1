import Mock from 'mockjs';
var list = [];

export const Shellist = options =>{
    const Random = Mock.Random;
    list = [];
    let ShelArray = [];
    for(let i = 0 ; i < 10 ; i ++){
        ShelArray.push(`测试${i}`);
    };
    for(let i = 0;i <5;i++ ){
        list.push({
            'id':Random.increment(1),
            'createDate':Random.pick(ShelArray),
            'goodsId':Random.pick(ShelArray),
            'goodsName':Random.pick(ShelArray),
            'goodsQua':Random.pick(ShelArray),
            'orderId':Random.pick(ShelArray),
            'goodsUnit':Random.pick(ShelArray),
            'goodsProData':Random.pick(ShelArray),
            'kuWeiBianMa':Random.pick(ShelArray),
            'binId':Random.pick(ShelArray),
            'cusCode':Random.pick(ShelArray),
            'baseUnit':Random.pick(ShelArray),
            'baseGoodscount':Random.pick(ShelArray)
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
};