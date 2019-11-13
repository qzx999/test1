import Mock from 'mockjs';

var list = [];
export const StockList = options =>{
    const Random = Mock.Random;
    list = [];
    for(let i = 0;i<5;i++){
        list.push({
            'id':Random.increment(1),
            'CreatorName':Random.cname(),
            'CreationDate':Random.pick(['2019-05-09','2019-06-15','2019-02-02']),
            'UpdaterName':Random.cname(),
            'Updated':Random.pick(['2019-05-09','2019-06-15','2019-02-02']),
            'CommodityCode':Random.pick(['1','2','3','4']),
            'productName':Random.pick(['面包','衣服','阿萨德','金坷垃']),
            'Quantity':Random.pick(['12','22','33']),
            'NumberOfBasicUnits':Random.pick(['5','4','6']),
            'ProductionDate':Random.pick(['2019-05-09','2019-06-15','2019-02-02']),
            'unit':Random.pick(['袋','箱']),
            'CustomerNode':Random.pick(['22','23','24']),
            'ClientName':Random.cname()
        })
    };
    let response ={
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response);
};
export const StockInquire = options =>{
    let arr = [];
    let CommodityCode = JSON.parse(options.body).CommodityCode;
    let productName = JSON.parse(options.body).productName;
    let CustomerNode = JSON.parse(options.body).CustomerNode;
    let ClientName = JSON.parse(options.body).ClientName;
    list=JSON.parse(localStorage.getItem("stockdate"));
    list.forEach(item=>{
        if(item.CommodityCode.includes(CommodityCode) && item.productName.includes(productName) && item.CustomerNode.includes(CustomerNode) && item.ClientName.includes(ClientName)){
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