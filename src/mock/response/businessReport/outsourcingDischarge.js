import Mock from 'mockjs';
var list = [];
export const outsourcingDischargeList = options =>{
    const Random = Mock.Random;
    list = [];
    let outListArr = [];
    for(let i = 0;i<20;i++){
        outListArr.push(`测试${i}`)
    };
    for(let i = 0;i<10;i++){
        list.push({
            'feiyong':Random.pick(outListArr),
            'createname':Random.pick(outListArr),
            'createdate':Random.pick(outListArr),
            'imnoticeid':Random.pick(outListArr),
            'goodsid':Random.pick(outListArr),
            'shpmingcheng':Random.pick(outListArr),
            'qmcount':Random.pick(outListArr),
            'grcount':Random.pick(outListArr),
            'grcountfy':Random.pick(outListArr),
            'danjia':Random.pick(outListArr)
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
export const outsourcingDischargeInquire = options =>{
    let arr = [];
    let createname = JSON.parse(options.body).createname;
    let imnoticeid = JSON.parse(options.body).imnoticeid;
    let goodsid = JSON.parse(options.body).goodsid;
    list=JSON.parse(localStorage.getItem("Unloadingdate"));
    list.forEach(item=>{
        if(item.createname.includes(createname) && item.imnoticeid.includes(imnoticeid) && item.goodsid.includes(goodsid)){
            arr.push(item);
        }
    });
    let response = {
        code:2000,
        msg:'请求成功',
        data:{
            rows:arr,
            total:arr.length
        }
    };
    return Mock.mock(response);
};