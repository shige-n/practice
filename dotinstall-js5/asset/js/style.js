/*
真偽値 / 三項演算子
  文字列:空文字以外 → true
  数値　:0かNoN以外 → true

  object: null以外 → true
  undefind, null → false
*/

//データによって上記のような判定をしている

if (x) {
  //処理
}
// ↓同じ意味(空文字じゃなかったら...)
if (x !== '') {
  //処理
}

//条件が真だったらb 擬だったらc
var a, b, c;
if (条件) {
  a = b;
} else {
  a = c;
}

// ↓同じ意味

a = (条件) ? b : c;

//////////////////

var max, x, y;
max = ( x > y ) ? x : y;
