import Mock from 'mockjs';
var list = [];
export const outsourcingLoadingList = options =>{
    const Random = Mock.Random;
    list = [];
    let LoadingArr = [];
    for(let i = 0;i<20;i++){
        LoadingArr.push(`测试${i}`)
    };
    for(let i = 0;i<10;i++){
        list.push({
            'feiyong':Random.pick(LoadingArr),
            'createname':Random.pick(LoadingArr),
            'createdate':Random.pick(LoadingArr),
            'orderid':Random.pick(LoadingArr),
            'goodsid':Random.pick(LoadingArr),
            'shpmingcheng':Random.pick(LoadingArr),
            'qmcount':Random.pick(LoadingArr),
            'grcount':Random.pick(LoadingArr),
            'grcountfy':Random.pick(LoadingArr),
            'danjia':Random.pick(LoadingArr)
        })
    };
    let response = {
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response);
};
// export const outsourcingLoadingInquire = options =>{
//     let arr = [];
//     let createname = JSON.parse(options.body).createname;
//     let imnoticeid = JSON.parse(options.body).imnoticeid;
//     let goodsid = JSON.parse(options.body).goodsid;
//     list=JSON.parse(localStorage.getItem("Unloadingdate"));
//     list.forEach(item=>{
//         if(item.createname.includes(createname) && item.imnoticeid.includes(imnoticeid) && item.goodsid.includes(goodsid)){
//             arr.push(item);
//         }
//     });
//     let response = {
//         code:2000,
//         msg:'请求成功',
//         data:{
//             rows:arr,
//             total:arr.length
//         }
//     };
//     return Mock.mock(response);
// };