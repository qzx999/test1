import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let supplier = JSON.parse(localStorage.getItem('supplier'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'createName':'测试数据'+i,
            'createDate':'测试数据'+i,
            'updateName':'测试数据'+i,
            'updateDate':'测试数据'+i,
            'zhongWenQch':'测试数据'+i,
            'gysBianMa':'测试数据'+i,
            'xingYeFenLei':'测试数据'+i,
            'diZhi':'测试数据'+i,
            'zhuLianXiRen':'测试数据'+i,
            'dianHua':'测试数据'+i,
            'shouJi':'测试数据'+i,
            'emaildiZhi':'测试数据'+i,
            'beiZhu':'测试数据'+i,
        });
    }
    if(supplier == null || supplier.length == 0) {
        localStorage.setItem('supplier',JSON.stringify(responseList));
        response = {
            code: 200,
            msg:'查询成功',
            data:{
                rows:responseList,
                total:responseList.length
            }
        };
    }else{
        response = {
            code: 200,
            msg:'查询成功',
            data:{
                rows:supplier,
                total:supplier.length
            }
        };
    }
    return Mock.mock(response);
};

//条件查询
export const queryList = options => {
    let data = JSON.parse(options.body);
    console.log('进入queryList Mock,查询条件：',data);
    let response = {
        code: 200,
        msg:'执行成功',
        data:{
            rows:responseList,
            total:responseList.length
        },
    };
    return Mock.mock(response);
};

//删除
export const deleteById = options =>{
    let id = JSON.parse(options.body);
    let response = {
        code: 200,
        msg:`删除成功${id}`,
    };
    return Mock.mock(response);
};

//修改
export const update = options =>{
    let response = {
        code: 200,
        msg:'修改成功',
    };
    return Mock.mock(response);
};

//添加
export const add = options =>{
    let data = JSON.parse(options.body);
    console.log('提交的数据',data);
    let response = {
        code: 200,
        msg:'添加成功',
    };
    return Mock.mock(response);
};
