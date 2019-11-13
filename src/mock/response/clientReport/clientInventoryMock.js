import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let clientInventory = JSON.parse(localStorage.getItem('clientInventory'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'kuctype':'测试数据'+i,
            'goodsId':'测试数据'+i,
            'shpBianmakh':'测试数据'+i,
            'shpMingCheng':'测试数据'+i,
            'goodsQua':'测试数据'+i,
            'goodsUnit':'测试数据'+i,
            'baseGoodscount':'测试数据'+i,
            'zhongLiang':'测试数据'+i,
            'baseUnit':'测试数据'+i,
            'cusCode':'测试数据'+i,
            'zhongWenQch':'测试数据'+i,
            'goodsProData':'测试数据'+i,
            'bzhiQi':'测试数据'+i,
            'dqr':'测试数据'+i,
            'hiti':'测试数据'+i,
            'kuWeiLeiXing':'测试数据'+i,
        });
    }
    if(clientInventory == null || clientInventory.length == 0) {
        localStorage.setItem('clientInventory',JSON.stringify(responseList));
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
                rows:clientInventory,
                total:clientInventory.length
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
