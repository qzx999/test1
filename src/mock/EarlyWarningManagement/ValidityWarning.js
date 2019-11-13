import Mock from 'mockjs';
var list = [];

export const ValidityList = options =>{
    const Random = Mock.Random;
    list = [];
    let ValArr = [];
    for(let i = 0;i<10;i++){
        ValArr.push(`测试${i}`);
    };
    for(let i = 0;i<5;i++){
        list.push({
            'id':Random.increment(1),
            'kuctype':Random.pick(ValArr),
            'goodsId':Random.pick(ValArr),
            'shpBianmakh':Random.pick(ValArr),
            'shpMingCheng':Random.pick(ValArr),
            'baseGoodscount':Random.pick(ValArr),
            'baseUnit':Random.pick(ValArr),
            'cusCode':Random.pick(ValArr),
            'zhongWenQch':Random.pick(ValArr),
            'goodsProData':Random.pick(ValArr),
            'bzhiQi':Random.pick(ValArr),
            'dqr':Random.pick(ValArr),
            'resDate':Random.pick(ValArr),
            'guoqiBili':Random.pick(ValArr)
        })
    }
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