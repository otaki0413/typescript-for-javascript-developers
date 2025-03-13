export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  inonazun(): void;
}
interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {
  inonazun(): void {
    console.log("inonazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.inonazun();
jiro.kougeki();
