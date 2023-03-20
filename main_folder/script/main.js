alert('おはようみあ');
//console.log('おはようみあ'); 

const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  alert("ok!"); //コンソール画面でokというメッセージが出る

});