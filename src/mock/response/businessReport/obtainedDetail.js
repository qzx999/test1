import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const obtainedDetailCha=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'create_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'create_name':Random.cname(),
            'order_id':'01',
            'bin_id':'测试',
            'bin_id_to':'3',
            'cus_code':'北大',
            'zhong_wen_qch':'北大单位',
            'goods_code':'希奥利',
            'shp_ming_cheng':'下达的',
            'goods_pro_data':Random.date('yyyy-MM-dd HH;mm;ss'),
            'bzhi_qi':'11',
            'base_unit':'测试',
            'base_goodscount':'11',
            'zhl_kg':'11kg',
            'im_cus_code':'测试',
            'shp_gui_ge':'测试',
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