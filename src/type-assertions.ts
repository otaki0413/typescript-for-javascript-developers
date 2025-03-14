export {};

let name: any = "Otaki";

// 推奨
let length = (name as string).length;

// 非推奨
// let length = (<string>name).length;
// length = "foo";

// let length = (name as string).length;
