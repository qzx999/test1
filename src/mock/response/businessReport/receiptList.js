import Mock from 'mockjs';
var list = [];
export const ReceiptList = options =>{
    const Random = Mock.Random;
    list = [];
    let ReceiptArr = [];
    for(let i = 0;i<20;i++){
        ReceiptArr.push(`测试${i}`)
    };
    for(let i = 0;i<10;i++){
        list.push({
            'createName':Random.pick(ReceiptArr),
            'createDate':Random.pick(ReceiptArr),
            'wmNoticeId':Random.pick(ReceiptArr),
            'beizhu':Random.pick(ReceiptArr),
            'cusCode':Random.pick(ReceiptArr),
            'hdData':Random.pick(ReceiptArr)
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
export const ReceiptInquire = options =>{
    let arr = [];
    let wmNoticeId = JSON.parse(options.body).wmNoticeId;
    let beizhu = JSON.parse(options.body).beizhu;
    let cusCode = JSON.parse(options.body).cusCode;
    list=JSON.parse(localStorage.getItem("Recedate"));
    list.forEach(item=>{
        if(item.wmNoticeId.includes(wmNoticeId) && item.beizhu.includes(beizhu) && item.cusCode.includes(cusCode)){
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