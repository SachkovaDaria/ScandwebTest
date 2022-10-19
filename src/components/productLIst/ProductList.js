import Mydata from '../../service/Mydata.js';
import { useState, useEffect } from 'react';

import './productList.scss'

const ProductList = (props) => {
    const [productList, setproductList] = useState([]);
    const [massDelete, setMassDelete] = useState([]);

    const { GetAllProduct } = Mydata();

    const handleChange = (e) => {
        if (e.target.checked) {
            setMassDelete(massDelete.concat(e.target.value));
        } else {
            setMassDelete(massDelete.filter(item => item !== e.target.value));
        }
    }


    const onResult = () => {
        GetAllProduct()
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (productList) => {
        setproductList(productList);
    }

    useEffect(() => {
        onResult();
    }, [props.isDeleted])

    props.handleArrDelete(massDelete);

    const renderProductsList = (arr) => {

        const items = arr.map((item, i) => {
            let optional = `size: ${item.size} MB`

            if (item.type === "1") {
                optional = `weight: ${item.weight} KG`
            }
            if (item.type === "2") {
                let str = item.volume;
                let arr = str.split(',');
                optional = `demension: ${arr[0]}x${arr[1]}x${arr[2]}`
            }
            return (
                <li className="product_item" key={item.sku}>
                    <label htmlFor={item.sku}>
                        <input className="delete-checkbox" type="checkbox" checked={item.massDelete}
                            value={item.sku}
                            onChange={(e) => handleChange(e)}
                            id={item.sku} />
                    </label>
                    <p className="product_sku" >sku: {item.sku}</p>
                    <p className="product_name">name: {item.name}</p>
                    <p className="product_price" >price:{item.price} $</p>
                    <p className="product_optional">{optional}</p>
                </li>
            )
        });

        return (
            <div className="product_list">
                {items}
            </div>
        )
    }


    const items = renderProductsList(productList);

    return (
        <div className="products">
            {items}
        </div>
    );
};


export default ProductList;