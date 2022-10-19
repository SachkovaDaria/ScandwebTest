import {useHttp} from '../hooks/html.hook.js';

const Mydata = () => {

    const {request} = useHttp();

    const GetAllProduct = async () => {
        const res = await request('http://f97764hq.beget.tech/api/post/read.php');
        return res;
    }

    const deleteProducts = async (obj) => {
        const res = await request(`http://f97764hq.beget.tech/api/post/delete.php`,'DELETE', JSON.stringify(obj));
    }

    const createProduct = async (data) => {
        console.log(JSON.stringify(data))
        const res = await request(`http://f97764hq.beget.tech/api/post/create.php`,'POST', JSON.stringify(data));
    }


    return {GetAllProduct, deleteProducts, createProduct}
}


export default Mydata;