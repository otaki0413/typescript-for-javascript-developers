export {};

// オーバーライドシグネチャ（異なる型の引数を受け取り、異なる型の値を返す関数）
function double(value: number): number;
function double(value: string): string;

// 実装部分（両方のシグネチャに対応できるようにany型で対応）
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

// 型制約がかかっている理由:
// TypeScriptのオーバーロード機能を使って、関数が異なる型の引数を受け取ることができるようにしています。
// これにより、引数が数値の場合と文字列の場合で異なる処理を行うことができます。
// 例えば、数値の場合は2倍にし、文字列の場合は文字列を2回繰り返します。

console.log(double(100)); // 200
console.log(double("GO!")); // "GO!GO!"
console.log(double(false)); // コンパイルエラー: 型 'boolean' の引数を型 'number' または 'string' のパラメーターに割り当てることはできません
