export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "おたき";
  static lastName: string = "けい";

  work() {
    return `Hey guys! This is ${Me.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
