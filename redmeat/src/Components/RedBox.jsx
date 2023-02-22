import React from "react";

import {
  Box,
  Center,
  Flex,
  Link,
} from "@chakra-ui/react";
export default function RedBox() {
  return (
    <Center mt={50}>
      <Box w={"60%"} borderRadius={10} p={2} bg={"#fdebec"} P={4}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", sm: "row", md: "row" }}>
          <Box fontWeight={"semibold"} pl={6}>
            My Rewards
          </Box>
          <Link
            _hover={{ textDecoration: "none" }}
            fontSize={"12px"}
            mr={2}
            fontWeight={"semibold"}
            color={"#d75a9a"}>
            CLICK TO VIEW &#62;
          </Link>
        </Flex>

        <Flex>
          <Box
            fontSize={"14px"}
            pl={6}
            fontWeight={"400"}
            fontFamily={"Arial"}
            mt={2}>
            Place an order and win your next reward!
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
