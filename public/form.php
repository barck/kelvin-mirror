<html>
<head>
    <meta charset="utf-8">
</head>
<body>
<?
# получаем данные и отсекаем пробельные символы в начале и конце:
$model = @ trim ($_POST['model']);
$color = @ trim ($_POST['color']);
$name = @ trim ($_POST['name']);
$tel = @ trim ($_POST['number']);
$email = @ trim ($_POST['message']);
# проверка, переданы ли все данные
if (! $model or ! $color or ! $name or ! $tel or ! $email) exit ('Необходимо заполнить все поля, вернитесь');
# отправка данных на мыло админу
mail ("artiv09@gmail.com",
    "Сообщение с сайта kelvin-mirrors",
    "$model \n\n $color \n\n $name \n\n $tel \n\n $email \n\n ");
?>
</body>
</html>
