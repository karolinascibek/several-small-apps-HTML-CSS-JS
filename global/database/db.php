<?php 
// database
define("DB_HOST", "127.0.0.1");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "db_test");


class db{
    private $name = DB_NAME;
    private $host = DB_HOST;
    private $user = DB_USER;
    private $password = DB_PASS;

    protected $db = null;

    public function __construct()
    {
        $this->conn();
    }

    public function conn(){
       $db = new mysqli($this->host, $this->user, $this->password, $this->name);
       $this->db = $db;
    }

    public function query($query){
       return $this->db->query($query);
    }

   public function close(){
       $this->db->close();
   }
   
   }


?>