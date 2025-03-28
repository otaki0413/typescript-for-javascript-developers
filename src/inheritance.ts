export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(public name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());
