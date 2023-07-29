import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemContainer from './containers/item-container';
import NavBar from './components/nav-bar';
import ProductDetailsContainer from './containers/product-detail-container';
import ContextProvider from './context';
import Cart from './containers/cart';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <NavBar/>
          <Routes>
            <Route path={'/'} element={<ItemContainer/>}/>
            <Route path={'/products/:category'} element={<ItemContainer/>}/>
            <Route path={'/product/:id'} element={<ProductDetailsContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path="/*" element={<Navigate to="/" replace={true}/>}/>
          </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
