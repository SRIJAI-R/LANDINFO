
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to your cart!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => handleIncrease(item)}>
                    +
                  </button>
                </div>

                <p>
                  Subtotal: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p>Total Items: {totalItems}</p>

            <h2>
              Total Price: ${totalPrice.toFixed(2)}
            </h2>

            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
