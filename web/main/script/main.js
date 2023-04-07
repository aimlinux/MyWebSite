//alert('おはよう');
//console.log('おはよう'); 



//ページトップボタン...
jQuery(function() {
    var appear = false;
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
/*
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 700); //0.5秒かけてトップへ戻る
        return false;
    });
*/
});





//仮:お問い合わせが完了したとき
function contact_test() {

    let element = document.getElementById('agree');
    if (element.checked == true) {
        alert('お問い合わせありがとうございます。  参考にさせていただきます。')
    }

    if (element.checked == false) {
        alert('プライバシーポリシーに同意していません。')
    }
}