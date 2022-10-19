<?php
//headers

header('Access-Control-Allow-Headers: content-type');
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include_once '../../config/db.php';
include_once '../../models/Product.php';


$database = new DB();
$db = $database->connect();

$product = new Product($db);

$result = $product->read();

$num = $result->rowCount();

if ($num > 0) {
    $products_arr = array();
    $products_arr['data'] = array();

    while($row = $result-> fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $product_item = array(
            'sku'=> $sku,
            'name'=>$name,
            'price'=>$price,
            'type' =>$type,
            'size' =>$size,
            'weight'=>$weight,
            'volume' =>$volume
        );

        array_push($products_arr['data'],$product_item);
    }


    echo json_encode($products_arr);
} else {
  
   echo json_encode(array('message' => 'no products'));
}