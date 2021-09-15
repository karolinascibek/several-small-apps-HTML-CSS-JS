<?php 

require_once "./db.php";


// odebranie wartość z post metod
$post = json_decode(file_get_contents('php://input'), true);
$date = str_replace('.', "-", $post['date']);

$db = new Event();
$events = $db->getEventForDay($date);
$data['events'] = $events->fetch_all(MYSQLI_ASSOC);

$db->close();

//ustawienie statusu do odpowiedzi 
if(empty($data['events'])){
    $data["status"]=204;
}
else{
    $data["status"]=200;
}

// wysłanie odp
$json = json_encode($data);
echo $json;

?>