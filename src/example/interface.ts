interface NameInfo {
  firstname: string;
  lastname: string;
  age?: number;
  [prop: string]: any;
}
function getFullname({ firstname, lastname }: NameInfo) {
  return firstname + lastname;
}

getFullname({
  firstname: "蔡",
  lastname: "杰鲁",
});

// 索引类型 对象所有键值都要符合该类型
interface ObjDic {
  [id: number]: number;
}

const obj1: ObjDic = {
  1: 1,
  2: 2,
};

interface Food {
  vitamin: string;
}
interface Vagetables {
  color: string;
}
// 接口继承
interface Tomato extends Vagetables, Food {
  shape: string;
}
interface Carrot {
  length: number;
}

const tomato: Tomato = {
  color: "red",
  shape: "round",
  vitamin: "B",
};
