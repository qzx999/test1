import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const vp_warningAll1=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'kuctype':'0101010010',
            'shpBianmakh':'02020202020',
            'shpMingCheng':'测试',
            'baseGoodscount':'100',
            'baseUnit':'北大单位',
            'cusCode':'0303030303030',
            'zhongWenQch':'下达的',
            'goodsProData':Random.date('yyyy-MM-dd HH;mm;ss'),
            'bzhiQi':'30天',
            'dqr':Random.date('yyyy-MM-dd HH;mm;ss'),
            'resDate':'30',
            'guoqiBili':'1:2'
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
};