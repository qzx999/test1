import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let storageDefinition = JSON.parse(localStorage.getItem('storageDefinition'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'binStore':'测试数据'+i,
            'kuWeiBianMa':'测试数据'+i,
            'kuWeiTiaoMa':'测试数据'+i,
            'kuWeiLeiXing':'测试数据'+i,
            'kuWeiShuXing':'测试数据'+i,
            'chpShuXing':'测试数据'+i,
            'shangJiaCiXu':'测试数据'+i,
            'quHuoCiXu':'测试数据'+i,
            'suoShuKeHu':'测试数据'+i,
            'zuiDaTiJi':'测试数据'+i,
            'zuiDaZhongLiang':'测试数据'+i,
            'zuiDaTuoPan':'测试数据'+i,
            'chang':'测试数据'+i,
            'kuan':'测试数据'+i,
            'gao':'测试数据'+i,
            'tingYong':'测试数据'+i,
            'mingXi':'测试数据'+i,
            'mingXi1':'测试数据'+i,
            'mingXi2':'测试数据'+i,
        });
    }
    if(storageDefinition == null || storageDefinition.length == 0) {
        localStorage.setItem('storageDefinition',JSON.stringify(responseList));
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
                rows:storageDefinition,
                total:storageDefinition.length
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

export const batchDisableById = options =>{
    let idList = JSON.parse(options.body);
    let response = {
        code: 200,
        msg:`停用成功${idList}`,
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
