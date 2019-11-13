import Mock from 'mockjs';

const Random = Mock.Random;

var responseList = [];

export const getList = options => {
    // 1.声明返回对象
    let response = {};
    // 2.获取参数
    let data = JSON.parse(options.body);
    // 3.获取localStorage中的对应缓存
    let client = JSON.parse(localStorage.getItem('client'));
    // 4.产生数据
    for(let i = 1; i<=15; i++) {
        responseList.push({
            'id':Random.increment(1),
            'zhongWenQch':'测试数据'+i,
            'zhuJiMa':'测试数据'+i,
            'keHuBianMa':'测试数据'+i,
            'xingYeFenLei':'测试数据'+i,
            'diZhi':'测试数据'+i,
            'zhuLianXiRen':'测试数据'+i,
            'dianHua':'测试数据'+i,
            'shouJi':'测试数据'+i,
            'zhuLianXiRen1':'测试数据'+i,
            'dianHua1':'测试数据'+i,
            'emaildiZhi':'测试数据'+i,
            'beiZhu':'测试数据'+i,
        });
    }
    // 5.判断是返回缓存的数据还是新生成的数据
    if(client == null || client.length == 0) {
        localStorage.setItem('client',JSON.stringify(responseList));
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
                rows:client,
                total:client.length
            }
        };
    }
    // 6.返回响应数据
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
