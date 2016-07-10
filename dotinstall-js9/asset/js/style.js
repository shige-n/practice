/*
   関数 = 複数の処理をまとめて名前をつけたもの

   基本的な構文
   function 関数名(引数) {
    処理をいくつでも書ける
  }
*/

function hello() {
  console.log("hello");
}
hello();

/////////

/*
  関数にオプションを与えるのが引数
  似たような処理だけど、ここだけ変えたい...などに便利

  引数はカンマ区切りでいくつでも使える
*/

function hello(name) {
  console.log("hello" + name + "!!");
}
// 実行時に引数用の変数名を与える
hello("Tom");
hello("Bob");

/////////

/*
  関数から返り値をもらいたい時
  retune 返り値
  返り値をもらって演算する時などに必要
*/

function hello(name) {
  return "hello" + name;
}
var greet = hello("Tom");
console.log(greet);

/////////

/*
  関数の中で宣言した変数 = ローカル変数(関数内のみ有効)
  関数の外で宣言した変数 = グローバル変数(関数外でも有効)
*/

/*
  関数もデータ型の為、変数に入れることが可能

  functionの後の関数名(hello)は省略可能
  関数名が無い為、無名関数、匿名関数と呼ばれる
*/

var hello = function(name) { //無名関数、匿名関数ß
  var msg =  "hello" + name; //ローカル変数
  return msg;
};
//↑ここまでが式になるので[;]をつけるのを忘れないよう注意
var greet = hello("Tom");
console.log(greet);
