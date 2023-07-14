import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImageSlider() {
  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
  };
  return (
    <Container {...settings}>
      <Wrapper>
        <img src="/images/slider-scales.jpg" />
      </Wrapper>
      <Wrapper>
        <img src="/images/slider-badging.jpg" />
      </Wrapper>
      <Wrapper>
        <img src="/images/slider-badag.jpg" />
      </Wrapper>
      <Wrapper>
        <img src="/images/slider-scale.jpg" />
      </Wrapper>
    </Container>
  );
}

export default ImageSlider;

const Container = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: visible;
  }

  .slick-arrow {
    z-index: 1;
  }
  li.slick-active button {
    &:before {
      color: white;
      font-size: 10px;
    }
  }
`;
const Wrapper = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 3px solid rgba(255, 255, 255, 0.8);
    }
  }
`;
