import Mock from 'mockjs';
var list = [];

export const Invenlist = options =>{
    const Random = Mock.Random;
    list = [];
    let InvenArray = [];
    for(let i = 0 ; i < 10 ; i ++){
        InvenArray.push(`测试数据${i}`);
    };
    for(let i = 0;i <5;i++ ){
        list.push({
            'id':Random.increment(1),
            'binId':Random.pick(InvenArray),
            'tinId':Random.pick(InvenArray),
            'goodsId':Random.pick(InvenArray),
            'goodsName':Random.pick(InvenArray),
            'goodsQua':Random.pick(InvenArray),
            'goodsUnit':Random.pick(InvenArray),
            'goodsProData':Random.pick(InvenArray),
            'goodsBatch':Random.pick(InvenArray),
            'sttQua':Random.pick(InvenArray),
            'cusName':Random.pick(InvenArray),
            'cusCode':Random.pick(InvenArray),
            'sttSta':Random.pick(InvenArray),
            'createName':Random.pick(InvenArray),
            'createDate':Random.pick(InvenArray),
            'updateName':Random.pick(InvenArray),
            'updateBy':Random.pick(InvenArray),
            'updateDate':Random.pick(InvenArray),
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
export const Iupdate = options =>{
    let response = {};
    try{
        response = {code:2000,msg:'修改成功'}
    }catch (e) {
        response = {code:2001,msg:'修改失败'}
    };
    return Mock.mock(response);
};
export const Idelete = options =>{
    let response = {};
    try{
        response = {code:2000,msg:'删除成功'}
    }catch (e) {
        response = {code:2001,msg:'删除失败'}
    };
    return Mock.mock(response);
};