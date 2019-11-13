import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const ReturnReservationFindCha=options=>{
    list=[];
    for(let i = 0 ; i < 5 ; i ++){
        list.push({
            'id':Random.increment(1),
            'createName':'测试',
            'createDate':Random.date('yyyy-MM-dd HH;mm;ss'),
            'imNoticeId':'01',
            'imCusCode':'02',
            'goodsId':'01',
            'goodsName':'测试',
            'imQuat':'01',
            'qmOkQuat':'01',
            'proData':Random.date('yyyy-MM-dd HH;mm;ss'),
            'tinId':'测试',
            'goodsUnit':'北京',
            'binId':'100G',
            'tinTj':'01',
            'tinZhl':'100',
            'baseUnit':'石家庄',
            'baseGoodscount':'100',
            'cusCode':'大瓦达'
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

export const ReturnReservationMoHuCha=options=>{  //模糊查询
    let arr=[];
    let imNoticeId1 = JSON.parse(options.body).imNoticeId;
    let imCusCode1 = JSON.parse(options.body).imCusCode;
    let goodsId1 = JSON.parse(options.body).goodsId;
    let goodsName1 = JSON.parse(options.body).goodsName;
    let tinId1 = JSON.parse(options.body).tinId;
    let binId1 = JSON.parse(options.body).binId;
    let cusCode1 = JSON.parse(options.body).cusCode;
    list=JSON.parse(localStorage.getItem("ReturnReservation"));
    list.forEach(item=>{
        console.log(item)
        if(item.imNoticeId.includes(imNoticeId1)&&item.imCusCode.includes(imCusCode1)&&item.goodsId.includes(goodsId1)&& item.goodsName.includes(goodsName1)&& item.tinId.includes(tinId1)&& item.binId.includes(binId1)&&item.cusCode.includes(cusCode1)){
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
export const ReturnUpdate=options=>{  //修改
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
export const ReturnAdd1=options=>{  //添加
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