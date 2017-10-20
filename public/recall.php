<html>
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Гримерные зеркала Kelvin Mirror</title>
    <link rel="stylesheet" href="style/main.css">
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
</head>
<style type="text/css" media="screen">
    .start-block {
        background: url("../img/hero_image_1.jpg") no-repeat center center;
        background-size: cover;
        height: 100%;
    }
</style>
<body style="background: #000">
<header id="index">
    <div class="header-menu" >
        <div class="container">
            <a href="#index"><img src="img/logo.png" alt=""></a>
            <ul>
            </ul>
            <div class="phone-block">
                <a href="tel:+79630759960" class="phone">+7 (963) 075-99-60</a>

            </div>
        </div>
    </div>
</header>
<div class="start-block">
    <div class="container">
        <div>
            <h2><?php
                $tel = $_POST['number2'];
                # отправка данных на мыло админу
                if (mail("artiv09@gmail.com", "Заказ с сайта", "\nТелефон-перезвонить!:". $tel ,"From: admin@kelvin-mirrors.com \r\n"))
                {
                    echo "Заявка успешно отправлена, скоро с вами свяжутся!";
                } else {
                    echo "при отправке сообщения возникли ошибки";
                }
                header("refresh: 6; url=http://kelvin-mirrors.com");
                ?>
            </h2>
        </div>
    </div>
</div>
</body>
</html>
