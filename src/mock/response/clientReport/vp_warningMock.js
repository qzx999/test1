import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let vp_warning = JSON.parse(localStorage.getItem('vp_warning'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'kuctype':'测试数据'+i,
            'goodsId':'测试数据'+i,
            'shpBianmakh':'测试数据'+i,
            'shpMingCheng':'测试数据'+i,
            'baseGoodscount':'测试数据'+i,
            'baseUnit':'测试数据'+i,
            'cusCode':'测试数据'+i,
            'zhongWenQch':'测试数据'+i,
            'goodsProData':'测试数据'+i,
            'bzhiQi':'测试数据'+i,
            'dqr':'测试数据'+i,
            'resDate':'测试数据'+i,
            'guoqiBili':'测试数据'+i,
        });
    }
    if(vp_warning == null || vp_warning.length == 0) {
        localStorage.setItem('vp_warning',JSON.stringify(responseList));
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
                rows:vp_warning,
                total:vp_warning.length
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
