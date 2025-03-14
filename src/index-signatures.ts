export {};

type Profile = {
  name: string;
  isUnderTwenty: boolean;
  [index: string]: string | number | boolean;
};

let profile: Profile = { name: "Otaki", isUnderTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = "Kei";
profile.age = 26;
profile.nationality = "Japan";
