import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let otherOutLibrary = JSON.parse(localStorage.getItem('otherOutLibrary'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'createName':'测试数据'+i,
            'createDate':'测试数据'+i,
            'omNoticeId':'测试数据'+i,
            'cusCode':'测试数据'+i,
            'delvData':'测试数据'+i,
            'delvMember':'测试数据'+i,
            'delvMobile':'测试数据'+i,
            'delvAddr':'测试数据'+i,
            'reMember':'测试数据'+i,
            'reCarno':'测试数据'+i,
            'omBeizhu':'测试数据'+i,
            'omSta':'测试数据'+i,
        });
    }
    if(otherOutLibrary == null || otherOutLibrary.length == 0) {
        localStorage.setItem('otherOutLibrary',JSON.stringify(responseList));
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
                rows:otherOutLibrary,
                total:otherOutLibrary.length
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
