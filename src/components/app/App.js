import './app.scss'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from '../MainPage'
import AddFormPage from '../AddFormPage'
import Page404 from '../Page404'
import Footer from '../footer/Footer';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/addproduct' element={<AddFormPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
