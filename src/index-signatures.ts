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

let obj: Record<string, string | number | boolean> = {};

obj.a = "A";
obj.b = "B";
obj.c = 1;
obj.d = true;
