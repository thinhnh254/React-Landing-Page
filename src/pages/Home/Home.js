import React from "react";
import HeaderComponent from "../../components/HeaderComponents/HeaderComponent";
import "./Home.scss";
import vectorLeft from "../../assets/vector-left.svg";
import vectorRight from "../../assets/vector-right.svg";
import bannerImage from "../../assets/banner-image.png";

const Home = () => {
  return (
    <div>
      <HeaderComponent />

      <section id="banner">
        <div className="banner-left">
          <p className="banner-text">
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </p>

          <div className="banner-btn">
            <button>view projects</button>

            <button>learn more</button>
          </div>
        </div>

        <div className="banner-right">
          <div className="vectorLeft">
            <img src={vectorLeft} alt="vector-left" />
          </div>

          <div className="vectorRight">
            <img src={vectorRight} alt="vector-right" />
          </div>

          <img src={bannerImage} alt="bannerImg" className="bannerImg" />
        </div>
      </section>
    </div>
  );
};

export default Home;
