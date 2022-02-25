<?php 

require_once "config/config.php";
require_once $path_db_file;

$response=[
    "resp"=>"Edytowano wydarzenie zaznaczenie/odznaczenie"
];

try{
    $post = json_decode(file_get_contents('php://input'), true);

    $db = new Event();


    // wyświetlenie aktualnej listy wydarzeń
    $event = $db->getEvent($post["id"]);       
    $event = $event->fetch_array(MYSQLI_ASSOC);
    $response["post"] =$post;
    $response["event"]=$post['status'];

    if(isset($post["status"])){
        $event['status']=$post['status'];
        $updateEvent=$db->edit($event);

        $response['mess']="UPDATed statsu !!";
        $response["status"]=200;
    }
    else {
        $response["error"]="Coś poszło nie tak !!!";
        $response["status"]=400;
    }

    $db->close();

    echo json_encode($response);
    
}
catch(Exception $e){
    $response["resp"]="Coś poszlo nie tak";
}

?>