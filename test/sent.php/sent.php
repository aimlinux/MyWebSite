<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>お問い合わせありがとうございます。</h1>
        <div>
            <p>・お名前</p>
            <p>
            <?php 
            echo $_POST["name"];
            ?>
            </p>
            <p>・email</p>
            <p>
            <?php 
            echo $_POST["email"];
            ?>
            </p>
            <p>・内容</p>
            <p>
            <?php 
            echo $_POST["body"];
            ?>
            </p>
        </div>
    </div>
</body>
</html>