import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  GridItem,
} from "@chakra-ui/react";

export default function SinleCard(props) {
  return (
    <GridItem mb={5}>
      <Center>
        <Box
          role={"group"}
          p={6}
          // maxW={"330px"}
          w={"full"}
          // bg={useColorModeValue("white", "gray.800")}
          rounded={"lg"}>
          <Box
            style={{ "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            rounded={"lg"}
            p={3}
            mt={-12}
            pos={"relative"}
            height={"250px"}
            overflow="hidden">
            <Image
              rounded={"lg"}
              height={230}
              transition="all .3s ease-in-out"
              width={282}
              objectFit={"cover"}
              src={props.image}
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Box>
          <Stack pt={3} align={"center"}>
            <Text
              color={"gray.600"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              fontWeight={"bold"}>
              {props.title}
            </Text>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  );
}
