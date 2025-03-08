export {};

type ObjectType = { name: string; age: number };

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: "otaki-san",
  age: 26,
};

let object2: ObjectInterface = {
  name: "hige",
  age: 22,
};
