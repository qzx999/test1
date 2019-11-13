import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const OrdertypeList=options=>{
    list=[];
    for(let i = 0 ; i < 20 ; i ++){
        list.push({
            'id':Random.increment(1),
            'order_type_code':'小鹏',
            'order_type_name':'天鹏公司',
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
export const OrdertypeAddFindAdd=options=>{  //添加
    let response={};
    try {
        response={
            code:2000,
            msg:'添加成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'添加失败'
        }
    }
    return Mock.mock(response);
}

export const OrdertypeAddXgai=options=>{  //修改
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

export const OrdertypeShanChu1=options=>{  //删除
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