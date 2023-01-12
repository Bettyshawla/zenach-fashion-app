import React, { useContext } from "react";
import { ShopContext } from "./shop-context/shop-context";
import PRODUCTS from "../../seed";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./cart-items";
import { Button, Form } from "react-bootstrap";
import Footers from "../../components/Footers";


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div>
    <div className="cart">
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {console.log(totalAmount, "tot")}
      {totalAmount > 0 ? (
        <div className="cart-but cart-info" >
          <p> Subtotal: ${totalAmount} </p>

          <Form >
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="nam" />
            <br />
            <label for="address">Address:</label>
            <br />
            <input type="text" id="address" name="address" />
            <br />
            <label for="phone">Phone:</label>
            <br />
            <input type="text" id="phone" name="phone" />
            <br />
            <label for="card-number">Card Number:</label> <br />
            <input type="text" id="card-number" name="card-number" /> <br />
            <label for="expiration-date">Expiration Date:</label> <br />
            <input
              type="text"
              id="expiration-date"
              name="expiration-date"
            />
            <br />
            <label for="security-code">Security Code:</label> <br />
            <input type="text" id="security-code" name="security-code" /> <br />
          </Form>

          <Button
            style={{ width: "15%", marginTop: "2rem" }}
            variant="success"
            onClick={() => navigate("/product")}
          >Continue Shopping</Button>

          <Button
            style={{ marginLeft: "1rem", width: "15%" , marginTop: "2rem"}}
            variant="dark"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </div>
      ) : (
        <h1 className="empty"> Your Shopping Cart is Empty</h1>
      )}
    </div>
    <Footers/>
    </div>
  );
};

