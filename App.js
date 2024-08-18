import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default App;
