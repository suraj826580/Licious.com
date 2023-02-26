import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Divider, useToast } from "@chakra-ui/react";
import { GlobalContext } from "../Context/GlobalContext";
export default function CartSlideMaker(props) {
  const [quant, setquant] = useState(props.quantity);
  const toast = useToast();
  const arr = JSON.parse(localStorage.getItem("cart")) || [];
  const handleDelete = (id) => {
    const newArray = arr.filter((item) => {
      return item.id != id;
    });
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const handleQuant = (id) => {
    const item = arr.map((item) => {
      return item.id == id ? { ...item, quantity: quant } : { ...item };
    });
    localStorage.setItem("cart", JSON.stringify(item));
  };

  const { setdel, del } = useContext(GlobalContext);

  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        fontWeight={"semibold"}>
        <Flex alignItems={"center"} gap={2} fontSize={"15px"}>
          <Box>{props.no}</Box>
          <Box>{props.title}</Box>
        </Flex>
        <Box>
          <button
            onClick={() => {
              handleDelete(props.id);
              toast({
                title: "Deleted",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
            }}
            style={{
              backgroundColor: "red",
              color: "#fff",
              padding: "1px 10px",
              fontWeight: "400",
              borderRadius: "5px",
            }}>
            Delete
          </button>
        </Box>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight={"semibold"}>
          <Flex pl={4}>
            <Box>₹{props.price * quant} </Box>
          </Flex>
        </Box>
        <Box mt={1}>
          <Flex alignItems={"center"} mt={1} gap={2}>
            <button
              disabled={quant == 1}
              onClick={() => {
                setquant((pre) => pre - 1);
              }}
              style={{
                backgroundColor: "#CFD8DC",
                padding: "0px 7px",
                borderRadius: "5px",
                color: "red",
              }}>
              -
            </button>
            <Box>{quant}</Box>
            <button
              onClick={() => {
                setdel(!del);
                setquant((pre) => pre + 1);
                handleQuant(props.id);
              }}
              style={{
                backgroundColor: "#CFD8DC",
                padding: "0px 7px",
                borderRadius: "5px",
                color: "red",
              }}>
              +
            </button>
          </Flex>
        </Box>
      </Flex>
      <Divider mt={3} mb={3} />
    </Box>
  );
}
