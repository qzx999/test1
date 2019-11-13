import Mock from 'mockjs';
var list = [];
export const GoodsList = options =>{
    const Random = Mock.Random;
    list = [];
    let GoodsArr = [];
    for(let i = 0;i<20;i++){
        GoodsArr.push(`测试${i}`)
    };
    for(let i = 0;i<10;i++){
        list.push({
            'kuweibianma':Random.pick(GoodsArr),
            'binid':Random.pick(GoodsArr),
            'cuscode':Random.pick(GoodsArr),
            'zhongwenqch':Random.pick(GoodsArr),
            'goodsid':Random.pick(GoodsArr),
            'shpmingcheng':Random.pick(GoodsArr),
            'basegoodscount':Random.pick(GoodsArr),
            'baseunit':Random.pick(GoodsArr),
            'goodsprodata':Random.pick(GoodsArr),
            'bzhiqi':Random.pick(GoodsArr),
            'kuctype':Random.pick(GoodsArr),
            'dqr':Random.pick(GoodsArr),
            'kuweileixing':Random.pick(GoodsArr),
            'shpguige':Random.pick(GoodsArr),
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
export const GoodsInquire = options =>{
    let arr = [];
    let kuweibianma = JSON.parse(options.body).kuweibianma;
    let binid = JSON.parse(options.body).binid;
    let cuscode = JSON.parse(options.body).cuscode;
    let zhongwenqch = JSON.parse(options.body).zhongwenqch;
    list=JSON.parse(localStorage.getItem("Abnordate"));
    list.forEach(item=>{
        if(item.kuweibianma.includes(kuweibianma) && item.binid.includes(binid) && item.cuscode.includes(cuscode) && item.zhongwenqch.includes(zhongwenqch)){
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