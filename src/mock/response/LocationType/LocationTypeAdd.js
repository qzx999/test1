import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const ChaKang=options=>{
    list=[];
    for(let i = 0 ; i < 20 ; i ++){
        list.push({
            'id':Random.increment(1),
            'goods_type_code':'代码',
            'goods_type_name':'公司',
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

export const LocationTypeFindAllXgai=options=>{  //修改
    let response={};
    try {
        response={
            code:2000,
            msg:'修改成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'修改失败'
        }
    }
    return Mock.mock(response);
}
export const LocationTypeShan=options=>{  //删除
    let response={};
    try {
        response={
            code:2000,
            msg:'删除成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'删除失败'
        }
    }
    return Mock.mock(response);
}
