import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const billingInventoryAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 5 ; i ++){
        list.push({
            'id':Random.increment(1),
            'his_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'cus_code':'测试',
            'zhong_wen_qch':Random.cname(),
            'ku_wei_bian_ma':'020202020',
            'bin_id':'小大',
            'goods_id':'10',
            'shp_ming_cheng':'测试',
            'count':'10',
            'base_unit':'测试',
            'zhl_kg':'10Kg',
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