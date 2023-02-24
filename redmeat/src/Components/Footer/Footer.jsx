import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Footerpart1 from "./Footerpart1";
import logo from "./logo.png";
import ReaminingPartOfFooter from "./ReaminingPartOfFooter";
// import logo from "../Images/logo.png";
export default function Footer() {
  return (
    <>
      <Center mt={"-10px"}>
        <Flex alignItems={"center"} w={"80%"} mt={"20px"}>
          <Box>
            <Image src={logo} alt="image" w={"150px"} />
          </Box>
          <Box h={"1px"} ml={10} border={"1px solid #f6f7f9"} w={"100%"}></Box>
        </Flex>
      </Center>
      <Footerpart1 />
      <ReaminingPartOfFooter />
    </>
  );
}
