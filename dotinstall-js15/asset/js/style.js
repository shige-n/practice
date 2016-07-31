/*
  DOMとは何か
*/

//console.dir はオブジェクトのプロパティを表示するもの
console.dir(window);

//windowの高さ
console.log(window.outerHeight);

//別のURLに飛ばす
// window.location.href = "https://github.com/shige-n/practice";

//window.document -> 今開いているページ
//Jsで操作することで動的にページの一部書き換え、新しい要素追加ができる
//windowオブジェクトにアクセスする場合「window.」は省略可能なので、他ドキュメントでアクセスできる

//documentにアクセスすることができる色々な命令のことを「document object model」
//document object model -> DOM と呼ばれる
//ブラウザによって違うことがあるので注意

//id振ってあるとJsで使いやすい
//getElementByIDでidの該当要素を取得
var e = document.getElementById("msg");
//テキストの書き換え
e.textContent = "hello!";
//スタイルの書き換え
e.style.color = "red";
//クラスを適用させる
e.className = "myStyle";

/*
  新しく要素を作ることも可能
  body要素の下にpを追加、pにテキストを打ち込む

  body
  　p
  　　text
*/

//document.createElementでエレメント(例:greet)を作る
//タグネームを指定(例:p)
var greet = document.createElement("p"),
    //createaTextNodeでテキストを追加
    text = document.createTextNode("hello world");
//bodyに追加 appendChildで子要素に追加 子要素の一番最後追加してくれる
document.body.appendChild(greet).appendChild(text);

///////////////////

//イベントを設定する

document.getElementById("add").addEventListener("click", function() {
  //タグネームを指定(例:p)
  var greet = document.createElement("p"),
      //createaTextNodeでテキストを追加
      text = document.createTextNode("hello world");
  //bodyに追加 appendChildで子要素に追加 子要素の一番最後追加してくれる
  document.body.appendChild(greet).appendChild(text);
})
