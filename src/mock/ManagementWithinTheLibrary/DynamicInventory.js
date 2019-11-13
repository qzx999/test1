import Mock from 'mockjs';
var list = [];

export const DynaList = options =>{
    const Random = Mock.Random;
    list = [];
    let DynaArray = [];
    for(let i = 0 ; i < 10 ; i ++){
        DynaArray.push(`测试${i}`);
    };
    for(let i = 0;i <5;i++ ){
        list.push({
            'kuWeiBianMa':Random.pick(DynaArray),
            'binId':Random.pick(DynaArray),
            'goodsCode':Random.pick(DynaArray),
            'shpMingCheng':Random.pick(DynaArray),
            'shpGuiGe':Random.pick(DynaArray),
            'goodsProData':Random.pick(DynaArray),
            'bzhiQi':Random.pick(DynaArray),
            'goodsBatch':Random.pick(DynaArray),
            'dqr':Random.pick(DynaArray),
            'baseGoodscount':Random.pick(DynaArray),
            'lastDate':Random.pick(DynaArray),
            'keyongkucun':Random.pick(DynaArray),
            'daixiaj':Random.pick(DynaArray),
            'baseUnit':Random.pick(DynaArray)
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