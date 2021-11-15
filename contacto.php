

<?php

$nombre = $_POST['nombre'];
$telefono= $_POST['telefono'];
$email = $_POST['email'];
$seleccion = $_POST['seleccion'];
$Comentarios = $_POST['comentarios'];
$para = "cabriucab@hotmail.com";
$titulo = "RESERVA";
$headers="iptecnology@hotmail.com";


$msjCorreo = "RESERVA ENTRANTE\n ---------------------------------------------------------------------------\n\n\n
Nombre Cliente: $nombre\n
Telefono: $telefono\n 
E-Mail: $email\n 
Ubicación de mesa:$seleccion\n 
Comentarios Adicionales: $Comentarios";
 
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $email)) {
 echo "<script language='javascript'>
 alert('Mensaje enviado, muchas gracias.');
 window.location.href = 'http://PULPERIAMENDIOLAZA.COM.AR';
</script>";

} else {
echo 'Falló el envio';
}
}

?>