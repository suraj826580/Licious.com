import React, { useState } from "react";
import SinleCard from "./SingleCard";
import axios from "axios";
import { GridItem, Grid, Heading, Stack, Box } from "@chakra-ui/react";

export default function ShopByCategoiries(props) {
  const [Data, setData] = useState([]);
  const getData = () => {
    axios.get("http://localhost:8080/food").then((res) => setData(res.data));
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Stack style={{ position: "relative", left: "10%" }} p={6} mt={4} mb={-4}>
        <Heading fontSize={"30px"} color={"#4b4b4b"} fontWeight={"600"}>
          {" "}
          {props.heading}
        </Heading>
        <p color={"#9eadc6"}>{props.subheading}</p>
      </Stack>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
        }}
        // gap={[1, 4, 2]}
        m={"0px 10%"}
        mt={10}>
        {Data.map((item) => {
          return <SinleCard {...item} key={Math.random()} />;
        })}
      </Grid>
    </Box>
  );
}
