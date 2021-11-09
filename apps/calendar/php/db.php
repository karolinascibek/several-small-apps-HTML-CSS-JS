<?php 
require_once("../../../global/database/db.php");

class Event  extends db{
    private $table = "calendar";


    public function getEvent($id){
        $query = "SELECT * FROM ".$this->table." WHERE id='".$id."'";
        return $this->db->query($query);
    }

    public function getEventForDay($date){
        $query = "SELECT * FROM ".$this->table." WHERE date='".$date."'";
        return $this->db->query($query);
    }
    public function getEventForDaySort($date, $column){
        $query = "SELECT * FROM ".$this->table." WHERE date='".$date."' ORDER BY ".$column;
        return $this->db->query($query);
    }

    public function created($columns, $values){
        $query = "INSERT INTO ".$this->table."(".$columns.") VALUES (".$values.")";
        return $this->db->query($query);
    }

    public function edit($values){
        $query = "UPDATE ".$this->table." SET event='".$values['event']."', time='".$values['time']."',status='".$values['status']."' WHERE id=".$values['id'];
        return $this->db->query($query);
    }

    public function delete($id){
        $query = "DELETE FROM ".$this->table." WHERE id=".$id;
        return $this->db->query($query);
    }


    public function formatDate($old,$new, $value){
        return str_replace($old, $new, $value);
    }


    // format danych do bazy danych 
    public function getColumns(){
        $columns ="`date`, `event`, `user_id`, `status`,`time`";
        return $columns;
    }

    public function setValuesToColumns($array){
        $values = "'".$array['date']."','".$array['event']."',". $array['user_id'].",".$array['status'].",'".$array['time']."'";
        return $values;
    }


    // validacja danych
    public function validHour($value){
        if(is_numeric($value)){
            if( $value < 0 || $value >23){
                return false;
            }
            return true;
        }
        return false;
    }
    public function validMinute($value){
        if(is_numeric($value)){
            if($value < 0 || $value >59){
                return false;
            }
            return true;
        }   
        return false;
    }
    
    public function validTime($hour, $minute){
        if(strlen($hour) > 2 || strlen($minute) > 2){
            return false;
        }
        else if($this->validHour($hour) && $this->validMinute($minute)){
            return true;
        }
        return false;
    }
    
    public function formatHourOrMinutes($value){
        if(strlen($value) < 2){
            return  "0".$value;
        }
        return $value;
    }
    
    public function setTimeToDBEvent($hour, $minute){
        return $this->formatHourOrMinutes($hour).":".$this->formatHourOrMinutes($minute);
    }



}

?>
