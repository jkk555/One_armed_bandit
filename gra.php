<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: logowanie1.php');
		exit();
	}
	
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>One armed bandit</title>
    <link rel="stylesheet" href="main.css">
    <script src="script_game.js"></script>
</head>

<body>

<div style="text-align: right;">
    <a href="logout.php">Wyloguj się</a>
</div>

<label id="money"> . </label>

<div id="rates" style="font-size: 20px; text-align: center;">  Stawka: 10 </div>

<div id="credit" style="font-size: 20px; text-align: center;">Do kredytu zostało: 60</div>

<div class="tlo">



    <table>

        <tr>

            <td id="photo1" ></td>
            <td id="photo2"></td>
            <td id="photo3"></td>

        </tr>

    </table>

    <br>
    <form method="post" name="money_database">


        <input hidden name="money_sent" id="money_sent">
        <input type="button" onclick="main()" class="myButton" value="START">

    </form>




    <br><br>

    <input type="button" name="rate1" class="myButton" onclick="rate1_add()" value="10">
    <input type="button" name="rate2" class="myButton" onclick="rate2_add()" value="25">
    <input type="button" name="rate3" class="myButton" onclick="rate3_add()" value="100">


</div>

<?php

session_start();

	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}

$money=$_POST['money_sent'];

$sql = "UPDATE users (`login`,`money`) set ($_SESSION[user],$money)";


?>


</body>
</html>