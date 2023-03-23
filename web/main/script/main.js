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
