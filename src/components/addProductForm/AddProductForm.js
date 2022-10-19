
import { Link } from "react-router-dom";
import { useState } from "react";
import Mydata from '../../service/Mydata.js';

import './addProductFrom.scss'

const AddProductForm = () => {

    const [data, setData] = useState({
        sku: "",
        name: "",
        price: "",
        type: "",
        size: 0,
        weight: 0,
        volume: 0,
    });


    const [volume, setVolume] = useState({
        height: "",
        width: "",
        length: ""
    })


    const { createProduct } = Mydata();
    function handle(e, data, set) {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        set(newData);
    }


    function submit(e) {
        e.preventDefault();

        if (data.type === "2") {
            data.volume = `${volume.height},${volume.width},${volume.length}`;
        }
        createProduct(data);
        window.location.href = "/";
    }

    let option;

    if (data.type === "0") {
        option = <>
            <label htmlFor="size">Size (MB)</label>
            <input type="number" id="size" name="size" placeholder="product size" value={data.size} onChange={e => handle(e, data, setData)} />
        </>
    }

    if (data.type === "1") {
        option = <>
            <label htmlFor="weight">Weight (KG)</label>
            <input type="number" id="weight" name="weight" placeholder="product weight" value={data.weight} onChange={e => handle(e, data, setData)} />
        </>
    }

    if (data.type === "2") {
        option =
            <fieldset>
                <label htmlFor="height">Height(CM)</label>
                <input type="number" id="height" name="height" placeholder="product height" value={volume.height} onChange={e => handle(e, volume, setVolume)} />
                <label htmlFor="width">Width (CM</label>)
                <input type="number" id="width" name="width" placeholder="product width" value={volume.width} onChange={e => handle(e, volume, setVolume)} />
                <label htmlFor="lenght">Lenght (CM)</label>
                <input type="number" id="length" name="length" placeholder="product length" value={volume.length} onChange={e => handle(e, volume, setVolume)} />
            </fieldset>
    }

    return (
        <>
            <h1 className="form_title">Product Add</h1>
            <form className="form" onSubmit={(e) => submit(e)} id="product_form">
                <div className="form-part">
                    <label htmlFor="sku">SKU </label>
                    <input type="text" id="sku" name="sku" placeholder="sku" value={data.sku} onChange={e => handle(e, data, setData)} required />
                </div>
                <div className="form-part">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="product name" value={data.name} onChange={e => handle(e, data, setData)} required />
                </div>
                <div className="form-part">
                    <label htmlFor="price">Price ($)</label>
                    <input type="number" id="price" name="price" placeholder="product price" value={data.price} onChange={e => handle(e, data, setData)} required />
                </div>
                <div className="form-part">
                    <label htmlFor="type">
                        <span>Type Switcher</span>
                    </label>
                    <select id="productType" name="type"
                        value={data.type} onChange={e => handle(e, data, setData)}
                        required>
                        <option value="">Select Category</option>
                        <option value="0">DVD</option>
                        <option value="1">Book</option>
                        <option value="2">Furniture</option>
                    </select>
                </div>
                <div className="form-part">
                    {option}
                </div>
                <div className="form-part__btn">
                    <button className="form_btn  form_btn--save" >Save</button>
                    <Link className="form_btn form_btn--cancel" to='/'>Cancel</Link>
                </div>
            </form>
        </>

    );
};


export default AddProductForm;