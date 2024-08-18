import React from 'react';

function ShoppingCart() {
  return (
    <aside className="shopping-cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <p>No items in cart</p>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </aside>
  );
}

export default ShoppingCart;
