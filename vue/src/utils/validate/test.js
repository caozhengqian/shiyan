// 检验测试
export function test(value) {
  // if(value.length >2 && value.length <5){
  //     return {isOk:true,msg:"输入正确"}
  // }else{
  //     return {isOk:false,msg:"输入长度2到5"}
  // }
  const reg = /^1[3456789]\d{9}$/
  const re = reg.test(value)
  if (re) { // 校验通过
    return { isOk: true, msg: '输入正确' }
  } else {
    return { isOk: false, msg: '请输入手机号' }
  }
}
