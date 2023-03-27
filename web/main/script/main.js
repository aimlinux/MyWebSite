//alert('おはよう');
//console.log('おはよう'); 


//ページトップボタン...
jQuery(function() {
    var appear = false;
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {  //100pxスクロールしたら表示
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
