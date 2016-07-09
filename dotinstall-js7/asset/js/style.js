/*
ループ処理
while文
do ...while
*/

var i = 0;
while ( i < 10 ){
  console.log(i);
  i++;
}

/*
↑
条件判定が先か後かの違い
条件が真でなかった場合に上だと実行されない
下だと後判定の為、一度は実行される
↓
*/

var i = 0;
do {
  console.log(i);
  i++;
} while ( i < 10 );

//////////////////////////////

/*
ループ処理
for文
*/

// break ループ処理を抜ける
for ( var i = 0; i < 10; i++ ) {
  if ( i === 5 ) {
    break;
  }
  console.log(i);
}

// continue ループ処理を1回スキップする
for ( var i = 0; i < 10; i++ ) {
  if ( i === 5 ) {
    continue;
  }
  console.log(i);
}
