import { useParams } from "react-router-dom";
import { useContext } from "react";
import seed from "../seed";
import { Button } from "react-bootstrap";
import { ShopContext } from "./cart/shop-context/shop-context";
import Footers from "../components/Footers";


export default function SingleProduct(props) {
  const { id } = useParams();
  const params = parseInt(id);
  const { addToCart, cartItems } = useContext(ShopContext);

  const info = seed.find((element) => {
    return element.id === params;
  });
  const cartItemCount = cartItems[info.id];

  return (
    <div>
    <div className="single-product">
      <img src={info.image} className="imgs"></img>
      <br />
      <br />
      <span className="name">{info.name}</span>
      <br />

      <span className="price">${info.price}</span>
      <br />
      <div className="des">
        <span className="desc">{info.description}</span>
      </div>
      <Button variant="dark" onClick={() => addToCart(info.id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </Button>
    </div>
    <Footers/>
 </div> 
 );
}
