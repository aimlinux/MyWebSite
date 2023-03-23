//alert('おはよう');
//console.log('おはよう'); 



//お問い合わせフォームについて
$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});


//ページトップボタン...
jQuery(function() {
    var appear = false;
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 700); //0.5秒かけてトップへ戻る
        return false;
    });
});
