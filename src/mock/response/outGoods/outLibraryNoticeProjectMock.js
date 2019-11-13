import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let outLibraryNoticeProject = JSON.parse(localStorage.getItem('outLibraryNoticeProject'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'createName':'测试数据'+i,
            'omNoticeId':'测试数据'+i,
            'imCusCode':'测试数据'+i,
            'omBeizhu':'测试数据'+i,
            'goodsName':'测试数据'+i,
            'goodsQua':'测试数据'+i,
            'goodsUnit':'测试数据'+i,
            'goodsProData':'测试数据'+i,
            'baseGoodscount':'测试数据'+i,
            'baseUnit':'测试数据'+i,
            'binId':'测试数据'+i,
            'planSta':'测试数据'+i,
        });
    }
    if(outLibraryNoticeProject == null || outLibraryNoticeProject.length == 0) {
        localStorage.setItem('outLibraryNoticeProject',JSON.stringify(responseList));
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
                rows:outLibraryNoticeProject,
                total:outLibraryNoticeProject.length
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
