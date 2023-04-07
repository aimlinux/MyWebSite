//alert('おはよう');
//console.log('おはよう'); 



//ページトップボタン...
jQuery(function() {
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

    let name = document.getElementById('form_item_name');
    let email = document.getElementById('form_item_email');
    let body = document.getElementById('form_item_body');
    let element = document.getElementById('agree');
    
    if (name.value == 0) {
        name.value = '名無し';
    };

    if (element.checked == true) {
        alert(name.value + 'さん！！  お問い合わせありがとうございます。  参考にさせていただきます。')
    }

    if (element.checked == false) {
        alert('プライバシーポリシーに同意していません。')
    }
}










//アラート
function contact_click() {
    alert('お問い合わせフォームでいただいたメールは、不具合により受け取ることが出来ません。')
}



