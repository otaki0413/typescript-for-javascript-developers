export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight" | "height">;
type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, "name" | "weight">;
type MySmallProfile = MyOmit;

// type Person = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// };

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const user: Person = { name: "Alice", age: 30, isAdmin: false };
// const userName = getProperty(user, "name");
