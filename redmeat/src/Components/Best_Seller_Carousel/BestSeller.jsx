import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Heading } from "@chakra-ui/react";
import BestSellerCarouselCard from "../Best_Seller_Carousel/BestSellerCarouselCard";
import axios from "axios";
export default function BestSeller(props) {
  const [data, setdata] = useState([]);
  const getData = () => {
    axios
      .get("https://63c71d3cd307b76967472ac6.mockapi.io/products")
      .then((res) => {
        const filterarray = res.data.filter(
          (el, id) => el.type === "fishAndSeedFood" || el.type == "chicken"
        );
        setdata(filterarray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Heading
        fontSize={"25px"}
        fontWeight={"600"}
        position="relative"
        left={"12%"}
        mt={4}
        color={"#4f4a4b"}>
        {" "}
        {props.heading}
      </Heading>
      <Slider
        {...settings}
        settings={{
          base: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
          sm: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
          md: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        }}
        style={{
          width: "80%",
          margin: "auto",
        }}>
        {data.map((item) => (
          <BestSellerCarouselCard {...item} key={Math.random()} />
        ))}
      </Slider>
    </>
  );
}
