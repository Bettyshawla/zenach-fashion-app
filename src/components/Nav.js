import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, NavLink } from "react-bootstrap";
import { Nav as NavB } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ShopContext } from "../pages/cart/shop-context/shop-context";
import { CgShoppingCart } from "react-icons/cg";

export default function Nav() {
  const { getTotalCartItems } = useContext(ShopContext);
  const totalItems = getTotalCartItems();

  return (
    <div>
      <nav className="nav-gen">
      <div className="gentle-hover-shake" style={{ fontSize: '30px', fontWidth: 'bold'}}>
        <span className="logo"> ♛ Zenach ♛  Fashion  </span>
</div>
         <Container className="nav-con">
          <NavB>
            <NavB.Link to="/" as={Link}>
              Home
            </NavB.Link>
            <NavB.Link to="/product" as={Link}>
              Product
            </NavB.Link>
            <NavB.Link to="/about" as={Link}>
              About
            </NavB.Link>
            <NavB.Link to="/special" as={Link}>
              Custom 
            </NavB.Link>

            <NavB.Link style={{ fontSize: "1rem" }} to="/carts" as={Link}>
              <div>
                <CgShoppingCart
                  style={{
                    fontSize: "1.6rem",
                    color: "white",

                  }}
                ></CgShoppingCart>
                {totalItems > 0 && (
                  <>
                    <sup>
                      <b style={{color: "white"}}>
                      {totalItems}
                      </b>
                      </sup>
                  </>
                )}
              </div>
            </NavB.Link>
          </NavB>

     
        </Container>
      </nav>
    </div>
  );
}
