// boolean
let bool: boolean = false;
// bool = 1 报错

// number
let num: number = 123;

num = 0b1111011;
num = 0o173;
num = 0x7b;

// 数组
const arr: number[] = [1, 2, 3];

const arr1: Array<number> = [1, 2, 3];

// 数组中有多种类型
const arr2: (string | number | boolean)[] = [1, "2", true];

// 元组 tuple
const arr3: [number, boolean, string] = [1, true, "h"];

// 类型断言

function getLength(val: number | string): number {
  if ((<string>val).length) {
    return (val as string).length;
  } else {
    return val.toString().length;
  }
}

console.log(getLength(123));
