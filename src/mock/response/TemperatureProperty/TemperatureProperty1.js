import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const TemperaturePropertyFindAll=options=>{
    list=[];
    for(let i = 0 ; i < 20 ; i ++){
        list.push({
            'id':Random.increment(1),
            'deg_type_code':'代码',
            'deg_type_name':'公司',
        });
    };
    let response={
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    console.log(list);
    return Mock.mock(response)
}
export const TemperaturePropertyShanChu1=options=>{
    let response={};
    try {
        response={
            code:2000,
            msg:'删除成功'
        }
    }catch (e) {
        response={
            code:2000,
            msg:`删除失败${e}`
        }
    }
    return Mock.mock(response);
}