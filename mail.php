    <?php

        if(isset($_POST["message"])){
            $message = "Ce message via la page contact du portfolio
            Nom : ". $_POST["nom"]."
            Email : ". $_POST["email"]."
            Message : ". $_POST["message"];

            $retour = mail("titouan.barry@etu.univ-smb.fr", $_POST["sujet"],$message, 
            "From:contact@exemple.fr" . "\r\n" . "Reply-to:" .$_POST["email"]);
        }
        if($retour){
            echo( "<p> The email has been sent successfully.<p>");
        }

    ?>

    <html>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <a class="formulairelink" href="http://51.83.36.122/~bartit/portfolio/">Return to home page</a>
    </body>

</html>