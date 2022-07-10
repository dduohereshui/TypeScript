// 最基本的函数
type IFn = (a: number, b: number) => number;
const sum: IFn = (num1, num2) => {
  return num1 + num2;
};

// 函数重载
function handleData(msg: number, mag1: number): number;
function handleData(msg: string, mag1: string): string;
// 下面是函数的真实实现
function handleData(
  msg1: number | string,
  msg2: number | string
): string | number {
  if (typeof msg1 === "number" && typeof msg2 === "number") {
    return msg1 + msg2;
  } else {
    return `${msg1}${msg2}`;
  }
}
