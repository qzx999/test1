import Mock from 'mockjs';
var list = [];
export const orderlist = options =>{
    const Random = Mock.Random;
    list = [];
    for(let i = 0;i < 5;i++ ){
        list.push({
            'id':Random.increment(1),
            'CreatorName':Random.cname(),
            'CreationTime':Random.pick(['2019-05-09','2019-06-15','2019-02-02']),
            'NoticeNumber':Random.pick(['通知单号1','通知单号2','通知单号3']),
            'CustomerCode':Random.pick(['22','23','24','25']),
            'ExpectedArrivalTime':Random.pick(['2019-05-14','2019-06-20','2019-02-05']),
            'CustomerOrderNumber':Random.pick(['321564864856','468974131323','15648964131']),
            'CarNumber':Random.pick(['3355','5566','6688']),
            'driver':Random.pick(['小飞','小明','小李']),
            'DriverPhone':Random.pick(['13095954569','15832006780','13832669988']),
            'OrderType':Random.pick(0,1),
            'Platform':Random.pick(['邯郸市','石家庄市','北京市']),
            'Remarks':Random.pick(['易碎物品','私人物品','呀哈雅黑'])
        })
    };
    let response = {
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    }
    return Mock.mock(response);
};
export const YueKuInquire = options =>{
    let arr = [];
    let NoticeNumber = JSON.parse(options.body).NoticeNumber;
    let CustomerOrderNumber = JSON.parse(options.body).CustomerOrderNumber;
    let driver = JSON.parse(options.body).driver;
    let DriverPhone = JSON.parse(options.body).DriverPhone;
    list=JSON.parse(localStorage.getItem("yuekudate"));
    list.forEach(item=>{
        if(item.DriverPhone.includes(DriverPhone) && item.NoticeNumber.includes(NoticeNumber) && item.CustomerOrderNumber.includes(CustomerOrderNumber) && item.driver.includes(driver)){
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
export const seve = options =>{
  let response = {};
  try {
      response = {code:2000,msg:'添加成功'}
  }catch (e) {
      response = {code:2001,msg:'添加失败'}
  }
  return Mock.mock(response)
};
export const update = options =>{
    let response = {};
    try {
        response = {code:2000,msg:'修改成功'}
    }catch (e) {
        response = {code:2001,msg:'修改失败'}
    }
    return Mock.mock(response)
};
export const YueKuDelete = options =>{
    let response = {};
    try {
        response = {code:2000,msg:'删除成功'}
    }catch (e) {
        response = {code:2001,msg:'删除失败'}
    }
    return Mock.mock(response)
};