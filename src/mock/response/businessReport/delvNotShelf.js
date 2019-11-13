import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const delvNotShelfAll=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'kucunsta':'01',
            'bin_id':Random.cname(),
            'tin_id':'测试',
            'cus_code':'3',
            'zhong_wen_qch':'北大',
            'goods_id':'北大单位',
            'shp_ming_cheng':'测试',
            'qm_ok_quat':'10',
            'shl_dan_wei':'测试',
            'pro_data':Random.date('yyyy-MM-dd HH;mm;ss'),
            'create_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'datagrid-cell':'30',
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