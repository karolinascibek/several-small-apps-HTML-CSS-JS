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
    $response["post"] =$post;

    $db = new Event();

    // dodanie nowego eventu
    if(!empty($post['date'])){

        if(!empty($post['hour']) || !empty($post['event']) || !empty($post['minutes']) ){

            if($db->validTime($post["hour"],$post["minutes"])){
                $post['user_id']=1;
                $post['status']=0;
                $post['time'] = $db->setTimeToDBEvent( $post["hour"],$post["minutes"]);
                
                // $columns ="`date`, `event`, `user_id`, `status`,`time`";
                // $values = "'".$post['date']."','".$post['event']."', 1, 0, '".$post['time']."'";
                $columns = $db->getColumns();
                $values = $db->setValuesToColumns($post);
                
                $env = $db->created($columns, $values);

                $response["status"]=200;
            }
            else{
                $response["error"]="Błedna wartość w polu godziny lub minut!";
                $response["status"]=400;
            }

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
    $events = $db->getEventForDaySort($post['date'], "time");       
    $response['events'] = $events->fetch_all(MYSQLI_ASSOC);
    $db->close();
    
    //INSERT INTO  calendar ( `date`, `event`, user_id, status, `time`) VALUES ('15-09-2021', 'nove wydarzenie xD',1, 0,'12:00')
    echo json_encode($response);
    
}
catch(Exception $e){
    $response["resp"]="Coś poszlo nie tak";
}

?>