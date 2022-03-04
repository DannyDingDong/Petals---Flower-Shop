import "../App.scss";
import CartItem from "../Components/CartItem";
import React from "react";
import { GoPackage } from "react-icons/go";
function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  let shippingPrice = itemsPrice > 50 ? 0 : 3.99;

  let isEmpty = () => {
    if (cartItems === undefined || cartItems.length === 0) {
      shippingPrice = 0.0;
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="container">
        <div className="cart-grid">
          <div className="cart-items">
            <h2 className="cart-title">MY CART</h2>
            {isEmpty() ? (
              <>
                <div className="empty-cart">
                  <h4>Cart is Empty</h4>
                </div>
              </>
            ) : (
              ""
            )}
            {cartItems.map((item) => (
              <div key={item.id} className="item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h1>£{item.price.toFixed(2)}</h1>
                  <h4>{item.title}</h4>
                  <ul>
                    <li>{item.colour}</li>
                    <li>{item.size}</li>
                    <li>Qty: {item.qty}</li>
                    <li>
                      {" "}
                      <button
                        onClick={() => onAdd(item)}
                        className="add-and-remove"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemove(item)}
                        className="add-and-remove"
                      >
                        -
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
            <div className="cart-item-info"></div>
          </div>
          <div className="checkout-total-delivery">
            <div className="total">
              <table>
                <tr className="table-title">
                  <td className="padding-bottom-3">Total</td>
                  <td className="padding-bottom-3 float-right">
                    £{(itemsPrice + shippingPrice).toFixed(2)}
                  </td>
                </tr>
                <tr className="sub-table">
                  <td>Sub-Total:</td>
                  <td className="float-right">£{itemsPrice.toFixed(2)}</td>
                </tr>
                <tr className="sub-table">
                  <td>Delivery:</td>
                  <td className="float-right">£{shippingPrice.toFixed(2)}</td>
                </tr>
              </table>
              <div className="check-out-btn-wrapper pt-2">
                <button className="green-btn">CHECKOUT</button>
              </div>
            </div>
            <div className="delivery-message">
              <GoPackage />
              <h3>Free Delivey with orders over £50.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
