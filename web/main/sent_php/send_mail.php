<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['body'];

    mb_language('ja');
    mb_internal_encoding('UTF-8');

    $to = 'aimlinux1017@gmail.com';//送信先メール
    $subject = 'aimlinuxのホームページより、お問い合わせがありました。'; //件名
    $body = 'お名前 : {$name}\nメールアドレス : {$email}\n\n{$message}'; //本文

    $headers = "From: {$email}";


    if (mb_send_mail($to, $subject, $body, $headers)) {
        echo '送信が完了しました。\nありがとうございました。';
    } else {
        echo '申し訳ありません。\n送信に失敗しました。';
    }
}


?>