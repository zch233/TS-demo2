// 索引类型
// function plus <T>(obj:T, keys: Array<keyof T>): Array<T[keyof T]> {
//   console.log(keys.map(v => obj[v]))
//   return keys.map(v => obj[v])
// }
// 等价于
function plus <T, K extends keyof T>(obj:T, keys: Array<K>): Array<T[K]> {
  console.log(keys.map(v => obj[v]))
  return keys.map(v => obj[v])
}

plus({name: 'zch', age: 15, xx: 123}, ['name', 'age'])