import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Text,
  Flex,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";

const Footerpart1 = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="80%" marginInline="auto" mt={-6}>
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}>
        <Box>
          <Flex
            gap={10}
            fontFamily="Body Font Name"
            justifyContent={"space-between"}>
            <Box>
              <Heading
                fontWeight={"400"}
                fontSize={"16px"}
                mal={"9%"}
                fontFamily={"Arial"}
                color={"#4a4e54"}>
                USEFULL LINKS
              </Heading>
              <VStack
                alignItems={"left"}
                lineHeight={"20px"}
                color={"gray.500"}
                mt={1}>
                <CustomLink>Why Licious?</CustomLink>
                <CustomLink>Refer & Earn</CustomLink>
                <CustomLink>Licious Cash & Cash+</CustomLink>
                <CustomLink>Careers</CustomLink>
                <CustomLink>BLOG</CustomLink>
                <CustomLink>Campaign</CustomLink>
                <CustomLink>Bug Bounty Guidelines</CustomLink>
                <CustomLink>About Us</CustomLink>
                <CustomLink>FSSC 22000 Certification</CustomLink>
                <CustomLink>FSSAI Licenses</CustomLink>
                <CustomLink>SA8000 Certification</CustomLink>
                <CustomLink>Sitemap</CustomLink>
              </VStack>
            </Box>
            <Box >
              <Heading fontSize="md" fontWeight="semibold">
                EXPERIENCE LICIOUS APP ON MOBILE
              </Heading>
              <Flex mt={2} gap={2}>
                <CustomLink>
                  <Image
                    src={
                      "https://www.licious.in/img/rebranding/app-store-new.svg"
                    }
                  />
                </CustomLink>
                <CustomLink>
                  <Image
                    src={
                      "https://www.licious.in/img/rebranding/play-store-new.png"
                    }
                  />
                </CustomLink>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Stack
          //   border={"1px solid"}
          px={"25px"}
          direction={"row"}
          spacing={2}
          d={{ base: "none", sm: "flex" }}
          justifyContent={{
            base: "space-between",
            sm: "space-between",
            md: "normal",
          }}>
          <VStack spacing={1} alignItems="flex-start">
            <Text fontSize="md" fontWeight="semibold">
              CONTACT US
            </Text>
            <VStack alignItems="flex-start" color="#000">
              <CustomLink>Call: 1800-4190-786</CustomLink>
              <CustomLink>Talktous@licious.com</CustomLink>
              <VStack alignItems="flex-start">
                <Text fontSize="md" fontWeight="semibold">
                  REGISTERED OFFICE ADDRESS:
                </Text>
                <VStack alignItems="flex-start">
                  <Text>
                    House of Licious, Zed Pearl, No 12, <br />
                    Domlur Layout <br />
                    Bangalore, Karnataka - 560071
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
            <VStack alignItems="flex-start">
              <Text fontSize="md" fontWeight="semibold">
                HAVE SECURITY CONCERN
              </Text>
              <VStack spacing={1} alignItems="flex-start">
                <Text>
                  Mail us to: <br /> security@licious.com
                </Text>
              </VStack>
            </VStack>
          <Box w={"100px"} pl={"10px"}>
            <Image
              src={"https://www.licious.in/img/rebranding/3-dsecure.png"}
              alt="name"
            />
          </Box>
        </Stack>
      </Stack>

      {/* <Divider my={4} /> */}
    </Box>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}>
      {children}
    </Link>
  );
};

export default Footerpart1;
