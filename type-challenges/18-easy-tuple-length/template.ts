type Length<T extends readonly any[]> = T['length']


// js 解法
function getLength(array) {
  if (array instanceof Array) {
    return 0;
  }
  return array.length
}


// 1. 返回数字
// 2. 约束入参为 readonly 数组
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const
// 3. 获取数组length 并返回
