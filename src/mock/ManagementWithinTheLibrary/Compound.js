import Mock from 'mockjs';
var list = [];

export const CompoundList = options =>{
    const Random = Mock.Random;
    list = [];
    let CompoundArr = [];
    for(let i = 0;i<10;i++){
        CompoundArr.push(`测试${i}`);
    };
    for(let i = 0;i<5;i++){
        list.push({
            'createName':Random.pick(CompoundArr),
            'createDate':Random.pick(CompoundArr),
            'updateName':Random.pick(CompoundArr),
            'updateBy':Random.pick(CompoundArr),
            'updateDate':Random.pick(CompoundArr),
            'binId':Random.pick(CompoundArr),
            'tinId':Random.pick(CompoundArr),
            'goodsId':Random.pick(CompoundArr),
            'goodsName':Random.pick(CompoundArr),
            'goodsQua':Random.pick(CompoundArr),
            'goodsUnit':Random.pick(CompoundArr),
            'goodsProData':Random.pick(CompoundArr),
            'goodsBatch':Random.pick(CompoundArr),
            'sttQua':Random.pick(CompoundArr),
            'cusName':Random.pick(CompoundArr),
            'cusCode':Random.pick(CompoundArr),
            'sttSta':Random.pick([0,1])
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