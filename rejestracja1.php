<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link href="system_style.css" rel="stylesheet">
</head>
<body>

<main>

    <div class="title">

        One armed bandit

    </div>

    <form method="POST" action="rejestracja.php">
        <label>
            Login:
            <input type="text" name="login">
        </label> <br><br>
        <label>
            Hasło:
            <input type="password" name="haslo1">
        </label> <br><br>
        <label>
            Powtórz hasło:
            <input type="password" name="haslo2" style="margin-right: 50px;">
        </label> <br><br>

        <input type="submit" value="Utwórz konto" name="rejestruj"> <br>

        <label>
            <a href="logowanie1.php">cofnij</a>
        </label>

    </form>


</main>


</body>
</html>
