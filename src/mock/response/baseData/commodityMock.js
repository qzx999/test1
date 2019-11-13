import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let commodity = JSON.parse(localStorage.getItem('commodity'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'suoShuKeHu':'测试数据'+i,
            'shpMingCheng':'测试数据'+i,
            'ywMingCheng':'测试数据'+i,
            'rwMingCheng':'测试数据'+i,
            'shpBianMa':'测试数据'+i,
            'shpBianMakh':'测试数据'+i,
            'shpGuiGe':'测试数据'+i,
            'chpShuXing':'测试数据'+i,
            'cfWenCeng':'测试数据'+i,
            'chlKongZhi':'测试数据'+i,
            'mpDanCeng':'测试数据'+i,
        });
    }
    if(commodity == null || commodity.length == 0) {
        localStorage.setItem('commodity',JSON.stringify(responseList));
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
                rows:commodity,
                total:commodity.length
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
