export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("おたき", 26);
console.log(me);
