export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum = (...values: number[]): number => {
  console.log(values);
  return 100;
};

sum(1, 2, 3, 4, 5);

[1, 2, 3, 4].reduce(reducer);
