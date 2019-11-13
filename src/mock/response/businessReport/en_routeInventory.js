import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const en_routeInventoryAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 5 ; i ++){
        list.push({
            'id':Random.increment(1),
            'kuctype':'测试',
            'order_id':'01',
            'create_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'cus_code':'01010101',
            'zhong_wen_qch':Random.cname(),
            'goods_id':'020202020',
            'shp_ming_cheng':'小大',
            'goods_quaok':'10',
            'shl_dan_wei':'测试',
            'goods_pro_data':Random.date('yyyy-MM-dd HH;mm;ss'),
            'ku_wei_bian_ma':'测试',
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