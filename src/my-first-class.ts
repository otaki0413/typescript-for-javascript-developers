export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person("Taro", 25);
console.log(taro);
console.log(taro.profile());

// let hanako = new Person();
