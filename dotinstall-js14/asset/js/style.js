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

/////////////////

/*
Mathオブジェクト
Newする必要は無い
数学的値を出す時に使用
*/

//π 円周率
console.log(Math.PI);

//天井という意味 実数を渡すと切り上げ -> 6
console.log(Math.ceil(5.3));

//床という意味 実数を渡すと切り捨て -> ５
console.log(Math.floor(5.3));

//四捨五入 -> ５
console.log(Math.round(5.3));

//0~1未満の実数を呼び出す時に生成
console.log(Math.random());

/////////////////

//Dateオブジェクト

//現在時刻のオブジェクト取得
var d = new Date();

//特定位置付けを取得したい時は、年月日を記入
//注意 -> Jsでは月が０から始まる 2月なら1になる
//2月11日 10時20分30秒
// var d = new Date(2014, 1, 11, 10, 20, 30);

console.log(d.getFullYear());//年取得
console.log(d.getMonth());//月取得
console.log(d.getTime());//基準日からの経過ミリ秒
