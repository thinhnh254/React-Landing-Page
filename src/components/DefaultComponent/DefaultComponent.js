import React from "react";
import HeaderComponent from "../HeaderComponents/HeaderComponent";
import FooterComponent from "../FooterComponents/FooterComponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default DefaultComponent;
