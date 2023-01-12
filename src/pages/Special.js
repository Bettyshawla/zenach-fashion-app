import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Footers from "../components/Footers";
export default function Special() {
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/api/special")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ======= DELETE ========
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/api/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // ========= Update ===========
  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/api/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <div className="specialAll">
        <h1 className="sp-title">Special custom made orders:</h1>

        {/* =============   Modal for the Update Custom order ============= */}

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update your custom order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Product title"
                  name="title"
                  value={updatedPost.title ? updatedPost.title : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="product description"
                  name="description"
                  value={updatedPost.description ? updatedPost.description : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Prduct color"
                  name="color"
                  value={updatedPost.color ? updatedPost.color : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Product size"
                  name="size"
                  value={updatedPost.size ? updatedPost.size : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Name"
                  name="name"
                  value={updatedPost.name ? updatedPost.name : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder=" Email Address"
                  name="email"
                  value={updatedPost.email ? updatedPost.email : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder=" Phone Number"
                  name="phone"
                  value={updatedPost.phone ? updatedPost.phone : ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveUpdatedPost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ================== POST ======================= */}
        <div className="special">
          {posts ? (
            <div>
              {posts.map((post) => {
                return (
                  <div key={post._id} className="box">
                    <h5 className="span">
                      NAME: <span className="span-special">{post.title}</span>
                    </h5>
                    <h5 className="span">
                      DESCRIPTION: &nbsp;
                      <span className="span-special">{post.description}</span>
                    </h5>
                    <h5 className="span">
                      COLOR:&nbsp;
                      <span className="span-special">{post.color}</span>
                    </h5>
                    <h5 className="span">
                      SIZE: &nbsp;
                      <span className="span-special">{post.size}</span>
                    </h5>

                    <h5 className="span">
                      NAME: &nbsp;
                      <span className="span-special">{post.name}</span>
                    </h5>
                    <h5 className="span">
                      EMAIL: &nbsp;
                      <span className="span-special">{post.email}</span>
                    </h5>
                    <h5 className="span">
                      PHONE NUMBER: &nbsp;
                      <span className="span-special">{post.phone}</span>
                    </h5>

                    <div className="special-button">
                      <Button
                        style={{
                          width: "30%",
                          marginRight: "1rem",
                          fontWeight: "bold",
                        }}
                        variant="outline-primary"
                        onClick={() => updatePost(post)}
                      >
                        Update
                      </Button>
                      <Button
                        style={{
                          width: "30%",
                          marginRight: "1rem",
                          fontWeight: "bold",
                        }}
                        variant="outline-danger"
                        onClick={() => deletePost(post._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footers />
    </div>
  );
}
