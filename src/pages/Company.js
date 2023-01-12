import React from "react";
import { Card } from "react-bootstrap";
import data from "../data";
import { Row } from "react-bootstrap";

export default function CompanyTeam(props) {
  return (
    <div>
      <h1 className="meet">Meet Our Team</h1>

      <div className="in-main">
        <img
          className="img"
          src="https://ideas.darden.virginia.edu/sites/default/files/2019-12/201912_Roberts_Race-Leadership.jpg"
          alt="pic-of-our-team"
        />

        <p >
          At Zenach, we are proud of the talented and dedicated team of
          professionals who make our company what it is. Our employees bring a
          diverse range of skills and experiences to the table, and their
          commitment to excellence is evident in everything they do.
          <br />
          <br />
          Our team members are more than just employees; they are the heart and
          soul of our company. We value their contributions and are committed to
          creating a positive and supportive work environment where they can
          thrive.
          <br />
          <br />
          In addition to their professional skills, our team members are also
          passionate about what they do. They are constantly seeking out new
          challenges and opportunities to learn and grow, and they are always
          willing to go the extra mile to deliver the best possible results for
          our customers.
          <br />
          <br />
          Overall, we believe that our team is what sets us apart from the
          competition. We are grateful for the hard work and dedication of each
          and every one of our employees, and we are confident that together, we
          will continue to achieve great things.
          <br />
          <br />
          We are proud of the team we have built and the work we do together. We
          hope you will join us in our mission to using sustainable and ethical
          production practices.
        </p>
      </div>

      <Row style={{ padding: "10px" }} className="g-4">
        {data.map((info) => {
          const { name, img, title, email, par } = info;
          return (
            <Card key={info.id} style={{ width: "18rem" }}>
             <div>
              <figure>
                
                  <Card.Img
                style={{ paddingTop: "5px", borderRadius: "12px" }}
                variant="top"
                src={img}
              />
              </figure>
             </div>
            
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
                <Card.Subtitle style={{ textAlign: "center" }}>
                  {title}
                </Card.Subtitle>
                <Card.Text>{par}</Card.Text>
                <Card.Text style={{ textAlign: "center", color: "##5a6d6b" }}>
                  {email}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}
