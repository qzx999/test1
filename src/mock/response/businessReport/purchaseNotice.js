import Mock from 'mockjs';

var list = []
export const PurchaseList = options =>{
    const Random = Mock.Random;
    list = [];
    let PurchaseArr = [];

    for (let i = 0;i<20;i++){
        PurchaseArr.push(`测试${i}`);
    };
    for(let i = 0;i < 10;i++){
        list.push({
            'noticeId':Random.pick(PurchaseArr),
            'cuscode':Random.pick(PurchaseArr),
            'zhongWenQch':Random.pick(PurchaseArr),
            'imSta':Random.pick(PurchaseArr),
            'goodsCode':Random.pick(PurchaseArr),
            'shpmingcheng':Random.pick(PurchaseArr),
            'goodscount':Random.pick(PurchaseArr),
            'goodsqmcount':Random.pick(PurchaseArr),
            'shldanwei':Random.pick(PurchaseArr),
            'goodsfvol':Random.pick(PurchaseArr),
            'goodsweight':Random.pick(PurchaseArr),
            'imcuscode':Random.pick(PurchaseArr),
            'basegoodscount':Random.pick(PurchaseArr),
            'baseunit':Random.pick(PurchaseArr),
            'goodsprddata':Random.pick(PurchaseArr)
        })
    }
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
export const PurchaseInquire = options =>{
    let arr = [];
    let noticeId = JSON.parse(options.body).noticeId;
    let cuscode = JSON.parse(options.body).cuscode;
    let zhongWenQch = JSON.parse(options.body).zhongWenQch;
    let imSta = JSON.parse(options.body).imSta;
    list=JSON.parse(localStorage.getItem("Purdate"));
    list.forEach(item=>{
        if(item.noticeId.includes(noticeId) && item.cuscode.includes(cuscode) && item.zhongWenQch.includes(zhongWenQch) && item.imSta.includes(imSta)){
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
