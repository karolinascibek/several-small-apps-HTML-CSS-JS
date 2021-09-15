<?php 
require_once("../../global/database/db.php");

class Event  extends db{
    private $table = "calendar";

    public function getEventForDay($date){
        $query = "SELECT * FROM ".$this->table." WHERE date='".$date."'";
        return $this->db->query($query);
    }

    public function created($columns, $values){
        $query = "INSERT INTO ".$this->table."(".$columns.") VALUES (".$values.")";
        return $this->db->query($query);
    }
    public function formatDate($old,$new, $value){
        return str_replace($old, $new, $value);
    }



}

?>
