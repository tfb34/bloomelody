
<?php

    $feedback = "";

    if(!empty($_POST['g-recaptcha-response'])){
        
        $secret = '6LdoNqUcAAAAAMqTeKashcLTee67mxYmYCPd6R4w';
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success){
            $feedback = "g-recaptcha verified successfully";

            // Email Composition
            $to="bloomelody123@gmail.com"; 
            $subject="Bloomelody - Contact Form Submission";

            // Form inputs
            $name    = $_POST["name"];
            $email    = $_POST["email"];
            $message = $_POST["message"];
            
            $mailBody = "Name: $name\nEmail: $email\nMessage: $message\n\n";

            $message="$name submitted the following:\n\n" . $mailBody;

            //Send mail
            if(mail($to, $subject, $message, "From: $name <$email>")){
                $feedback = "success";
            }else{
                $feedback = "error";
            }
            
        }
        else
            $feedback = "Some error in verifying g-recaptcha";

        
    }

        
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloomelody</title>
   
    <!--Custom CSS-->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/utilities.css">

    <!--Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body style="text-align: center;margin-top:80px;">
        <?php if($feedback == "success") : ?>
            <i class="far fa-thumbs-up" style="font-size:3em;"></i><br><br>
            <h3>Thank you!</h3>
            <p class="body1-text">We've recieved your submission, and we'll be in touch soon!</p><br>
            <a href="/" class="button link-button">Go Back</a>

        <?php elseif($feedback == "error") : ?>
           <i class="far fa-thumbs-down" style="font-size:3em;"></i><br><br>
            <h3>Whoops!</h3>
            <p class="body1-text">Something went wrong, let's give this another try!</p><br>
            <a href="." class="button link-button">Try again</a>
        <?php else : ?>
            <i class="far fa-thumbs-down" style="font-size:3em;"></i><br><br>
            <h3>Whoops!</h3>
            <p class="body1-text"><?=$feedback ?></p><br>
            <a href="/" class="button link-button">Try again</a>
        <?php endif; ?>


</body>
</html>