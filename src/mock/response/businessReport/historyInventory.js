import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const historyInventoryAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'his_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'cus_code':'01',
            'zhong_wen_qch':Random.cname(),
            'ku_wei_bian_ma':'测试',
            'bin_id':'3',
            'goods_id':'北大',
            'shp_ming_cheng':'北大单位',
            'count':'10',
            'base_unit':'下达的',
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