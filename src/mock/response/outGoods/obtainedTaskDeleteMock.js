import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let obtainedTaskDelete = JSON.parse(localStorage.getItem('obtainedTaskDelete'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'createDate':'测试数据'+i,
            'updateName':'测试数据'+i,
            'updateDate':'测试数据'+i,
            'omNoticeId':'测试数据'+i,
            'goodsId':'测试数据'+i,
            'goodsName':'测试数据'+i,
            'imCusCode':'测试数据'+i,
            'omBeizhu':'测试数据'+i,
            'qmOkQuat':'测试数据'+i,
            'goodsUnit':'测试数据'+i,
            'baseGoodscount':'测试数据'+i,
            'baseUnit':'测试数据'+i,
            'itemText':'测试数据'+i,
        });
    }
    if(obtainedTaskDelete == null || obtainedTaskDelete.length == 0) {
        localStorage.setItem('obtainedTaskDelete',JSON.stringify(responseList));
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
                rows:obtainedTaskDelete,
                total:obtainedTaskDelete.length
            }
        };
    }
    return Mock.mock(response);
};

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
