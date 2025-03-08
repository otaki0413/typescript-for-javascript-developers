export {};

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
  name: "otaki",
  age: 25,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "hoge",
  age: 23,
};

type Profile2 = typeof example1;
