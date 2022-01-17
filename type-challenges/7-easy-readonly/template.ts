type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

function readonly(obj) {
  const ret = {};

  for (const key in obj) {
    ret[`readonly ${key}`] = obj[key];
  }

  return ret;
}

// 1.返回对象
// 2.遍历
// 3.添加readonly
// 4.lookup 获取对象keys，关键字keyof
