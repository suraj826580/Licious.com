import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import CartSlideMaker from "./CartSlideMaker";

export default function CartDrawer() {
  const { isOpener, onCloser, btnRefer, del } = useContext(GlobalContext);
  const arr = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {}, [del]);

  return (
    <>
      <Drawer
        size={"sm"}
        isOpen={isOpener}
        placement="right"
        onClose={onCloser}
        finalFocusRef={btnRefer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"#202021"}> Order Summary</DrawerHeader>
          <Box py={2} border={"1px solid"} bg={"#407504"} color={"#fff"}>
            <Center key={Math.random()}>
              Congratulations, Your delivery charge is waived off!!!
            </Center>
          </Box>
          <DrawerBody>
            {arr.length <= 0 ? (
              <Center>Oops! Your Cart Is Empty</Center>
            ) : (
              arr.map((item, id) => <CartSlideMaker {...item} no={id + 1} />)
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button
              w={"100%"}
              color={"#fff"}
              _hover={{ backgroundColor: "#406504" }}
              bg="#407504">
              Proceed to Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
