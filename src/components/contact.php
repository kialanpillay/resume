<?php
  $name= $_POST[‘name’];
  $visitors_email= $_POST[‘email’];
  $message= $_POST[‘message’];

  $email_from ='kialanpillay@gmail.com';
  $email_subject ='Hi!';
  $email_body = "Name: $name.\n".
                "User Email: $visitors_email.\n".
                "User Message: $message.\n".
  $to="kialanpillay@gmail.com"   ;
  $headers="From: $email_from \r\n";
  $headers .="Reply-To: $visitors_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
 ?>
