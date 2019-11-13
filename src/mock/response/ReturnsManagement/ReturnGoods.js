import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const ReturnGoodsFindAll=options=>{
    list=[];
    for(let i = 0 ; i < 5 ; i ++){
        list.push({
            'id':Random.increment(1),
            'createName':'测试数据',
            'createDate':'2001-02-02',
            'noticeId':'测试数据',
            'cusCode':'0101010',
            'imData':Random.date('yyyy-MM-dd HH;mm;ss'),
            'imCusCode':'测试数据',
            'imCarNo':'测试数据',
            'imCarDri':'测试数据',
            'imCarMobile':'12912492843',
            'orderTypeCode':'测试数据',
            'platformCode':'测试数据',
            'imBeizhu':'希奥利',
            'imSta':'已审核',
        });
    };
    let response={
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response)
}
export const ReturnGoodsMoHu=options=>{  //模糊查询
    let arr=[];
    let noticeId1 = JSON.parse(options.body).noticeId;
    console.log(noticeId1);
    let imCusCode1 = JSON.parse(options.body).imCusCode;
    let imCarNo1 = JSON.parse(options.body).imCarNo;
    let imCarDri1 = JSON.parse(options.body).imCarDri;
    let imCarMobile1 = JSON.parse(options.body).imCarMobile;
    let orderTypeCode1 = JSON.parse(options.body).orderTypeCode;
    let platformCode1 = JSON.parse(options.body).platformCode;
    let imSta1 = JSON.parse(options.body).imSta;
    list=JSON.parse(localStorage.getItem("ReturnGoods"));
    list.forEach(item=>{
        console.log(item)
        if(item.noticeId.includes(noticeId1)&&item.imCusCode.includes(imCusCode1)&&item.imCarNo.includes(imCarNo1)&& item.imCarDri.includes(imCarDri1)&& item.imCarMobile.includes(imCarMobile1)&& item.orderTypeCode.includes(orderTypeCode1)&&item.platformCode.includes(platformCode1)&&item.imSta.includes(imSta1)){
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
}
export const ReturnGoodsXgaiData=options=>{  //修改
    let response={};
    try {
        response={
          code:2000,
          msg:'修改成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'修改失败'
        }
    }
    return Mock.mock(response);
}
export const ReturnGoodsTian=options=>{  //添加
    let response={};
    try {
        response={
            code:2000,
            msg:'添加成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'添加失败'
        }
    }
    return Mock.mock(response);
}