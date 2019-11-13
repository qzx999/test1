import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let delvNotShelf = JSON.parse(localStorage.getItem('delvNotShelf'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'kucunsta':'测试数据'+i,
            'bin_id':'测试数据'+i,
            'tin_id':'测试数据'+i,
            'cus_code':'测试数据'+i,
            'zhong_wen_qch':'测试数据'+i,
            'goods_id':'测试数据'+i,
            'shp_ming_cheng':'测试数据'+i,
            'qm_ok_quat':'测试数据'+i,
            'shl_dan_wei':'测试数据'+i,
            'pro_data':'测试数据'+i,
            'create_date':'测试数据'+i,
            'bzhi_qi':'测试数据'+i,
        });
    }
    if(delvNotShelf == null || delvNotShelf.length == 0) {
        localStorage.setItem('delvNotShelf',JSON.stringify(responseList));
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
                rows:delvNotShelf,
                total:delvNotShelf.length
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


