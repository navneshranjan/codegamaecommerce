import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, handleRemoveFromCart, products }) => {
  const getTotalItems = () => {
    return Object.keys(cartItems).reduce(
      (total, productId) => total + cartItems[productId],
      0
    );
  };

  const getItemCost = (productId) => {
    const product = products.find((p) => p.id === +productId);
    return product ? product.price * cartItems[productId] : 0;
  };

  // Convert cartItems object into an array
  const cartItemsArray = Object.keys(cartItems).map((productId) => ({
    id: productId,
    quantity: cartItems[productId],
  }));

  const getTotalCartSum = () => {
    return cartItemsArray.reduce(
      (total, item) => total + getItemCost(item.id),
      0
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-header-container">
        <h2 className="cart-header">Cart</h2>
        <div className="cart-total">Total Items: {getTotalItems()}</div>
      </div>
      {cartItemsArray.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div>
          {cartItemsArray.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-name">
                {item.quantity} x{" "}
                {products.find((p) => p.id === +item.id).title}
              </div>
              <div className="cart-item-price">
                Rs.{getItemCost(item.id)} (
                {item.quantity > 1
                  ? `Rs.${products.find((p) => p.id === +item.id).price} each`
                  : `1 item`}
                )
              </div>
              <button
                className="cart-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total-sum">Rs.{getTotalCartSum()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
