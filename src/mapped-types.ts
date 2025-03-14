export {};

type Profile = {
  name: string;
  age: number;
};

// 自作のPartial
// type PartialProfile = { [P in keyof Profile]?: Profile[P] };
// type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
