import React, { useContext } from "react";
import { useState, useEffect } from "react";
import seed from "../seed";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ShopContext } from "./cart/shop-context/shop-context";
import Footers from "../components/Footers";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Product(props) {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div>
      <div>
        <Row style={{ padding: "10px" }} className="g-4">
          {seed.map((info) => {
            const { id, image, name, price } = info;
            const cartItemCount = cartItems[id];
            return (
              <Card className="pdt " key={info.id} style={{ width: "18rem" }}>
                <Link to={`/pdt/${id}`}>
                  <div className="hover01">
                    <figure>
                      <Card.Img
                        style={{
                          paddingTop: "5px",
                          height: "20rem",
                        }}
                        variant="top"
                        src={image}
                      />
                    </figure>
                  </div>
                </Link>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {name}
                  </Card.Title>

                  <Card.Text>$ {price}</Card.Text>
                </Card.Body>
                <Button
                  style={{ marginBottom: "1rem" }}
                  variant="dark"
                  onClick={() => addToCart(info.id)}
                >
                  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </Button>
              </Card>
            );
          })}
        </Row>
      </div>
      <Footers />
    </div>
  );
}
