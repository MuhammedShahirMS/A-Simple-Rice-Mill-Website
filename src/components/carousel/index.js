import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CarouselContainer = styled.div`
  ${tw`relative overflow-hidden w-full`}
`;

const CarouselInner = styled.div`
  ${tw`flex duration-300 ease-in-out`}
`;

const CarouselItem = styled.div`
  ${tw`w-full h-full flex-shrink-0 flex justify-center items-center`}
`;

const DotContainer = styled.div`
  ${tw`absolute bottom-0 left-0 w-full flex justify-center mb-4`}
`;

const Dot = styled.button`
  ${tw`w-2 h-2 rounded-full bg-gray-300 mr-2`}
  ${props => props.active && tw`bg-blue-500`}
`;

const Image = styled.img`
  ${tw`object-cover w-full h-full`}
`;

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselInner
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt={`Carousel Image ${index}`} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default Carousel;