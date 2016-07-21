/*
  オブジェクト
  名前と値のペアがグループ化されたもの
*/

var user = {
  email : "test@gmail.com", //ペアをプロパティという
  score : 80,
  //プロパティの値に関数を作ることも可能
  //プロパティ値に関数が来るとメソッド

  greet : function(name) {
    console.log("Hello, " + name);
  }
};
console.log(user["email"]);//↓大カッコを使っても、ドットで繋げてもOK
console.log(user.email);
user.score = 100;
console.log(user);
//引数にTomを入れる
user.greet("Tom");
