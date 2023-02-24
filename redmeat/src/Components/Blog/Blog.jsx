import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Center, Heading } from "@chakra-ui/react";
import axios from "axios";

export default function Blog(props) {
  const [Data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://63c71d3cd307b76967472ac6.mockapi.io/products")
      .then((res) => {
        const arr = res.data.filter((item) => item.type === "blog");
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Heading
        mt={"80px"}
        mb={"20px"}
        position="relative"
        left={{ base: "20%", sm: "20%", md: "10%", xl: "10%" }}
        fontWeight={"semibold"}
        fontSize={"25px"}
        color={"#524a4b"}>
       {props.heading}
      </Heading>
      <Center>
        <Flex
          flexWrap={{
            base: "wrap",
            sm: "wrap",
            md: "nowrap",
            xl: "nowrap",
          }}
          width={"80%"}
          gap={5}
          justifyContent={"space-evenly"}>
          {Data.map((item) => {
            return (
              <Box
                key={Math.random()}
                h={"500px"}
                w={"450px"}
                overflow="hidden">
                <Box>
                  <Image
                    src={item.images}
                    borderRadius={8}
                    w={"100%"}
                    h={"400px"}
                  />
                </Box>
                <Box>
                  <Heading
                    lineHeight={1.5}
                    fontWeight={"600"}
                    mt={2}
                    fontSize={"19px"}
                    color={"#4a4a4a"}>
                    {item.title}
                  </Heading>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Center>
    </>
  );
}
