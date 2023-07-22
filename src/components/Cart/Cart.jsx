import React from "react";
import "./Cart.css"; // Import the Cart.css file with improved styles

const Cart = ({ cartItems, handleRemoveFromCart, products }) => {
  const getTotalPrice = () => {
    return Object.keys(cartItems).reduce(
      (total, productId) =>
        total + cartItems[productId] * getProductPrice(productId),
      0
    );
  };

  const getProductPrice = (productId) => {
    const product = products.find((p) => p.id === +productId);
    return product ? product.price : 0;
  };

  // Convert cartItems object into an array
  const cartItemsArray = Object.keys(cartItems).map((productId) => ({
    id: productId,
    quantity: cartItems[productId],
  }));

  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart</h2>
      {cartItemsArray.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div>
          {cartItemsArray.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-name">
                {item.quantity} x{" "}
                {products?.find((p) => p.id === +item.id).title}
              </div>
              <div className="cart-item-price">
                Rs.{item.quantity * getProductPrice(item.id)}
              </div>
              <button
                className="cart-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">Total: Rs.{getTotalPrice()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
