import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    let response = {};
    let data = JSON.parse(options.body);
    let outLibraryDetail = JSON.parse(localStorage.getItem('outLibraryDetail'));
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'om_sta':'测试数据'+i,
            'om_notice_id':'测试数据'+i,
            'im_cus_code':'测试数据'+i,
            'ocus_code':'测试数据'+i,
            'ocus_name':'测试数据'+i,
            'om_beizhu':'测试数据'+i,
            'delv_addr':'测试数据'+i,
            'goods_id':'测试数据'+i,
            'goods_name':'测试数据'+i,
            'base_goodscount':'测试数据'+i,
            'goods_unit':'测试数据'+i,
            'sumqua':'测试数据'+i,
        });
    }
    if(outLibraryDetail == null || outLibraryDetail.length == 0) {
        localStorage.setItem('outLibraryDetail',JSON.stringify(responseList));
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
                rows:outLibraryDetail,
                total:outLibraryDetail.length
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
