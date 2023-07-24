import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cart, setCart] = useState([]); // State to keep track of products in the cart

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== categoryName)
      );
    }
  };

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    if (cart[product.id]) {
      setCart({
        ...cart,
        [product.id]: cart[product.id] + 1,
      });
    } else {
      // If not, add it to the cart with a quantity of 1
      setCart({
        ...cart,
        [product.id]: 1,
      });
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1; // Decrease the quantity if the product has more than 1 in the cart
      } else {
        delete updatedCart[productId]; // Remove the product from the cart if the quantity is 1
      }
      return updatedCart;
    });
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* Category filter checkboxes */}
      <div>
        <div className="product-filter">
          <label className="filter-heading">Filter by Category:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="electronics"
                checked={selectedCategories.includes("electronics")}
                onChange={handleCategoryChange}
              />
              Electronics
            </label>
            <label>
              <input
                type="checkbox"
                value="jewelery"
                checked={selectedCategories.includes("jewelery")}
                onChange={handleCategoryChange}
              />
              Jewelery
            </label>
            <label>
              <input
                type="checkbox"
                value="men's clothing"
                checked={selectedCategories.includes("men's clothing")}
                onChange={handleCategoryChange}
              />
              Men's Clothing
            </label>
            <label>
              <input
                type="checkbox"
                value="women's clothing"
                checked={selectedCategories.includes("women's clothing")}
                onChange={handleCategoryChange}
              />
              Women's Clothing
            </label>
          </div>
        </div>
        {/* Product List */}
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} key={product.id}>
                <img src={product.image} alt={product.title} />
              </Link>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-rating">{`${product.rating.rate} (${product.rating.count} ratings)`}</div>
              </div>
              <div className="product-details">
                <div className="product-price">Rs.{product.price}</div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show Cart component */}
      </div>
      <Cart
        cartItems={cart}
        products={products}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Products;
