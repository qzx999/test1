import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const ReturnsReturnsFindAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'opt':'测试数据',
            'imNoticeId':'01',
            'goodsCode':'02',
            'goodsName':Random.pick(['小米','希奥利','委屈']),
            'goodsCount':'3',
            'goodsQmCount':'2',
            'goodsUnit':'北大单位'
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
    console.log(list);
    return Mock.mock(response)
}
export const ReturnsReturnsMoHu=options=>{  //模糊查询
    let arr=[];
    let imNoticeId1=JSON.parse(options.body).imNoticeId;
    let goodsCode1=JSON.parse(options.body).goodsCode;
    let goodsName1=JSON.parse(options.body).goodsName;
    list.forEach(item=>{//遍历数据
        if(item.imNoticeId.includes(imNoticeId1)&&item.goodsCode.includes(goodsCode1)&&item.goodsName.includes(goodsName1)){  //包含name的值
            arr.push(item);//push加载arr里面
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