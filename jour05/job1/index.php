<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
    <?php if (!isset($_SESSION['user'])) {
        echo  "<a href=inscription.php>Inscription</a>";

        echo "<a href=connexion.php>Connexion</a>";
    } ?>
</header>

<body>
    <p><?php if (isset($_SESSION['user'])) {
            echo "bonjour" . $prenom;
        }
        $prenom ?>
    <p>
    
</body>
<script type="text/javascript" src="script.js"></script>
</html>
