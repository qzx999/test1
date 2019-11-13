import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let commodityDetail = JSON.parse(localStorage.getItem('commodityDetail'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'cus_code':'测试数据'+i,
            'goods_id':'测试数据'+i,
            'goods_code':'测试数据'+i,
            'shp_ming_cheng':'测试数据'+i,
            'jf_shp_lei':'测试数据'+i,
            'shl_dan_wei':'测试数据'+i,
            'cf_wen_ceng':'测试数据'+i,
            'mp_dan_ceng':'测试数据'+i,
            'mp_ceng_gao':'测试数据'+i,
            'bzhi_qi':'测试数据'+i,
            'chl_shl':'测试数据'+i,
            'ti_ji_cm':'测试数据'+i,
            'zhl_kg':'测试数据'+i,
            'chp_shu_xing':'测试数据'+i,
            'baseunit':'测试数据'+i,
            'jizhun_wendu':'测试数据'+i,
            'shp_bian_makh':'测试数据'+i,
            'chailing':'测试数据'+i,
        });
    }
    if(commodityDetail == null || commodityDetail.length == 0) {
        localStorage.setItem('commodityDetail',JSON.stringify(responseList));
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
                rows:commodityDetail,
                total:commodityDetail.length
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
