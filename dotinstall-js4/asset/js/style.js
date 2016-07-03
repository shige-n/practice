
//if文

var s;

/*
条件分岐
if(条件){
 真
}else{
 擬
}
*/

/*
比較演算子
> <
=== ==
!== !=
*/

/*
論理演算子
AND &&
OR ||
NOT !
score > 60 && score < 80
*/

var score = 80;
if (score > 60) {
  console.log("OK!");
}else{
  console.log("NG!");
}

var score = 50;
if (score > 60) {
  console.log("OK!");
} else if (score > 40) {
  console.log("soso");
} else {
  console.log("NG!");
}
