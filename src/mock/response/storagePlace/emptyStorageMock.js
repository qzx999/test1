import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let emptyStorage = JSON.parse(localStorage.getItem('emptyStorage'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'bin_store':'测试数据'+i,
            'ku_wei_shu_xing':'测试数据'+i,
            'chp_shu_xing':'测试数据'+i,
            'binid':'测试数据'+i,
            'suo_shu_ke_hu':'测试数据'+i,
            'zui_da_ti_ji':'测试数据'+i,
            'shang_jia_ci_xu':'测试数据'+i,
            'chang':'测试数据'+i,
            'kuan':'测试数据'+i,
            'gao':'测试数据'+i,
            'zui_da_tuo_pan':'测试数据'+i,
            'ting_yong':'测试数据'+i,
            'ku_wei_lei_xing':'测试数据'+i,
        });
    }
    if(emptyStorage == null || emptyStorage.length == 0) {
        localStorage.setItem('emptyStorage',JSON.stringify(responseList));
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
                rows:emptyStorage,
                total:emptyStorage.length
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
