import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footers from "../components/Footers";
export default function CreateProduct() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    color: "",
    size: "",
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("/api/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/special");
  };

  return (
    <div>
    <div className="customize-pdt">
      <h1>Customize your order</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            placeholder="Product title"
            value={post.title}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="description"
            placeholder="Product description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="color"
            placeholder="Product color"
            value={post.color}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="size"
            placeholder="Product size"
            value={post.size}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="name"
            placeholder="Customer Name"
            value={post.name}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="email"
            placeholder="Email address"
            value={post.email}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="phone"
            placeholder="Phone number"
            value={post.phone}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Check
          style={{textAlign: "start"}}
            type="switch"
            id="custom-switch"
            label="By submitting this form, I agree to the terms and conditions listed on Zenach Fashion's website."
          />
         



        </Form.Group>
        <Button
          variant="outline-primary"
          onClick={handleClick}
          style={{ marginBottom: "1rem" }}
        >
          Save Product
        </Button>
      </Form>
      <Button
        variant="outline-dark"
        onClick={() => navigate("/")}
        style={{ marginBottom: "2rem" }}
      >
        Back
      </Button>
      
    </div>
    <Footers />
    </div>
  );
}
