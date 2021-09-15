<?php 

require_once "./db.php";

//walidacja danych POST
// zapisanie danych do bazy 
// pobranie danych z bazy
$response=[
    "resp"=>"DODAno nowe wydarzenie"
];

if( $_SERVER["REQUEST_METHOD"]=="POST"){

    // echo $_POST["date"];
    // if(!empty($_POST["date"])){
    //     $resp=[
    //         "resp"=>"DODAno nowe wydarzenie xD"
    //     ];
    //     echo json_encode($resp);
    // }
}
try{
    $post = json_decode(file_get_contents('php://input'), true);
    $post['date'] = str_replace('.', "-", $post['date']);

    $db = new Event();

    // dodanie nowego eventu
    if(!empty($post['date'])){

        if(!empty($post['time']) || !empty($post['event'])){
            $post['user_is']=1;
            $post['status']=1;
            
            $columns ="`date`, `event`, `user_id`, `status`,`time`";
            $values = "'".$post['date']."','".$post['event']."', 1, 0, '".$post['time']."'";
            
            $env = $db->created($columns, $values);

            $response["status"]=200;

        }
        else{
            $response["error"]="Pola nie mogą być puste!";
            $response["status"]=400;
        }
    }
    else{
        $response["resp"]="POST nie może byc pusty";
    }

    // wyświetlenie aktualnej listy wydarzeń
    $events = $db->getEventForDay($post['date']);       
    $response['events'] = $events->fetch_all(MYSQLI_ASSOC);
    $db->close();
    
    //INSERT INTO  calendar ( `date`, `event`, user_id, status, `time`) VALUES ('15-09-2021', 'nove wydarzenie xD',1, 0,'12:00')
    echo json_encode($response);
    
}
catch(Exception $e){
    $response["resp"]="Coś poszlo nie tak";
}

?>