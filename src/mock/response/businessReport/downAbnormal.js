import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const downAbnormalAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'create_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'create_name':Random.cname(),
            'update_name':'测试',
            'ku_wei_bian_ma':'测试',
            'bin_id':'北大',
            'bin_id_to':'10',
            'cus_code':'测试',
            'zhong_wen_qch':'下达的',
            'goods_code':'测试',
            'shp_ming_cheng':'01010101010',
            'goods_code':'测试',
            'goods_code':'测试',
            'goods_pro_data':Random.date('yyyy-MM-dd HH;mm;ss'),
            'base_unit':'测试',
            'goods_qua':'100',
            'goods_quaok':'100',
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