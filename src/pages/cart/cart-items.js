import React, { useContext } from "react";
import { ShopContext } from "./shop-context/shop-context";
import { Button } from "react-bootstrap";
export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div key={id} className="cartItem">
      <img className="cartimg" src={image} />
      <div >
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="cart" >
          <Button onClick={() => removeFromCart(id)} variant='secondary'> - </Button>
          <input
            value={cartItems[id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <Button variant="success" onClick={() => addToCart(id)}>  + </Button>
        </div>
      </div>
    </div>
  );
};