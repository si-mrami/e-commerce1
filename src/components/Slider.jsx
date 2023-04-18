import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../Data";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fad9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform :translateX(${props =>props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 50vw;
  height: 80%;
  margin-top: 50px;
  border-radius: 30px;
  user-drag: none;
  user-select: none;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 15px;
`;

const Slider = () => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right")
    {
      if (sliderIndex === sliderItems.length - 1)
        setSliderIndex(0);
      else
        setSliderIndex(sliderIndex + 1);
    }
    else {
      if (sliderIndex === 0)
        setSliderIndex(sliderItems.length - 1);
      else
        setSliderIndex(sliderIndex - 1);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
      {sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>SHOP NEW</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
