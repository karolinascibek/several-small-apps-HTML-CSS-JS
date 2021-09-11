<?php 

//walidacja danych POST
// zapisanie danych do bazy 
// pobranie danych z bazy
$resp=[
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
$input = json_decode(file_get_contents('php://input'), true);
$events = [
    ["hour"=>"12:45","event"=>"Hellow ja"],
    ["hour"=>"12:45","event"=>"Hellow ja"],
    ["hour"=>"12:45","event"=>"Hellow ja"],
    ["hour"=>"12:45","event"=>"Hellow ja"],
];
array_push($events,$input);

$resp["events"]=$events;

echo json_encode($resp);

?>