// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T extends [] ? never : T[0];

// js 解法
function first(arrs) {
  if (arrs.length === 0) {
    return 'never';
  }
  return arrs[0];
}

// 1. 判断空数组返回 never
// 2. 取数组第一个元素
// generic-constraints 约束条件关键字 extends
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
