import React from "react";
import "./Box.scss";

const Box = ({ img, title, text }) => {
  return (
    <div className="box-components">
      <img src={img} alt="boxImg" className="boxImg" />

      <h2 className="box-title">{title}</h2>

      <p className="box-text">{text}</p>

      <p className="learnMore">learn more</p>
    </div>
  );
};

export default Box;
