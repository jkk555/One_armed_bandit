<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link href="system_style.css" rel="stylesheet">
</head>
<body>

<main>

    <div class="title">

        One armed bandit

    </div>

    <form action="zaloguj.php" method="post">

          <label>
            Login:
            <input type="text" name="login" class="input"/>
          </label><br><br>

        <label>
            Hasło:
            <input type="password" name="haslo" class="input" />
        </label><br><br>

        <input type="submit" value="Zaloguj się" /><br><br>

        <label>
            <a href="rejestracja1.php">lub zarejestruj</a>
        </label>


    </form>

</main>

</body>
</html>
