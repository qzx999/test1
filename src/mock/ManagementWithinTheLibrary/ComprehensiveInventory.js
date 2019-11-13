import Mock from 'mockjs';
var list = [];

export const CompreList = options =>{
  const Random = Mock.Random;
  list = [];
  let ComperArr = [];
  for(let i = 0;i<10;i++){
      ComperArr.push(`测试${i}`);
  };
  for(let i = 0;i<5;i++){
      list.push({
          'lastMove':Random.pick(ComperArr),
          'kuctype':Random.pick(ComperArr),
          'kuWeiBianMa':Random.pick(ComperArr),
          'binId':Random.pick(ComperArr),
          'cusCode':Random.pick(ComperArr),
          'zhongWenQch':Random.pick(ComperArr),
          'goodsId':Random.pick(ComperArr),
          'goodsQua':Random.pick(ComperArr),
          'shpMingCheng':Random.pick(ComperArr),
          'goodsProData':Random.pick(ComperArr),
          'bzhiQi':Random.pick(ComperArr),
          'goodsUnit':Random.pick(ComperArr),
          'sttSta':Random.pick(ComperArr)
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