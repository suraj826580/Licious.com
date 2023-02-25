import React from "react";
import {
  List,
  ListItem,
  Divider,
  Flex,
  Box,
  Center,
  Link,
  VStack,
} from "@chakra-ui/react";
const Citylist = [
  "Bengaluru",
  "NCR",
  "Hyderabad",
  "Chandigarh",
  "Panchkula",
  "Mohali",
  "Mumbai",
  "Pune",
  "Chennai",
  "Coimbatore",
  "Jaipur",
  "Cochin",
  "Vijaywada",
  "Vishakhapatnam",
  "Kolkata",
  "Lucknow",
  "Kanpur",
  "Nagpur",
];
const Spreads = [
  "Chunky Continental Chicken Spread",
  " Chunky Butter Chicken Spread",
  " Chunky Sweet Tamarind Chicken Spread",
  " Chunky Herby Tomato Chicken Spread",
  "Chunky Shawarma Chicken Spread",
  "Chunky Honey-Mustard Chicken Spread",
];
const Chicken = [
  "Chicken Curry Cut (Large - 8 to 10 Pieces)",
  " Chicken Breast - Boneless",
  " Chicken Drumstick - Skinless",
  " Tender Spring Chicken Curry Cut",
  "Chicken Leg (Whole) with Thigh",
  "Chicken Thigh (Boneless)",
];
const mutton = [
  "Goat Boneless",
  "Goat Mince/Keema",
  "Premium Lamb Curry Cut",
  "Goat Shoulder - Curry Cut",
  "Lamb Boneless",
  " Goat Curry Cut (Shoulder Chaamp Puth - 11 to 14 pieces)",
];
const fistandseafood = [
  "Seer (Surmai) Steaks",
  " Freshwater Rohu Large - Bengali Cut (w/o Head)",
  " White Pomfret - (Whole and Cleaned)",
  " Indian Salmon/Rawas Steaks",
  "Basa Fillet - (Platinum Grade)",
  " Prawns Small (Whole)",
  " Freshwater Rohu - Bengali Cut (Without Head)",
  " Singara Steaks",
];
const meatMasala = [
  "Asli Garam Masala",
  " Original Tandoori Chicken Masala",
  " Shandaar Butter Chicken Masala",
  " Khansama Biryani Masala",
  " Classic Meat Masala",
  "Chatpata Fish Fry Masala",
  " Dakshin Pepper Fry Masala",
];
export default function ReaminingPartOfFooter() {
  return (
    <>
      <Box>
        <Flex alignItems={"center"} w={"80%"} m={"auto"}>
          <Box ml={5} fontWeight={"semibold"} color={"#5b524a"}>
            CITIES WE SERVE
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"85%"}></Box>
        </Flex>
        <Center>
          <List
            mb={5}
            ml={4}
            color={"#4A4A4A"}
            mt={1}
            alignItems="flex-start"
            display={"flex"}
            flexWrap="wrap"
            fontSize={"14px"}
            w={"80%"}>
            {Citylist.map((item) => (
              <Link>
                <ListItem
                  key={Math.random()}
                  letterSpacing={"1px"}
                  borderRight={"1px solid #4A4A4A"}
                  pr={"10px"}
                  pl={"10px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Flex alignItems={"center"} w={"80%"} m={"auto"} mb={5}>
        <Box ml={5} fontWeight={"semibold"} color={"#5b524a"}>
          POPULAR SEARCHES
        </Box>
        <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
      </Flex>
      <Box>
        <Flex alignItems={"center"} w={"80%"} m={"auto"} color={"#5b524a"}>
          <Box ml={5} fontWeight={"semibold"}>
            SPREADS
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
        </Flex>
        <Center>
          <List
            color={"#4A4A4A"}
            mt={1}
            display={"flex"}
            flexWrap="wrap"
            ml={4}
            fontSize={"14px"}
            w={"80%"}>
            {Spreads.map((item) => (
              <Link>
                <ListItem
                  key={Math.random()}
                  borderRight={"1px solid"}
                  pr={"10px"}
                  pl={"10px"}
                  letterSpacing={"1px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Box mt={5}>
        <Flex alignItems={"center"} w={"80%"} m={"auto"} color={"#5b524a"}>
          <Box ml={5} fontWeight={"semibold"}>
            CHICKEN
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
        </Flex>
        <Center>
          <List
            key={Math.random()}
            color={"#4A4A4A"}
            mt={1}
            display={"flex"}
            flexWrap="wrap"
            ml={4}
            fontSize={"14px"}
            w={"80%"}>
            {Chicken.map((item) => (
              <Link>
                <ListItem
                  borderRight={"1px solid"}
                  key={Math.random()}
                  pr={"10px"}
                  pl={"10px"}
                  letterSpacing={"1px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Box mt={5}>
        <Flex alignItems={"center"} w={"80%"} m={"auto"} color={"#5b524a"}>
          <Box ml={5} fontWeight={"semibold"}>
            MUTTON
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
        </Flex>
        <Center>
          <List
            color={"#4A4A4A"}
            mt={1}
            display={"flex"}
            flexWrap="wrap"
            ml={4}
            fontSize={"14px"}
            w={"80%"}>
            {mutton.map((item) => (
              <Link>
                <ListItem
                  key={Math.random() + Date.now()}
                  borderRight={"1px solid"}
                  pr={"10px"}
                  pl={"10px"}
                  letterSpacing={"1px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Box mt={5}>
        <Flex alignItems={"center"} w={"80%"} m={"auto"}>
          <Box ml={5} fontWeight={"semibold"} color={"#5b524a"}>
            FISH & SEAFOOD
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
        </Flex>
        <Center>
          <List
            key={Math.random()}
            color={"#4A4A4A"}
            mt={1}
            display={"flex"}
            flexWrap="wrap"
            ml={4}
            fontSize={"14px"}
            w={"80%"}>
            {fistandseafood.map((item) => (
              <Link>
                <ListItem
                  key={Math.random() + Date.now()}
                  borderRight={"1px solid"}
                  pr={"10px"}
                  pl={"10px"}
                  letterSpacing={"1px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Box mt={5}>
        <Flex alignItems={"center"} w={"80%"} m={"auto"}>
          <Box ml={5} fontWeight={"semibold"} color={"#5b524a"}>
            MEAT MASALA
          </Box>
          <Box h={"1px"} ml={4} border={"1px solid #f6f7f9"} w={"80%"}></Box>
        </Flex>
        <Center>
          <List
            color={"#4A4A4A"}
            mt={1}
            display={"flex"}
            flexWrap="wrap"
            ml={4}
            fontSize={"14px"}
            w={"80%"}>
            {meatMasala.map((item) => (
              <Link>
                <ListItem
                  key={Math.random() + Date.now()}
                  borderRight={"1px solid"}
                  pr={"10px"}
                  pl={"10px"}
                  letterSpacing={"1px"}>
                  {item}
                </ListItem>
              </Link>
            ))}
          </List>
        </Center>
      </Box>
      <Center>
        {" "}
        <Divider w={"78%"} my={4} />
      </Center>
      <VStack width={"77%"} margin={"auto"}>
        <Box>
          {" "}
          <Box color={"#5b524a"} fontWeight={"semibold"} mb={2} ml={-6}>
            We will sell only the meat that we would eat ourselves.{" "}
          </Box>
          <Box fontSize={"12.5px"} ml={-6} mb={2}>
            At Licious, we’re big meat-lovers. And by big, we mean huge. So when
            it comes to the meat we put on your plate, we’re extremely picky.
            Every single product is handpicked by a team with years of
            experience.
          </Box>
        </Box>
        <Box>
          {" "}
          <Box color={"#5b524a"} fontWeight={"semibold"} mb={2}>
            If it’s not fresh, we won’t sell it
          </Box>
          <Box fontSize={"12.5px"} mb={2}>
            For meat to stay fresh and retain its natural juices, it needs to be
            stored at a temperature between 0° and 5°C. We maintain this
            temperature from the time we procure the product to cleaning,
            cutting and storing it, until it leaves for delivery. And even when
            it’s out for delivery, we keep it chilled right up to your
            doorstep.Did we mention that we’re obsessed?
          </Box>
        </Box>
        <Box>
          {" "}
          <Box color={"#5b524a"} fontWeight={"semibold"} mb={2}>
            We will charge only for what you buy
          </Box>
          <Box fontSize={"12.5px"} mb={2}>
            Doesn’t everyone do this? Not really. Most other places first weigh
            the meat, then cut up the pieces, and throw out the parts which
            aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you
            still pay based on the original weight even though what you finally
            get is 10% to 30% less.
          </Box>
        </Box>{" "}
      </VStack>
      <Divider pb={5} w={"77%"} margin="auto" mb={5} />
      <Box alignContent={"center"} mb={7}>
        <Center color={"#5b524a"} fontWeight={"semibold"}>
          2023 Delightful Gourmet Pvt Ltd. All Rights Reserved.
        </Center>
        <Box
          w={"80%"}
          margin="auto"
          mt={3}
          fontSize={"13px"}
          textAlign="center">
          {" "}
          Licious is your one-stop fresh meat delivery shop. In here, you get
          nothing but the freshest meat & seafood, delivered straight to your
          doorstep. Now you can buy meat online anytime at your convenience.
          Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
          Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
          natural and healthy. Once you've experienced Licious, you'll never go
          back to the old way of buying meat and seafood.
        </Box>
      </Box>
    </>
  );
}
