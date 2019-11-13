import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let DownAbnormal = JSON.parse(localStorage.getItem('DownAbnormal'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'create_date':'测试数据'+i,
            'create_name':'测试数据'+i,
            'update_name':'测试数据'+i,
            'ku_wei_bian_ma':'测试数据'+i,
            'bin_id':'测试数据'+i,
            'bin_id_to':'测试数据'+i,
            'cus_code':'测试数据'+i,
            'zhong_wen_qch':'测试数据'+i,
            'goods_code':'测试数据'+i,
            'shp_ming_cheng':'测试数据'+i,
            'goods_pro_data':'测试数据'+i,
            'base_unit':'测试数据'+i,
            'goods_qua':'测试数据'+i,
            'goods_quaok':'测试数据'+i,
        });
    }
    if(DownAbnormal == null || DownAbnormal.length == 0) {
        localStorage.setItem('DownAbnormal',JSON.stringify(responseList));
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
                rows:DownAbnormal,
                total:DownAbnormal.length
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
