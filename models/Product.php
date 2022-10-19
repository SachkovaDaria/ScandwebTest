<?php 

class Product {
    private $conn;
    private $table = 'products';

    public $sku;
    public $name;
    public $price;
    public $type;
    public $size;
    public $weight;
    public $volume;

    public function __construct($db) {
        $this->conn = $db;
    }

   public function read() {
 
    $query = 'SELECT * FROM ' . $this->table;
    
    $stmt = $this->conn->prepare($query);
   
    $stmt->execute();

    return $stmt;
   }

   public function delete() {
    
    $query = "DELETE FROM " . $this->table . " WHERE sku in ('" . implode("','", $this->sku) . "')";
   
    $stmt = $this->conn->prepare($query);
   
    if ($stmt->execute()) {
        return true;
    }
    return false;
   }

   public function create() {
    $query = 'INSERT INTO ' . $this->table . '
    SET 
    sku = "' . $this->sku . '",
    name = "' . $this->name . '",
    price = "' . $this->price . '",
    type = "' . $this->type . '",
    size = "' . $this->size . '",
    weight = "' . $this->weight . '",
    volume = "' . $this->volume . '"';
   

    $stmt = $this->conn->prepare($query);

    $this->sku = htmlspecialchars(strip_tags($this->sku));
    $this->name = htmlspecialchars(strip_tags($this->name));
    $this->price = htmlspecialchars(strip_tags($this->price));
    $this->type = htmlspecialchars(strip_tags($this->type));
    $this->size = htmlspecialchars(strip_tags($this->size));
    $this->weight = htmlspecialchars(strip_tags($this->weight));
    $this->volume = htmlspecialchars(strip_tags($this->volume));

    if ($stmt->execute()) {
        return true;
    }
    return false;
   }
}