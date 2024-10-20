import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import EcoFriendlyIcon from "images/eco-friendly.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import RiceMillImage from "images/AI Generated/Rice Mill.jpeg";
import MachineryImage from "images/AI Generated/Rice Processing Machinery.jpeg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimationRevealPage>
      <Header/>
      <MainFeature1
        subheading={<Subheading>About Pachakam</Subheading>}
        heading="We are  a modern Rice mill."
        buttonRounded={false}
        // primaryButtonText="See Portfolio"
        imageSrc = {RiceMillImage}
        hideButton = {true}
        description=" For 34 years, we've perfected homegrown excellence, sourcing paddy
              exclusively from Kerala's fertile lands. Supporting local farmers
              and communities, we bring you the freshest quality rice. Kerala's
              pride, our legacy promotes the state's agricultural heritage."
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Innovating Tradition & Enhancing Taste."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc = {MachineryImage}
        textOnLeft={false}
        description="At Pachakam,  we're driven to revolutionize rice excellence through cutting-edge milling technology and rigorous quality control and prioritize environmental sustainability"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="At Pachakam, we're guided by a set of core values that shape our decisions, actions, and relationships."
        cards={[
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Delivering exceptional quality rice products, encouraging feedback, analyzing customer preferences, and innovating products to meet evolving tastes."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Fostering collaboration, respect, and open communication among employees"
          },
          {
            imageSrc: EcoFriendlyIcon,
            title: "Nurturing Earth",
            description: "Dedicated to reducing waste, ee prioritize eco-friendly practices, thereby supporting a greener future"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
