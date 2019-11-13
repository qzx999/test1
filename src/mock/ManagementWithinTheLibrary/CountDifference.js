import Mock from 'mockjs';
var list = [];

export const CountList = options =>{
  const Random = Mock.Random;
  list = [];
  let Countarr = [];
  for(let i = 0;i<10;i++){
      Countarr.push(`测试数据${i}`);
  };
  for(let i = 0;i<5;i++){
      list.push({
          'updateName':Random.pick(Countarr),
          'updateDate':Random.pick(Countarr),
          'binId':Random.pick(Countarr),
          'tinId':Random.pick(Countarr),
          'goodsId':Random.pick(Countarr),
          'goodsName':Random.pick(Countarr),
          'goodsQua':Random.pick(Countarr),
          'goodsUnit':Random.pick(Countarr),
          'goodsProData':Random.pick(Countarr),
          'sttQua':Random.pick(Countarr),
          'cusName':Random.pick(Countarr),
          'cusCode':Random.pick(Countarr),
          'sttSta':Random.pick(Countarr)
      })
  }
    let response = {
        code:2000,
        msg:'请求成功',
        data:{
            rows:list,
            total:list.length
        }
    };
    return Mock.mock(response);
};