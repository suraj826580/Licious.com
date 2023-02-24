import { Box, Center } from "@chakra-ui/react";
import React from "react";

export default function PageNotFound() {
  return (
    <Center>
      <Box
        margin={"auto"}
        border={"1px solid"}
        w={"100%"}
        h={"100vh"}
        backgroundRepeat="no-repeat"
        // backgroundSize="100%"
        backgroundImage="url(https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif)"></Box>
    </Center>
  );
}
