import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import ProductsGrid from "components/cards/ProductsGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import productService from "services/productService";



const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

export default () => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const data = await productService.getProducts()
      console.log('The fetched data from CMS are', data.items);

      const assets = data.includes.Asset.reduce((acc, asset) => {
        acc[asset.sys.id] = asset.fields.file.url;
        return acc;
      }, {});

      const productsTransformed = data.items.map(item => ({
        title: item.fields.title,
        imageSrc: `https:${assets[item.fields.image[0].sys.id]}`, // Get the URL from includes
        price: '₹ ' + item.fields.price.toFixed(2), // Replace with actual price if available in your Contentful model
        rating: "4.5", // Replace with actual rating if available
        reviews: "23",  // Replace with actual reviews if available
        url: "#" // Set the actual product URL if needed
      }));

      
      setProducts(productsTransformed)
      
    } catch (error) {
      console.log('Error while fetching Products', error);
      
    }
  }
  
  
  
  return (
     <ProductsGrid
        data = {products}
        heading={
          <>
            Checkout our <HighlightedText>Products</HighlightedText>
          </>
        }
      />
  );
}
