import { Center, Flex, Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Know_The_Licious_Way() {
  return (
    <Center>
      <Flex
        border={"1px solid gray"}
        borderColor={"gray.200"}
        w={"80%"}
        borderRadius={5}
        mt={5}
        justifyContent="space-around"
        pt={3}
        pb={3}
        fontWeight={"600"}
        color={"gray.600"}
        fontFamily="arial"
        direction={{ base: "column", sm: "column",md:"row" }}>
        <Box textAlign={"Center"} p={2}>
          Premium <br /> Produce
        </Box>
        <Box p={2} textAlign={"Center"}>
          World-Class Central <br /> Production Unit{" "}
        </Box>
        <Box p={2} textAlign={"Center"}>
          150 Quality <br /> Checks
        </Box>
        <Box p={2} textAlign={"Center"}>
          Delivered Fresh <br /> Everyday
        </Box>
        <Box p={2} textAlign={"Center"}>
          Extraordinary <br />
          Cooking
        </Box>
      </Flex>
    </Center>
  );
}
