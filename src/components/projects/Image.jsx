// Image.jsx

import { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 700px;
  height: 350px;

  position: relative;
  overflow: hidden;
  z-index: 2;

  @media screen and (max-width: 768px) {
    margin-left: 70px;
    margin-top: 30px;
    //height: 100px;
    width: 380px;
    margin-right: 80px;
  }
`;

const SliderList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 1s ease;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  @media screen and (max-width: 768px) {
    padding-left: 16px;
  }
`;

const SliderButtons = styled.div`
  position: absolute;
  top: 45%;
  left: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const SliderButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff5;
  color: #fff;
  border: none;
  font-family: monospace;
  font-weight: bold;
`;

const SliderDots = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SliderDot = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;

  &.active {
    width: 30px;
  }
`;

const Image = ({ images }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 <= images.length - 1 ? prevActive + 1 : 0
      );
    }, 3000);

    return () => clearInterval(refreshInterval);
  }, []);

  const handleButtonClick = (direction) => {
    setActive((prevActive) =>
      direction === "next"
        ? prevActive + 1 <= images.length - 1
          ? prevActive + 1
          : 0
        : prevActive - 1 >= 0
        ? prevActive - 1
        : images.length - 1
    );
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <SliderContainer>
      <SliderList style={{ transform: `translateX(-${active * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderList>
      <SliderButtons>
        <SliderButton onClick={() => handleButtonClick("prev")}>
          &lt;
        </SliderButton>
        <SliderButton onClick={() => handleButtonClick("next")}>
          &gt;
        </SliderButton>
      </SliderButtons>
      <SliderDots>
        {images.map((_, index) => (
          <SliderDot
            key={index}
            className={index === active ? "active" : ""}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </SliderDots>
    </SliderContainer>
  );
};

export default Image;
