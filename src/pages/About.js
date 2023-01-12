import React from "react";
import CompanyTeam from "./Company";
import Footers from "../components/Footers";

export default function About() {
  return (
    <div>
          <div className="About">
      <div>
        <h2 className="about-title">About our company</h2>
        <p>
          Zenach Clothing Co. is a trendy, online-based clothing retailer that
          has been in operation for the past 5 years. We offer a wide range of
          fashionable and affordable clothing options for women, men, and
          children, including tops, bottoms, dresses, shoes, and accessories.
          <br />
          <br />
          Our team is dedicated to bringing our customers the latest styles and
          the best shopping experience possible. We offer fast and reliable
          shipping, easy returns, and a variety of payment options to make
          shopping with us convenient and hassle-free.
          <br />
          <br />
          In addition to our focus on fashion and customer service, we are also
          committed to sustainability and ethical production practices. We use
          eco-friendly materials and work with suppliers who share our values.
          We also donate a portion of our profits to various charitable
          organizations.
          <br />
          <br />
          At Zenach Clothing Co., we strive to be more than just a clothing
          company. We want to make a positive impact on the world and be a force
          for good in the fashion industry.
        </p>
      </div>
      <div>
        <h2 className="about-title">Mission</h2>
        <p>
            At our clothing company, our mission is to provide high-quality, stylish, and affordable clothing to people of all ages and sizes. We are committed to using sustainable and ethical production practices, and to building a company culture that values diversity and inclusivity.
        </p>
        <h2 className="about-title">Vision</h2>
        <p>
            Our vision is to become the go-to destination for fashion-conscious consumers who value sustainability and inclusivity. We strive to create a positive impact on the world through our business practices and our partnerships with charitable organizations. We envision a future where our clothing is loved and worn by people all over the world, and where we are known for our commitment to making a difference.
        </p>
      </div>
      <div> <CompanyTeam/> </div>
     
    </div>
      <Footers />
    </div>

  );
}
