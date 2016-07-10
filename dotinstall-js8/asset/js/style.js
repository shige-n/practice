/*
  aleart OK
  config OK(true) / キャンセル(false)
  prompt 入力されたものが返る / 無入力、キャンセルだとnull
*/

alert("hello!");

///////////////

var answer = confirm("are you sure?");
console.log(answer);
/*
  ↓実際の使い方
  例えば...
  if (confirm("本当に削除しますか？")){
    // 削除処理
  }
*/

///////////////

//第二引数に初期値を入れておくことも可能
var name = prompt("お名前は？","名無しさん");
console.log(name);
