<?php 

require_once "./db.php";

$response=[
    "resp"=>"Edytowano wydarzenie"
];

try{
    $post = json_decode(file_get_contents('php://input'), true);
    $response["post"] =$post;

    $db = new Event();


    // wyświetlenie aktualnej listy wydarzeń
    $events = $db->getEvent($post["id"]);       
    $response['events'] = $events->fetch_all(MYSQLI_ASSOC);
    $db->close();
    
    //INSERT INTO  calendar ( `date`, `event`, user_id, status, `time`) VALUES ('15-09-2021', 'nove wydarzenie xD',1, 0,'12:00')
    echo json_encode($response);
    
}
catch(Exception $e){
    $response["resp"]="Coś poszlo nie tak";
}

?>