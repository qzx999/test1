import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let abnormalOutLibrary = JSON.parse(localStorage.getItem('abnormalOutLibrary'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'om_notice_id':'测试数据'+i,
            'im_cus_code':'测试数据'+i,
            'ocus_code':'测试数据'+i,
            'ocus_name':'测试数据'+i,
            'om_beizhu':'测试数据'+i,
            'goods_id':'测试数据'+i,
            'goods_name':'测试数据'+i,
            'base_goodscount':'测试数据'+i,
            'goods_unit':'测试数据'+i,
            'plan_sta':'测试数据'+i,
            'sumqua':'测试数据'+i,
        });
    }
    if(abnormalOutLibrary == null || abnormalOutLibrary.length == 0) {
        localStorage.setItem('abnormalOutLibrary',JSON.stringify(responseList));
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
                rows:abnormalOutLibrary,
                total:abnormalOutLibrary.length
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
