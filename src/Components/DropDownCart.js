import React from "react";
const DropDownCart = ({ props }) => {
  return (
    <div className="cart-popup">
      <h4>Added 1 item to cart</h4>
      <div className="popUp-info">
        <div className="popUp-left-img">
          <img src={props.img} alt="" />
        </div>
        <div className="popUp-right-info">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownCart;
