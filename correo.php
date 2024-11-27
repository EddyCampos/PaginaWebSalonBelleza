<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$mensaje .= "Nombre: ".$nombre." \n";
$mensaje .= "Número Teléfono: ".$telefono."\n";
$mensaje .= "Mensaje: ".$_POST['mensaje']."\n";
$mensaje .= "Fecha Recibido: ".date("d/m/Y", time());

$para = "november10bc@gmail.com";
$asunto = "NUEVO COMENTARIO DE CLIENTE";

mail($para, $asunto, utf8_decode($mensaje));

header("Location: contacto.html");
?>