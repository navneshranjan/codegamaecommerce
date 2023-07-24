// Header.js

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">CodeGama</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands, and more"
          />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <div className="user-profile">User Profile</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
