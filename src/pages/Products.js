import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Products from "sections/Products";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
     <Products/>
      <Footer/>
    </AnimationRevealPage>
  );
};
