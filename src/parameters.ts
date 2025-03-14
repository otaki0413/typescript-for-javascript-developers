export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("otaki", 26);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ["Gloria", 40];
debugProfile(...profile);
