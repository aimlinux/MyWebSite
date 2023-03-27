<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $body = $_POST['body'];

    mb_language('ja');
    mb_internal_encoding('UTF-8');

    $to = 'aimlinux1017@gmail.com';//送信先メール
    $subject = 'aimlinuxのホームページより、お問い合わせがありました。'; //件名
    $message = 'お名前 : {$name}\nメールアドレス : {$email}\n\n{$body}'; //本文

    $headers = "From: {$email}";


    if (mb_send_mail($to, $subject, $message, $headers)) {
        echo '送信が完了しました。\nありがとうございました。';
    } else {
        echo '申し訳ありません。\n送信に失敗しました。';
    }
}


?>
</body>
</html>


