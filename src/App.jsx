import'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/home";
import Shop from './Pages/shop';
import Cart from './Pages/cart';
import Contact from './Pages/contact';
import Account from './Pages/account';
import Wishlist from './Pages/wishlist';
import Checkout from './Pages/checkout';
import Error from './Pages/error';

const App = ()=> {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/shop' element={<Shop/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/account' element={<Account/>}/>
          <Route  path='/wishlist' element={<Wishlist/>}/>
          <Route  path='/checkout' element={<Checkout/>}/>
          <Route  path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
