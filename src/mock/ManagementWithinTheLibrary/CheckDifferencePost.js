import Mock from 'mockjs';
var list = [];

export const CheckList = options =>{
    const Random = Mock.Random;
    list = [];
    let CheckArr = [];
    for(let i = 0;i<10;i++){
        CheckArr.push(`测试${i}`);
    };
    for(let i = 0;i<5;i++){
        list.push({
            'binId':Random.pick(CheckArr),
            'tinId':Random.pick(CheckArr),
            'goodsId':Random.pick(CheckArr),
            'goodsName':Random.pick(CheckArr),
            'goodsQua':Random.pick(CheckArr),
            'goodsUnit':Random.pick(CheckArr),
            'goodsProData':Random.pick(CheckArr),
            'goodsBatch':Random.pick(CheckArr),
            'sttQua':Random.pick(CheckArr),
            'cusName':Random.pick(CheckArr),
            'cusCode':Random.pick(CheckArr),
            'sttSta':Random.pick(CheckArr),
            'createName':Random.pick(CheckArr),
            'createDate':Random.pick(CheckArr),
            'updateName':Random.pick(CheckArr),
            'updateBy':Random.pick(CheckArr),
            'updateDate':Random.pick([0,1])
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