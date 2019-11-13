import Mock from 'mockjs';

var list = [];
export const Generatelist = options =>{
    const Random = Mock.Random;
    list = [];
    for(let i = 0;i<5;i++){
        list.push({
            'lastMove':Random.pick(['2015-12-25']),
            'kuctype':Random.pick(['袋','箱']),
            'kuWeiBianMa':Random.pick(['储位1','储位2']),
            'binId':Random.pick(['托盘1','托盘2']),
            'cusCode':Random.pick(['货主1','货主2']),
            'zhongWenQch':Random.cname(),
            'goodsId':Random.pick(['商品编码1','商品编码2']),
            'goodsQua':Random.pick(['22','23']),
            'shpMingCheng':Random.pick(['名称1','名称2']),
            'goodsProData':Random.pick(['2018-12-05','2019-05-05','2019-02-05']),
            'bzhiQi':Random.pick(['12个月','15个月']),
            'goodsUnit':Random.pick(['单位1','单位2'])
        })
    }
    let response ={
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response);
};
export const GenerateInquire = options =>{
    let arr = [];
    let kuctype = JSON.parse(options.body).kuctype;
    list=JSON.parse(localStorage.getItem("generatedate"));
    list.forEach(item=>{
        if(item.kuctype.includes(kuctype)){
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