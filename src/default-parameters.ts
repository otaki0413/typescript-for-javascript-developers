export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));

// デフォルト引数の場合
console.log(nextYearSalary(1000));
