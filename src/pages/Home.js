import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footers from "../components/Footers";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="cust">
          <Button
            style={{ textAlign: "start" }}
            variant="outline-dark"
            onClick={() => navigate("create")}
          >
            Customize your order
          </Button>
        </div>
        <div className="home-container hover11 ">
          <div className="home-container2">
            <div className="column">
              <Carousel className="women-cat">
                <Carousel.Item>
                  <figure>
                    <img
                      style={{ width: "45vw", height: "40vh" }}
                      className="homeimg-women d-block w-100"
                      variant="top"
                      src="https://img.freepik.com/free-photo/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress_197531-9980.jpg?w=2000"
                      alt="women"
                      //
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3>Women Clothing</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <figure>
                    <img
                      style={{ width: "45vw", height: "40vh" }}
                      className="homeimg-women d-block w-100"
                      src="https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=2000"
                      alt="Second slide"
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3>Women Clothing</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="column">
              <Carousel className="women-cat">
                <Carousel.Item>
                  <figure>
                    <img
                      style={{ width: "45vw", height: "40vh"}}
                      className="homeimg-women d-block w-100"
                      variant="top"
                      src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg"
                      alt="women"
                      //
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3>Men Clothing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <figure>
                    <img
                      style={{ width: "45vw", height: "40vh"}}
                      className="homeimg-women d-block w-100"
                      src="https://img.freepik.com/free-photo/african-american-student-walking-street_1303-12703.jpg?w=2000"
                      alt="Second slide"
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3>Men Clothing</h3>
                    <p>Lorem ipsum consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="home-container2">
            <div className="column">
              {/* ======================= second section ====================== */}
              <Carousel className="shoe">
                <Carousel.Item>
                  <figure>
                    <img
                      style={{ width: "45vw", height: "40vh" }}
                      className="homeimg-women d-block w-100"
                      variant="top"
                      src="https://cf.shopee.co.id/file/d3a1fb1149a1592f79fb9d77adf16c43"
                      alt="women"
                      //
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3> Heels </h3>
                    <p>Lorem ipsum dolor sit elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <figure>
                    <img
                      style={{width: "45vw", height: "40vh" }}
                      className="homeimg-women d-block w-100"
                      src="https://i.guim.co.uk/img/media/e84afb2c6a22561d832cda99eab9fa98347e6b16/0_0_5215_3477/master/5215.jpg?width=700&quality=85&auto=format&fit=max&s=ea4129e30319fd0671af06fab103456a"
                      alt="Second slide"
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3>Heels</h3>
                    <p>Lorem ipsum dolor adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="column">
              <Carousel className="shoe">
                <Carousel.Item>
                  <figure>
                    
                    <img
                     style={{width: "45vw", height: "40vh" }}
                      className="homeimg-women men-shoe d-block w-100"
                      variant="top"
                      src="https://cdn.luxe.digital/media/2021/10/07105650/best-casual-shoes-men-reviews-luxe-digital%402x.jpg"
                      alt="women"
                      //
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3> Men Shoe </h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <figure>
                    <img
                     style={{width: "45vw", height: "40vh" }}
                      className="homeimg-women men-shoe d-block w-100"
                      variant="top"
                      src="https://addismercato.com/images/category/Shoes%20Icon.jpg"
                      alt="women"
                      //
                    />
                  </figure>
                  <Carousel.Caption>
                    <h3> Men Shoe </h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
}
