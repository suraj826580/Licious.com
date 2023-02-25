import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ChickenCard";
import { Center, Flex, Grid, Heading, Spinner } from "@chakra-ui/react";

export default function PBM() {
  const [loading, setloading] = useState(false);
  const [Data, setData] = useState([]);
  const getData = () => {
    setloading(true);
    axios
      .get("https://63c71d3cd307b76967472ac6.mockapi.io/products")
      .then((res) => {
        const arr = res.data.filter((item) => item.type == "pbm");
        setData(arr);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <Flex>
        <Heading
          color={"#59595c"}
          ml={"11%"}
          fontWeight={"semibold"}
          fontSize={"25px"}
          pt={2}>
          Plant Based Meat
        </Heading>
      </Flex>

      <Grid
        m="auto"
        width={"80%"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
        }}>
        {Data.map((item) => (
          <ProductCard {...item} />
        ))}
      </Grid>
    </>
  );
}
