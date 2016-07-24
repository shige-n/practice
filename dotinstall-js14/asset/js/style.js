/*
  組み込みオブジェクト
  - String
  - Aray
  - Math
  - Date

  - String
  String グローバルオブジェクトは
  文字列のコンストラクタ※、
  または文字列シーケンス※です。

  ※コンストラクタ -> ブジェクトを作成し、
  初期化する関数オブジェクト (Function オブジェクト)

  ※シーケンス -> 連続（しているもの）、一続き（のもの）
*/

/*
  var s = "tanaka";でも結果は同じ -> 文字列リテラル
  文字列オブジェクトとは別物だが、
  メソッドやプロパティを使うことでJs側で文字列オブジェクトを使いたいと解釈、変換してくれる
*/

//文字列オブジェクト
var s = String("tanaka");
//文字数
console.log(s.length);
//変換
console.log(s.replace("t", "T"));
//○文字目を返す 1文字目から3文字
console.log(s.substr(1,3));

/////////////////

//配列 Arayオブジェクト

var a = new Array(100, 200, 300);
// 文字列の時と同じくリテラルでも同じ結果
// var a = [100, 200, 300];

// 配列に使うと要素の個数
console.log(a.length);

// 要素の追加する命令がいくつかある
// 追加 unshift -> array <- push
// 除去 shift -> array <- pop

//500を追加
a.push(500);
console.log(a);

//途中に追加...splice
//第一引数...どこを追加・削除したいか記述
//第二引数...削除したい要素の数
//それ以降...追加
a.splice(1, 2, 800, 1000);
console.log(a);
