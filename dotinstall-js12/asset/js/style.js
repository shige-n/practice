/*
  配列 : グループ化されたデータ
*/

//var score_1 = 100, score_2 = 200;
//↓ score の中に全て入れることができる
var score = [100, 300, 500, "tanaka"];
//0から始まる / 2番目を400に変更
score[2] = 400;
console.log(score);

//配列の中に配列を入れることも可能
var m = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(m[1][1]);//5
