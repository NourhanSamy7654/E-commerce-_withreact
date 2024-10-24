import { useState, useEffect } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <img
                  src={item.images}
                  alt="no photo"
                  style={{ width: "90px" }}
                />
                <span>{item.title}</span>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
