import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_men.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path='/women' element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCategory category="kids" banner={kids_banner} />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
