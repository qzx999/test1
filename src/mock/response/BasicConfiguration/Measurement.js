import Mock from 'mockjs';

var list=[];
const  Random=Mock.Random;
export const MeasurementAll=options=>{
    list=[];
    for(let i = 0 ; i < 20 ; i ++){
        list.push({
            'id':Random.increment(1),
            'unit_code':'代码',
            'unit_zh_name':'天鹏公司',
            'unit_en_name':'Fly'
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
}

export const MeasurementMoHu=options=>{  //模糊查询
    let arr=[];
    let unit_code1 = JSON.parse(options.body).unit_code;
    let unit_zh_name1 = JSON.parse(options.body).unit_zh_name;
    let unit_en_name1 = JSON.parse(options.body).unit_en_name;
    list=JSON.parse(localStorage.getItem("Measurement"));
    list.forEach(item=>{
        console.log(item)
        if(item.unit_code.includes(unit_code1)&&item.unit_zh_name.includes(unit_zh_name1)&&item.unit_en_name.includes(unit_en_name1)){
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
export const ReturnAdd1=options=>{  //添加
    let response={};
    try {
        response={
            code:2000,
            msg:'添加成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'添加失败'
        }
    }
    return Mock.mock(response);
}

export const ReturnUpdate=options=>{  //修改
    let response={};
    try {
        response={
            code:2000,
            msg:'修改成功'
        }
    }catch (e) {
        response={
            code:2001,
            msg:'修改失败'
        }
    }
    return Mock.mock(response);
}
export const ShanChu=options=>{
    let response={}; //声明变量
    try {
        let list=JSON.parse(localStorage.getItem('Measurement')); //字符串
        let id =JSON.parse(options.body).id;  //转换成对象
        list.forEach(item=>{  //遍历
            if(item.id==id){
                list.pop(item);
            }
        });
        localStorage.setItem("Measurement",JSON.stringify(list));///重新赋值standard的数据   数组
        response={code:2000,msg:'删除成功'};
    }catch (e) {
        response={code:2001,msg:'删除失败,失败原因是:${e}'};
    }
    return Mock.mock(response);
}