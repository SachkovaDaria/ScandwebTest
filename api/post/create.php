<?php
//headers

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-type');


include_once '../../config/db.php';
include_once '../../models/Product.php';


$database = new DB();
$db = $database->connect();

$product = new Product($db);

$data = json_decode(file_get_contents("php://input"));

$product->sku = $data->sku;
$product->name = $data->name;
$product->price = $data->price;
$product->type = $data->type;
$product->size = $data->size;
$product->weight = $data->weight;
$product->volume = $data->volume;


if ($product->create()) {
    echo json_encode (
        array('message' => 'Created')
    );
} else {
    echo json_encode (
        array('message' => 'Not Created')
    );
}

