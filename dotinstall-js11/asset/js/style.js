/*
  タイマー処理
     setInterval 一定時間ごとにある処理を繰り返す
     前の処理が終わったかは考えずに次の処理を行う
     ↓
     処理が重いとブラウザがクラッシュしてしまう

     setTimeout  一定時間後にある処理を1回実行
     前の処理が終わったか考慮する
     ↓
     繰り返し処理には、こちらを使うことが多い
*/

var i = 0;
function show() {
  console.log(i++);
}
//setIntervalには関数が必要
//ここでしか使わ無いなら無名関数でOK
setInterval(function() {
  show();
}, 1000); //１秒ごとに処理を繰り返す

setTimeout(function() {
  show();
}, 1000); //１秒ごとに処理を1回実行

//////////////

//setTimeoutで繰り返し処理を行うには…
var i = 0;
function show() {
  console.log(i++);
  setTimeout(function() {
    show();
  }, 1000);
}show();//最初の1回を呼び出す

//////////////

//setTimeoutで繰り返し処理を止める
var i = 0;
function show() {
  console.log(i++);
  var tid = setTimeout(function() {
    show();
  }, 1000);
  if (i > 3){
    clearTimeout(tid);
  }
}show();
