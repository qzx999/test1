import Mock from 'mockjs';

var list =[];
export const AbnorLits = options =>{
  const Random = Mock.Random;
  list = [];
  let AbnorArr = [];
  for (let i = 0;i<20;i++){
      AbnorArr.push(`测试${i}`)
  } ;
  for (let i = 0;i<10;i++){
      list.push({
          'omnoticeid':Random.pick(AbnorArr),
          'cuscode':Random.pick(AbnorArr),
          'zhongwenqch':Random.pick(AbnorArr),
          'omsta':Random.pick(AbnorArr),
          'goodsid':Random.pick(AbnorArr),
          'shpmingcheng':Random.pick(AbnorArr),
          'goodsqua':Random.pick(AbnorArr),
          'goodsquaok':Random.pick(AbnorArr),
          'baseunit':Random.pick(AbnorArr)
      })
  };
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
export const AbnorInquire = options =>{
    let arr = [];
    let omnoticeid = JSON.parse(options.body).omnoticeid;
    let cuscode = JSON.parse(options.body).cuscode;
    let zhongwenqch = JSON.parse(options.body).zhongwenqch;
    let omsta = JSON.parse(options.body).omsta;
    list=JSON.parse(localStorage.getItem("Abnordate"));
    list.forEach(item=>{
        if(item.omnoticeid.includes(omnoticeid) && item.cuscode.includes(cuscode) && item.zhongwenqch.includes(zhongwenqch) && item.omsta.includes(omsta)){
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