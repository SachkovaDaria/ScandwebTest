// import './appHeader.css';
// import img from "../../img/banner.jpg"
import { useEffect } from 'react';
import Mydata from '../../service/Mydata.js';
import { Link } from "react-router-dom";

import './header.scss'

const AppHeader = (props) => {

    const { deleteProducts } = Mydata();

    useEffect(() => {
        props.handleIsDeleted(false);
    }, [props]);


    const allDelete = () => {
        let objDeleteProduct = { "sku": props.arrDelete }
        deleteProducts(objDeleteProduct);
        props.handleIsDeleted(true);
    }

    return (
        <header className="header">
            <p className="header_title">Product List</p>
            <ul className="btn_list">
                <Link to='/addproduct' className="btn bnt_add">ADD</Link>
                <button className="btn bnt_massDel" onClick={allDelete}>MASS DELETE</button>
            </ul>
        </header>
    )
}

export default AppHeader;
