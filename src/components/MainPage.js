import { useState } from 'react';
import AppHeader from './header/Header'
import ProductList from './productLIst/ProductList'

const MainPage = () => {

  const [arrDelete, setArrDelete] = useState([]);
  const [isDeleted, setisDeleted] = useState(false);

  const handleArrDelete = (arr) => {
    setArrDelete(arr);
  }

  const handleIsDeleted = (boolean) => {
    setisDeleted(boolean);
  }

  return (
    <>
      <AppHeader
        handleIsDeleted={handleIsDeleted}
        arrDelete={arrDelete} />
      <main className="main">
        <ProductList
          handleArrDelete={handleArrDelete}
          arrDelete={arrDelete}
          isDeleted={isDeleted} />
      </main>
    </>

  );
}

export default MainPage;
