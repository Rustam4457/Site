<<<<<<< HEAD
<?php

if(isset($_POST['email'])) {
 
    $email_to = "dadadaya@.com";
    $email_subject = "vasyaPu@gmail.com";
 
    function died($error) {
=======
<?php 
if(isset($_POST['email'])) {
 
    $email_to = "example@domain.com";
    $email_subject = "subject@.com";
 
    function died ($error) {
   
>>>>>>> 35d3f0cf7858f52c42f01ed92c4382c68f4e5629
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
<<<<<<< HEAD
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['title']) ||
        !isset($_POST['feedback'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $name = $_POST['name']; 
    $email= $_POST['email']; 
    $title = $_POST['title']; 
    $feedback = $_POST['feedback'];
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $string_exp = "/^[A-Za-z .'-]+$/";


   if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  } 
=======
    if(!isset($_POST['name']) || 
        !isset($_POST['email']) ||
        !isset($_POST['title']) ||
        !isset($_POST['feedback']) 
        
    

 
    $name_contact = $_POST['name'];  
    $email = $_POST['email']; 
    $title = $_POST['title'];  
    $feedback = $_POST['feedback']; 

    $string_exp = "/^[A-Za-z .'-]+$/";
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
   if(!preg_match($string_exp,$name_contact )) {

    $error_message .= 'The  Name you entered does not appear to be valid.<br />';
  }
>>>>>>> 35d3f0cf7858f52c42f01ed92c4382c68f4e5629

  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
<<<<<<< HEAD
  if(!preg_match($string_exp,$title)) {
    $error_message .= 'The Title you entered does not appear to be valid.<br />';
  }
 
  if(strlen($feedback) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
=======
  if(strlen($feedback) < 2) {
    $error_message .= 'The FeedBack you entered do not appear to be valid.<br />';
>>>>>>> 35d3f0cf7858f52c42f01ed92c4382c68f4e5629
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
<<<<<<< HEAD
    $email_message .= "Name: ".clean_string($name)."\n";
=======
    $email_message .= "Name: ".clean_string($name_contact)."\n";
>>>>>>> 35d3f0cf7858f52c42f01ed92c4382c68f4e5629
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Title: ".clean_string($title)."\n";
    $email_message .= "Feedback: ".clean_string($feedback)."\n";
 
<<<<<<< HEAD
echo $headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
 
}
 
?>
 
 
 
=======
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
}
?>
 


>>>>>>> 35d3f0cf7858f52c42f01ed92c4382c68f4e5629
