// 索引类型
// function plus <T>(obj:T, keys: Array<keyof T>): Array<T[keyof T]> {
//   console.log(keys.map(v => obj[v]))
//   return keys.map(v => obj[v])
// }
// 等价于
// function plus <T, K extends keyof T>(obj:T, keys: Array<K>): Array<T[K]> {
//   console.log(keys.map(v => obj[v]))
//   return keys.map(v => obj[v])
// }

// plus({name: 'zch', age: 15, xx: 123}, ['name', 'age'])

// let a:String = new String('aaa')
// let b:String = 'bbb' // ts容错了
// let c:string = 'ddd'
// var d:string = new String("ddd")

// readonly
interface Person1 {
  name: String,
  age: Number,
}

let p1:Person1 = {name:'name1', age:12}

interface Person2 {
  name: string,
  age: number,
}

let p2:Person2 = {name:'name2', age:12}

console.log(p1)
console.log(p2)