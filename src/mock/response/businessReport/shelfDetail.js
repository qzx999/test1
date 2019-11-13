import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const shelfDetailAll1=options=>{  //查看
    list=[];
    for(let i = 0 ; i < 10 ; i ++){
        list.push({
            'id':Random.increment(1),
            'create_date':Random.date('yyyy-MM-dd HH;mm;ss'),
            'create_name':Random.cname(),
            'order_id':'01',
            'ku_wei_bian_ma':'测试',
            'bin_id':'3',
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
    console.log(list);
    return Mock.mock(response)
};
export const shelfDetailMoHu=options=>{  //模糊查询
    let arr=[];
    let order_id1 = JSON.parse(options.body).order_id;
    let ku_wei_bian_ma1 = JSON.parse(options.body).ku_wei_bian_ma;
    let bin_id1 = JSON.parse(options.body).bin_id;
    let cus_code1 = JSON.parse(options.body).cus_code;
    let goods_code1 = JSON.parse(options.body).goods_code;
    let im_cus_code1 = JSON.parse(options.body).im_cus_code;
    list=JSON.parse(localStorage.getItem("shelfDetail"));
    list.forEach(item=>{
        console.log(item)
        if(item.order_id.includes(order_id1)&&item.ku_wei_bian_ma.includes(ku_wei_bian_ma1)&&item.bin_id.includes(bin_id1)&&item.cus_code.includes(cus_code1)&&item.goods_code.includes(goods_code1)&&item.im_cus_code.includes(im_cus_code1)){
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
}
