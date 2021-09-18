<?php

require_once "./db.php";

$response["resp"]="Delete event";

try{

    $post = json_decode(file_get_contents('php://input'), true);
    $response["post"]= $post;

    $model = new Event();
    $event = $model->getEvent($post["id"]);       
    $event = $event->fetch_array(MYSQLI_ASSOC);


    //aktualna lista wydarzeń
    $model->delete($post["id"]);

    $events = $model->getEventForDaySort($event['date'], "time")->fetch_all(MYSQLI_ASSOC);  
    $response["msg"]="Wydarzenie zostało usunięte.";
    $response["events"]= $events;
    $response["status"]=200;

}catch(Exception $e){
    $response["error"]= $e->e->getMessage();
}

$json = json_encode($response);
    echo $json;
 
?>