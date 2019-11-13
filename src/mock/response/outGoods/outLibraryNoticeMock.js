import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let outLibraryNotice = JSON.parse(localStorage.getItem('outLibraryNotice'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'omSta':'测试数据'+i,
            'printStatus':'测试数据'+i,
            'createName':'测试数据'+i,
            'createDate':'测试数据'+i,
            'omNoticeId':'测试数据'+i,
            'cusCode':'测试数据'+i,
            'imCusCode':'测试数据'+i,
            'omBeizhu':'测试数据'+i,
            'ocusCode':'测试数据'+i,
            'ocusName':'测试数据'+i,
            'delvData':'测试数据'+i,
            'delvMember':'测试数据'+i,
            'delvMobile':'测试数据'+i,
            'delvAddr':'测试数据'+i,
            'reMember':'测试数据'+i,
            'reCarno':'测试数据'+i,
        });
    }
    if(outLibraryNotice == null || outLibraryNotice.length == 0) {
        localStorage.setItem('outLibraryNotice',JSON.stringify(responseList));
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
                rows:outLibraryNotice,
                total:outLibraryNotice.length
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
