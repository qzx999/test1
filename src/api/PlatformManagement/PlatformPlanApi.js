import axios from '@/libs/api.request.js'

//获取月台计划管理的表格数据接口
export const planList = data => {
    return axios.request({
        method:'post',
        url:'/Platform/planList',
        data:data
    });
};

//月台计划添加表格数据和修改表格数据判断

export const planUpdateAndInsert = data => {

    return data.id ? planUpdate(data) : planInsert(data);
};

//月台计划修改
export const planUpdate = data => {

    return axios.request({
        method:'put',
        url:'/platform/planUpdate',
        data:data
    });
};
//月台计划添加
export const planInsert = data => {
    return axios.request({
        method:'post',
        url:'/platform/planInsert',
        data:data
    });
};

//月台计划删除
export const planRemove = data => {
    return axios.request({
        method:'delete',
        url:'/platform/planRemove',
        data:data
    });
}




