<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    // "trim" : supprime espace ou autre caractère entre début et fin
    $nom = trim($_POST['nom']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if(!empty($nom) && !empty($email) && !empty($message))
    {
        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'bavasahibabdoulvahide@gmail.com';
        $mail->Password = 'webtravail..';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->CharSet = "utf-8";

        $mail->setFrom(''.$_POST['email'].'', ''.$_POST['nom'].'');

        $mail->addAddress('Bavasahib@hotmail.fr', 'Fayaz');

        $mail->isHTML(true);
        $mail->Subject = 'Contact du site : Fayaz A.M.';
        $mail->Body = '<html>
                            <body>
                                <div align = "center">
                                    <img src="cid:titre" alt="titre"/><br>
                                    <font size = "2pt">
                                        <u>Nom de l\'expéditeur :</u> '.$_POST['nom'].'<br />
                                        <u>E-mail de l\'expéditeur :</u> '.$_POST['email'].'<br />
                                    </font>
                                </div>
                                <br />
                                '.nl2br($_POST['message']).'
                                <br />
                            </body>
                        </html>
                        ';

        if($mail->send())
        {
            $statut = 'bon';
            $info = 'Votre message a été envoyé !';
        }
        else
        {
        }
    }
    else
    {
        $statut = 'mauvais';
        $info = 'Tous les champs doivent être complétés !';
    }

    $donnees = [
      'statut' => $statut,
      'info' => $info
    ];
    echo json_encode($donnees);
?>