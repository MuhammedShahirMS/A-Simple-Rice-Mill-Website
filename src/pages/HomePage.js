import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useNavigate } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import riceImages from "../images/AI Generated/Cooked rice.jpg";
import img1 from "../images/AI Generated/Mill Photo.jpg";
import img2 from "../images/AI Generated/Paddy harvesting.jpg";
import img3 from "../images/AI Generated/Rice Mill Outer view.jpeg";
import img4 from "../images/AI Generated/Rice Dish.jpeg";
import ProductSection from "../sections/Products";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;
const imageCss = tw`rounded-4xl`;

export default () => {

  const navigate = useNavigate()

  const images = [img1, img2];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    console.log('THE SCROLL Handle is', id, 'and', element);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    else {
      navigate(id)
    }
  };

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Serving Quality{" "}
            <HighlightedText>Nourishing Families</HighlightedText>
          </>
        }
        description="Bringing the finest rice varieties to your Table, ensuring every meal is a delight"
        imageSrc={riceImages}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Explore Products"
        watchVideoButtonText="Watch us"
        carouselImages={images}
        handleScroll={handleScroll}
      />

        <MainFeature
          subheading={<Subheading>Established Since 1990</Subheading>}
          heading={
            <>
              We've been serving for
              <wbr /> <HighlightedText>over 34 years.</HighlightedText>
            </>
          }
          description={
            <Description>
             Experience the authentic taste of Kerala's rice, sourced from the state's most fertile regions
              <br />
              <br />
              Our expertise lies in preserving the natural goodness and
              nutritional value of rice. And our state-of-the-art processing
              facilities ensure minimal processing, retaining the rice's natural
              fiber and nutrients.
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="About us"
          primaryButtonUrl="/about_us"
          imageSrc={img3}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        />

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}

      <section id="products">
        <ProductSection />
      </section>

      <MainFeature2
        subheading={<Subheading>'Pachakam' - A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        description="Choose us for the finest Kerala rice experience. Our advanced processing preserves the natural goodness of every grain, ensuring great taste and nutrition. With rigorous quality control and a range of healthy options, you can trust us for authentic Kerala rice, nurtured with care and dedication"
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={img4}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/* <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
