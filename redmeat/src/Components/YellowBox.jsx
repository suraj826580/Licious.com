import React from "react";
import logo from "../Images/Yellow Loog.png";
import { Box, Button, Center, Divider, Flex, Image } from "@chakra-ui/react";
export default function YellowBox() {
  return (
    <Center>
      <Box w={"60%"} borderRadius={10} p={2} bg={"#fedd93"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", sm: "row", md: "row" }}>
          <Box w={"15%"}>
            <Image src={logo} alt={"Image"} w={"100%"} />
          </Box>
          <Button
            color="#fff"
            _hover={{
              bg: "#D11243",
            }}
            bg={"#D11243"}>
            Join Now
          </Button>
        </Flex>
        <Divider mt={2} border={"1px solid gray"} />
        <Flex>
          <Box fontSize={"14px"} pl={6} fontWeight={"600"} mt={2}>
            Join MEATOPIA to get free delivery on all orders with cart value
            more than Rs.99.
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
