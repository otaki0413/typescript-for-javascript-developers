export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Otaki",
  age: 26,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: "hidetoshi",
  age: 27,
};

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
