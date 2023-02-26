import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export default function SingleProductPageCardMaker(props) {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={props.images}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 1 }}>
          <Box as={"header"}>
            <Heading
              color={"gray.700"}
              lineHeight={1.1}
              fontWeight={600}
              mb={1}
              fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}>
              {props.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}>
              ₹{props.price}
            </Text>
          </Box>

          <Stack
            pb={{ base: 5, sm: 20 }}
            spacing={{ base: 4, sm: 4 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}>
                Fresh and Delecious Non-Veg is always available on Redmeat
                Lajawab Freshness
              </Text>
              <Text fontSize={"md"}>
                Known for its intense and rich flavour, mutton liver (also known
                as Kaleji) is best enjoyed in a simple preparation such as
                Sauteed Liver and Onions, spicy Kaleji Fry, Moroccan Fried Liver
                etc. This meat is best cooked in a pan or oven and should be
                cooked until done and light pink in the centre. Do not overcook
                it! Our mutton comes from government-approved partners and
                passes through over 150 quality plus quality checks to ensure it
                is safe. The meat is free from antibiotic residue and is cut &
                cleaned by experts. It is then hygienically packed &
                vacuum-sealed to preserve its freshness.
              </Text>
            </VStack>
          </Stack>
          <Button
            rounded={"none"}
            w={"full"}
            size={"lg"}
            py={"7"}
            bg={"#d11342"}
            color={"#fff"}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>Delivery in 60 min </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
