<?php 

require_once "config/config.php";
require_once $path_db_file;

$response=[
    "resp"=>"Edytowano wydarzenie"
];

try{
    $post = json_decode(file_get_contents('php://input'), true);

    $db = new Event();


    // wyświetlenie aktualnej listy wydarzeń
    $event = $db->getEvent($post["id"]);       
    $event = $event->fetch_array(MYSQLI_ASSOC);
    $response["event"] =$event;

    if(isset($post['minutes']) && isset($post['hour']) &&  !empty($post['event']) ){
        if($db->validTime($post["hour"],$post["minutes"])){
            
            $post['time'] = $db->setTimeToDBEvent( $post["hour"],$post["minutes"]);
            $post["id"] = $event["id"];
            $post['status']=$event["status"];
            
            $updateEvent=$db->edit($post);

            $response["updated"]=$updateEvent;
            $response["msg"]="Zmiany zostały zapisane.";
            $response["status"]=200;
        }
        else{
            $response["error"]="Błedna wartość w polu godziny lub minut!";
            $response["status"]=400;
        }
    }
    else{
        $response['error']="Pole nie może być puste";
        $response["status"]=400;
    }

    // wyświetlenie aktualnej listy wydarzeń
    $events = $db->getEventForDaySort($event['date'], "time");       
    $response['events'] = $events->fetch_all(MYSQLI_ASSOC);

    $db->close();

    echo json_encode($response);
    
}
catch(Exception $e){
    $response["resp"]="Coś poszlo nie tak";
}

?>