import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Amazon Clone</h1>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
      <div className="header-cart">
        <span>🛒 Cart</span>
      </div>
    </header>
  );
}

export default Header;
