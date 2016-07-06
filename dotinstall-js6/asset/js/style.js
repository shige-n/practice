/*
  条件分岐
  switch
  1回で何通りにも分岐させる条件分岐
  breakは、switch文を抜け出す命令文
*/

var signal = "pink";
switch (signal) {
  case "red" :
    console.log("stop!");
    break;
  //続けても書ける
  case "green" :
  case "blue" :
    console.log("go!");
    break;
  case "yellow" :
    console.log("slow down!");
    break;
  //caseに無い場合
  default:
    console.log("wrong signal");
    break;
}

//曜日取得
var today = new Date();
var week  = today.getDay();

//条件分岐
switch (week) {
  case 0: document.write("今日は日曜日"); break;
  case 1: document.write("今日は月曜日"); break;
  case 2: document.write("今日は火曜日"); break;
  case 3: document.write("今日は水曜日"); break;
  case 4: document.write("今日は木曜日"); break;
  case 5: document.write("今日は金曜日"); break;
  default : document.write("今日は土曜日"); break;
}
