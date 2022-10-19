<?php
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type');
header('Content-type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '../../config/db.php';
include_once '../../models/Product.php';

$database = new DB();
$db = $database->connect();

$product = new Product($db);
$data = json_decode(file_get_contents("php://input"));

$product->sku = $data->sku;

if ($product->delete()) {
   echo json_encode(
    array('message' => 'Post DELETED')
   );
} else {
    echo json_encode(
        array('message' => 'Post Not DELETED')
    );
}

