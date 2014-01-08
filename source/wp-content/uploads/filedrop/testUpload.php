<?php 
echo 'You uploaded '.$_FILES['file']['name']; 
//echo move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $_FILES['file']['name']);
?>