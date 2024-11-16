import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

// Container and text styling with dynamic scaling using styled-components
const Container = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-1/2 bg-gray-100 pt-12 pb-12`}
  transform: scale(0.8); // Default scale for smaller screens
  @media (min-width: 640px) {
    transform: scale(1); // Scale to 100% for screens above 640px
  }
  @media (min-width: 768px) {
    transform: scale(1.05); // Slightly scale up for medium screens
  }
  @media (min-width: 1024px) {
    transform: scale(1.1); // Scale more for larger screens
  }
`;

const IconContainer = styled.div`
  ${tw`w-24 h-24 text-gray-400 mb-6`}
  svg {
    ${tw`w-full h-full`}
  }
`;


const Title = tw.h2`
  text-xl font-semibold text-red-800
  sm:text-lg md:text-base lg:text-xl
`;

const Subtitle = tw.p`
  mt-3 text-lg text-gray-600 text-center max-w-lg
  sm:text-base md:text-lg lg:text-xl
`;

const Button = tw.button`
  mt-6 px-6 py-3 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-700 transition duration-300
`;


const Description = tw.span`inline-block mt-8`;

// Empty State Component
const EmptyState = ({ onAction }) => {
  return (
    <Container>
      <IconContainer>
        {/* SVG for Empty Box Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h18M3 4v16h18V4M3 20h18"
          />
        </svg>
      </IconContainer>
      <Title>No Items Found</Title>
      <Description>
        It looks like there is nothing here yet.
      </Description>
    </Container>
  );
};

export default EmptyState;
