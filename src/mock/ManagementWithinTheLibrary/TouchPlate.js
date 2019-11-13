import Mock from 'mockjs';
var list = [];

export const Touchlist = options =>{
    const Random = Mock.Random;
    list = [];
    let TouchArray = [];
    for(let i = 0 ; i < 10 ; i ++){
        TouchArray.push(`测试${i}`);
    };
    for(let i = 0;i <5;i++ ){
        list.push({
            'id':Random.increment(1),
            'lastMove':Random.pick(TouchArray),
            'kuctype':Random.pick(TouchArray),
            'kuWeiBianMa':Random.pick(TouchArray),
            'binId':Random.pick(TouchArray),
            'cusCode':Random.pick(TouchArray),
            'zhongWenQch':Random.pick(TouchArray),
            'goodsId':Random.pick(TouchArray),
            'goodsQua':Random.pick(TouchArray),
            'shpMingCheng':Random.pick(TouchArray),
            'goodsProData':Random.pick(TouchArray),
            'bzhiQi':Random.pick(TouchArray),
            'goodsUnit':Random.pick(TouchArray),
            'sttSta':Random.pick([0,1])
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