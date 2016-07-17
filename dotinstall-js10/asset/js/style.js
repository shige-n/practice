/*
  即時関数
*/

(function hello() {
  console.log("hello");
})();

////////////////

(function hello(name) {
  console.log("hello" + name);
})(" Tom");

//呼び出してすぐに実行されるので、省略可能
//構文としては少し違うけれど、こう書く人もいる
(function(name) {
  console.log("hello" + name);
})(" Tom");

////////////////

//即時関数で囲えば、変数を安全に使える
(function(){
  var x = 10;
      y = 20;
  console.log(x+y);
})();
